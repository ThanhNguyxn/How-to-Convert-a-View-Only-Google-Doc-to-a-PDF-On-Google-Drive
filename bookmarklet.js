/**
 * Google Doc to PDF Converter Bookmarklet
 *
 * This script is designed to be used as a bookmarklet in your browser.
 * A bookmarklet is a browser bookmark that contains JavaScript code
 * instead of a URL, allowing you to run the code on any page.
 *
 * Setup instructions:
 * 1. Create a new bookmark in your browser
 * 2. Name it "Save Google Doc to PDF" (or any name you prefer)
 * 3. Instead of a URL, paste the entire code below (starting with javascript:)
 * 
 * Usage:
 * 1. Open a view-only Google Doc
 * 2. Scroll through the entire document to load all pages
 * 3. Click the bookmarklet in your bookmarks bar
 * 4. The PDF will be automatically generated and downloaded
 */

javascript:(function(){
    // Check if we're on a Google Docs page
    if (!window.location.hostname.includes('docs.google.com')) {
        alert('This tool only works on Google Docs pages.');
        return;
    }
    
    // Show loading message
    const loadingMessageId = 'pdf-converter-loading';
    let loadingMessage = document.getElementById(loadingMessageId);
    
    if (!loadingMessage) {
        loadingMessage = document.createElement('div');
        loadingMessage.id = loadingMessageId;
        loadingMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 9999;
            font-family: Arial, sans-serif;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        `;
        document.body.appendChild(loadingMessage);
    }
    
    loadingMessage.innerHTML = 'Loading PDF converter...';
    
    // Function to load the jsPDF library
    function loadJsPDF(callback) {
        // If jsPDF is already loaded, use it
        if (typeof window.jsPDF !== 'undefined') {
            callback();
            return;
        }
        
        // Create a script element to load jsPDF
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = function() {
            // In newer jsPDF versions, jsPDF is in the window.jspdf object
            window.jsPDF = window.jspdf.jsPDF;
            callback();
        };
        script.onerror = function() {
            loadingMessage.innerHTML = '❌ Failed to load PDF library. Check your internet connection.';
            setTimeout(() => {
                document.body.removeChild(loadingMessage);
            }, 5000);
        };
        
        document.body.appendChild(script);
    }
    
    // Function to convert the document to PDF
    function convertToPdf() {
        loadingMessage.innerHTML = 'Converting document to PDF...';
        
        // Create PDF document
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Get all images (Google renders pages as images)
        const elements = document.getElementsByTagName("img");
        
        // Count valid images
        let pageCount = 0;
        
        // Process each image
        for (let i = 0; i < elements.length; i++) {
            const img = elements[i];
            
            // Skip non-blob images (not document pages)
            if (!/^blob:/.test(img.src)) {
                continue;
            }
            
            // Create canvas for image processing
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Draw image to canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            // Convert to image data
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            
            // Add new page if not the first page
            if (pageCount > 0) {
                pdf.addPage();
            }
            
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
            
            // Center the image on the page
            const x = (pdfWidth - imgWidth) / 2;
            const y = 0;
            
            // Add image to PDF
            pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
            
            pageCount++;
        }
        
        // Handle no pages found
        if (pageCount === 0) {
            loadingMessage.innerHTML = '❌ No document pages found! Make sure to scroll through the entire document first.';
            setTimeout(() => {
                document.body.removeChild(loadingMessage);
            }, 5000);
            return;
        }
        
        // Get document title or use default name
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
        
        loadingMessage.innerHTML = '✅ PDF downloaded successfully!';
        setTimeout(() => {
            document.body.removeChild(loadingMessage);
        }, 3000);
    }
    
    // Load jsPDF and convert the document
    loadJsPDF(convertToPdf);
})(); 