/**
 * Google Doc Image Extractor
 * 
 * This script extracts all page images from a view-only Google Doc
 * and downloads them as individual high-quality PNG files.
 * This is useful when you want to retain maximum image quality
 * or when the PDF conversion doesn't preserve the formatting well.
 * 
 * Usage:
 * 1. Open the view-only Google Doc in your browser
 * 2. Scroll through the entire document to load all pages
 * 3. Open browser Developer Tools (F12) and go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. The script will download all pages as individual PNG images
 */

(function() {
    // Create status display
    const statusDiv = document.createElement('div');
    statusDiv.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 5px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        max-width: 300px;
    `;
    document.body.appendChild(statusDiv);
    
    // Update status function
    function updateStatus(message) {
        console.log(message);
        statusDiv.innerHTML = message;
    }
    
    // Start the extraction process
    updateStatus('Starting image extraction...');
    
    // Get all document images
    const images = Array.from(document.getElementsByTagName('img'))
        .filter(img => /^blob:/.test(img.src));
    
    // If no images found
    if (images.length === 0) {
        updateStatus('❌ No document images found! Please scroll through the entire document to load all pages, then try again.');
        setTimeout(() => {
            document.body.removeChild(statusDiv);
        }, 5000);
        return;
    }
    
    updateStatus(`Found ${images.length} document images. Starting extraction...`);
    
    // Process images one by one
    function processNextImage(index) {
        if (index >= images.length) {
            updateStatus(`✅ Completed! Extracted ${images.length} images.`);
            setTimeout(() => {
                document.body.removeChild(statusDiv);
            }, 3000);
            return;
        }
        
        const img = images[index];
        updateStatus(`Extracting image ${index + 1} of ${images.length}...`);
        
        // Create canvas for high-quality image extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        // Convert to high-quality PNG
        const imgDataUrl = canvas.toDataURL('image/png');
        
        // Create download link
        const link = document.createElement('a');
        link.href = imgDataUrl;
        link.download = `page-${index + 1}.png`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Process next image after a delay (to avoid overwhelming the browser)
        setTimeout(() => {
            processNextImage(index + 1);
        }, 500);
    }
    
    // Start processing from the first image
    processNextImage(0);
})(); 