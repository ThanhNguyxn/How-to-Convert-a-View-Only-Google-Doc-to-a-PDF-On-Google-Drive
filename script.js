/**
 * Google Doc to PDF Converter Script
 * 
 * This script converts a view-only Google Doc to a downloadable PDF.
 * It works by capturing all page images and creating a PDF document.
 * 
 * Usage:
 * 1. Open the view-only Google Doc in your browser
 * 2. Scroll through the entire document to load all pages
 * 3. Open browser Developer Tools (F12) and go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. Wait for the PDF to be generated and downloaded
 * 
 * Note: For best results, use Chrome browser
 */

// First, load the jsPDF library
(function() {
    // Create a function to initialize the PDF creation
    function initPdfCreation() {
        console.log("Starting PDF conversion process...");
        
        // Create a new PDF document
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Get all images from the document (Google renders pages as images)
        const elements = document.getElementsByTagName("img");
        console.log(`Found ${elements.length} potential page elements`);
        
        // Track number of pages processed
        let pageCount = 0;
        
        // Process each image
        for (let i = 0; i < elements.length; i++) {
            const img = elements[i];
            
            // Skip non-blob images (not document pages)
            if (!/^blob:/.test(img.src)) {
                continue;
            }
            
            console.log(`Processing page ${pageCount + 1}...`);
            
            // Create a canvas to draw the image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext("2d");
            
            // Set canvas dimensions to match image
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            // Convert canvas to image data
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            
            // Add a new page if not the first page
            if (pageCount > 0) {
                pdf.addPage();
            }
            
            // Add the image to the PDF
            // Calculate dimensions to fit the page properly
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgRatio = img.height / img.width;
            
            let imgWidth = pdfWidth;
            let imgHeight = imgWidth * imgRatio;
            
            // If image height exceeds page height, scale it down
            if (imgHeight > pdfHeight) {
                imgHeight = pdfHeight;
                imgWidth = imgHeight / imgRatio;
            }
            
            // Calculate position to center the image on the page
            const x = (pdfWidth - imgWidth) / 2;
            const y = 0; // Start from top
            
            // Add the image to the PDF
            pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
            
            pageCount++;
        }
        
        if (pageCount === 0) {
            console.error("No document pages found! Make sure to scroll through the entire document first.");
            alert("No document pages found! Please scroll through the entire document to load all pages, then try again.");
            return;
        }
        
        console.log(`PDF creation complete with ${pageCount} pages. Preparing download...`);
        
        // Get the document title or use a default name
        let fileName = "google-doc.pdf";
        try {
            const docTitle = document.title;
            if (docTitle && docTitle.length > 0) {
                fileName = docTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".pdf";
            }
        } catch (e) {
            console.warn("Could not get document title, using default filename");
        }
        
        // Save the PDF
        pdf.save(fileName);
        
        console.log("PDF download initiated!");
    }
    
    // Check if jsPDF is already loaded
    if (typeof jsPDF !== 'undefined') {
        console.log("jsPDF already loaded, starting conversion...");
        initPdfCreation();
    } else {
        console.log("Loading jsPDF library...");
        
        // Create a trusted policy for the script URL
        let scriptUrl;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            const policy = window.trustedTypes.createPolicy('pdf-converter-policy', {
                createScriptURL: (url) => url
            });
            scriptUrl = policy.createScriptURL('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
        } else {
            scriptUrl = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        }
        
        // Create script element to load jsPDF
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        
        // Start PDF creation once jsPDF is loaded
        script.onload = function() {
            console.log("jsPDF library loaded successfully");
            
            // In newer jsPDF versions, jsPDF is in the window.jspdf object
            window.jsPDF = window.jspdf.jsPDF;
            
            // Start PDF creation
            initPdfCreation();
        };
        
        // Handle loading errors
        script.onerror = function() {
            console.error("Failed to load jsPDF library");
            alert("Failed to load the PDF creation library. Please check your internet connection and try again.");
        };
        
        // Add the script to the document
        document.body.appendChild(script);
    }
})(); 