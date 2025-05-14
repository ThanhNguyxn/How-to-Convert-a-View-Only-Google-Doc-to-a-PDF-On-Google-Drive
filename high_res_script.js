/**
 * High-Resolution Google Doc to PDF Converter Script
 * 
 * This enhanced script converts a view-only Google Doc to a high-quality PDF.
 * For documents with important visual elements or when quality is essential.
 * 
 * Usage:
 * 1. Open the view-only Google Doc in your browser
 * 2. Zoom in the document (Ctrl/Cmd + for better quality)
 * 3. Scroll through the entire document to load all pages
 * 4. Open browser Developer Tools (F12) and go to Console tab
 * 5. Paste this entire script and press Enter
 * 6. Wait for the PDF to be generated and downloaded
 * 
 * Note: This script may take longer to process due to higher resolution
 */

// Main function wrapped in IIFE
(function() {
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
    
    loadingMessage.innerHTML = 'Preparing to convert document...';
    
    // Function to update status message
    function updateStatus(message) {
        console.log(message);
        loadingMessage.innerHTML = message;
    }
    
    // Main PDF creation function
    function createHighResPdf() {
        updateStatus('Starting high-resolution PDF conversion...');
        
        // Create a new PDF document with high-quality settings
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });
        
        // Get all images from the document
        const elements = document.getElementsByTagName("img");
        updateStatus(`Found ${elements.length} potential page elements`);
        
        // Track the valid page elements
        const validImages = [];
        
        // First pass: identify valid page images
        for (let i = 0; i < elements.length; i++) {
            const img = elements[i];
            if (/^blob:/.test(img.src) && img.width > 100) { // Only include substantive images
                validImages.push(img);
            }
        }
        
        updateStatus(`Processing ${validImages.length} document pages...`);
        
        // If no valid images found
        if (validImages.length === 0) {
            updateStatus('❌ No document pages found! Make sure to scroll through the entire document.');
            setTimeout(() => {
                document.body.removeChild(loadingMessage);
            }, 5000);
            return;
        }
        
        // Process function for batch processing to prevent memory issues
        let currentIndex = 0;
        
        function processNextBatch() {
            // Process a small batch at a time
            const batchSize = 5;
            const endIndex = Math.min(currentIndex + batchSize, validImages.length);
            
            for (let i = currentIndex; i < endIndex; i++) {
                const img = validImages[i];
                updateStatus(`Processing page ${i + 1} of ${validImages.length}...`);
                
                // Create high-res canvas
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext("2d");
                
                // Set canvas to 2x resolution for better quality
                const scaleFactor = 2;
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;
                
                // Apply high-quality settings to canvas
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                
                // Draw at 2x scale for better quality
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
                // Convert to high quality JPEG
                const imgData = canvas.toDataURL("image/jpeg", 1.0);
                
                // Add a new page if not the first page
                if (i > 0) {
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
                const y = (pdfHeight - imgHeight) / 2;
                
                // Add the image to the PDF with compression disabled for better quality
                pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight, null, 'FAST');
            }
            
            currentIndex = endIndex;
            
            // Check if we're done or need to process more
            if (currentIndex < validImages.length) {
                updateStatus(`Processed ${currentIndex} of ${validImages.length} pages... (Please wait)`);
                // Schedule next batch to avoid blocking UI
                setTimeout(processNextBatch, 50);
            } else {
                finalizePdf();
            }
        }
        
        // Finalize and save the PDF
        function finalizePdf() {
            updateStatus(`PDF creation complete with ${validImages.length} pages. Preparing download...`);
            
            // Get the document title or use default name
            let fileName = "google-doc-high-res.pdf";
            try {
                const docTitle = document.title;
                if (docTitle && docTitle.length > 0) {
                    fileName = docTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "_high_res.pdf";
                }
            } catch (e) {
                console.warn("Could not get document title, using default filename");
            }
            
            // Save the PDF with optimized settings
            pdf.save(fileName);
            
            updateStatus('✅ High-resolution PDF downloaded successfully!');
            
            // Remove the status message after a delay
            setTimeout(() => {
                document.body.removeChild(loadingMessage);
            }, 3000);
        }
        
        // Start processing
        processNextBatch();
    }
    
    // Load jsPDF library
    if (typeof jsPDF !== 'undefined') {
        updateStatus('jsPDF already loaded, starting conversion...');
        createHighResPdf();
    } else {
        updateStatus('Loading jsPDF library...');
        
        // Create a trusted policy for the script URL
        let scriptUrl;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            const policy = window.trustedTypes.createPolicy('high-res-pdf-converter-policy', {
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
            updateStatus('jsPDF library loaded successfully');
            
            // In newer jsPDF versions, jsPDF is in the window.jspdf object
            window.jsPDF = window.jspdf.jsPDF;
            
            // Start PDF creation
            createHighResPdf();
        };
        
        // Handle loading errors
        script.onerror = function() {
            updateStatus('❌ Failed to load PDF library. Check your internet connection.');
            setTimeout(() => {
                document.body.removeChild(loadingMessage);
            }, 5000);
        };
        
        // Add the script to the document
        document.body.appendChild(script);
    }
})(); 