# How to Convert a View-Only Google Doc to a PDF On Google Drive

Greetings! In this Google Drive tutorial, we shall be looking at how to download a view-only and protected Google Doc on Google Drive as a PDF. This tutorial is particularly useful if you have view-only access to a Google Doc file but want to download it as a PDF to have a local copy of that document.

This guide will show you how to download a view-only Google Doc from Google Drive as a PDF file. While the original document is in Google Doc format, we'll convert it to a PDF that preserves all the contents. We'll use a combination of methods including downloading as HTML and then converting to PDF via a web browser.

This repository provides multiple methods to download and convert view-only Google Docs to PDF format, even when direct downloading is disabled or restricted.

## Table of Contents
- [Overview](#overview)
- [Scripts Available](#scripts-available)
- [Method 1: Using JavaScript (Console Method)](#method-1-using-javascript-console-method)
- [Method 2: Using Print to PDF](#method-2-using-print-to-pdf)
- [Method 3: Using Mobile Basic View](#method-3-using-mobile-basic-view)
- [Method 4: Using HTML Download and Convert](#method-4-using-html-download-and-convert)
- [Step-by-Step Visual Guide](#step-by-step-visual-guide)
- [Tips and Troubleshooting](#tips-and-troubleshooting)
- [Multilingual Support](#multilingual-support)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Overview

Google Docs allows users to restrict downloading, printing, and copying content by setting documents to "View only" mode. However, there are legitimate scenarios where you may need to download a document for offline access, such as:

- Reading documents on devices without internet access
- Creating personal backups of important information
- Converting documents to PDF for better compatibility across devices

This repository provides several methods to convert these view-only Google Docs to PDF format.

## Scripts Available

This repository contains multiple scripts for different use cases:

1. **[script.js](script.js)** - Standard script for converting Google Docs to PDF
2. **[high_res_script.js](high_res_script.js)** - Enhanced script for high-resolution PDF conversion
3. **[bookmarklet.js](bookmarklet.js)** - Bookmarklet version to create a browser bookmark for easy access
4. **[image_extractor.js](image_extractor.js)** - Script to extract individual page images

Choose the script that best fits your needs based on the document quality and complexity.

## Method 1: Using JavaScript (Console Method)

This is the most reliable method that works even with heavily restricted documents.

### Basic Method (Standard Quality)

1. Open the view-only Google Doc in your browser
2. Scroll through the entire document to ensure all pages are loaded
3. Press F12 or right-click and select "Inspect" to open Developer Tools
4. Click on the "Console" tab in Developer Tools
5. Copy and paste the code from our [script.js](script.js) file
6. Press Enter to execute the code
7. The document will be automatically converted and downloaded as a PDF

### High Resolution Method

For documents where quality is important:

1. Follow steps 1-4 from the basic method
2. Copy the code from [high_res_script.js](high_res_script.js) instead
3. Press Enter to execute the code
4. Wait for the high-resolution PDF to be generated (this may take longer)

### Bookmarklet Method (Easiest)

For the most convenience:

1. Create a new bookmark in your browser
2. Name it "Save Google Doc to PDF" (or any name you prefer)
3. Instead of a URL, paste the entire code from [bookmarklet.js](bookmarklet.js)
4. When viewing a Google Doc, simply click the bookmark to convert it to PDF

### Image Extraction Method

If you prefer individual page images:

1. Follow steps 1-4 from the basic method
2. Copy the code from [image_extractor.js](image_extractor.js)
3. Press Enter to execute the code
4. Each page will be downloaded as a separate PNG image

### How it works:

The JavaScript code extracts the document content by:
1. Identifying all image elements (Google renders pages as images in view-only mode)
2. Creating a canvas to capture each page
3. Converting the canvas content to a PDF
4. Downloading the compiled PDF to your device

## Method 2: Using Print to PDF

This method works for documents with less restrictive settings:

1. Open the view-only Google Doc
2. Press Ctrl + P (Windows) or Cmd + P (Mac)
3. In the printer options, select "Save as PDF"
4. Choose your desired save location
5. Click "Save"

Note: This method may be blocked in documents with printing disabled.

## Method 3: Using Mobile Basic View

This method bypasses some restrictions by using Google's mobile view:

1. Open the view-only Google Doc in your web browser
2. Edit the URL by replacing the ending (usually "edit" followed by other characters) with "mobilebasic"
3. Press Enter to load the HTML preview version
4. Right-click on the page and select "Save as"
5. For "Save as type", select "Webpage, HTML Only" (important: other HTML types won't work)
6. Save the file to your preferred location
7. Open the downloaded HTML file in your browser
8. Press Ctrl+P (Windows) or Command+P (Mac) to open the print dialog
9. Select "Save as PDF" as your printer option
10. Click "Save" to create your PDF

**Note:** This method will not notify the document owner or anyone who shared it that you have downloaded the file.

### Additional Technique

Additional technique for copying text from view-only Google Docs: Open the document in mobile view by changing the URL to end with "mobilebasic", save as HTML, then open in browser to select and copy text without restrictions. This bypasses copy protection while maintaining formatting.

## Method 4: Using HTML Download and Convert

For documents that allow HTML downloads:

1. Open the view-only Google Doc in your browser
2. Click on "File" > "Download" > "Web Page (.html, zipped)"
3. Extract the downloaded ZIP file
4. Open the extracted HTML file in your web browser
5. Use the browser's print function (Ctrl + P or Cmd + P)
6. Select "Save as PDF" in the printer options
7. Choose your save location and click "Save"

## Step-by-Step Visual Guide

### Converting a View-Only Google Doc Using JavaScript

#### 1. Open the view-only Google Doc

First, open the view-only Google Doc in your browser. You'll know it's view-only if you see a message like "Viewer" or "View only" in the top right corner.

#### 2. Scroll through the entire document

Make sure to scroll all the way to the bottom of the document to ensure all pages are loaded. This is crucial for the script to capture all pages.

#### 3. Open Developer Tools

Right-click anywhere on the page and select "Inspect" or press F12 to open Developer Tools.

#### 4. Navigate to the Console tab

Click on the "Console" tab in the Developer Tools panel.

#### 5. Paste the script

Copy the entire code from the [script.js](script.js) file and paste it into the console.

#### 6. Execute the script

Press Enter to run the script. You'll see status messages in the console as the script processes each page.

#### 7. Download the PDF

The PDF will be automatically downloaded to your default download location. The filename will be based on the document title.

### Creating a Bookmarklet for One-Click Conversion

#### 1. Create a new bookmark

In Chrome: Click the three dots menu → Bookmarks → Bookmark Manager → Right-click on the bookmarks bar → Add Page

In Firefox: Right-click on the bookmarks bar → New Bookmark

#### 2. Set up the bookmark

- Name: "Save Google Doc to PDF" (or any name you prefer)
- URL/Location: Paste the entire code from [bookmarklet.js](bookmarklet.js)

#### 3. Save the bookmark

Click Save or Add to create the bookmark.

#### 4. Use the bookmarklet

When viewing a Google Doc, simply click the bookmark to start the conversion process.

## Tips and Troubleshooting

- **Missing pages**: If some pages are missing in the PDF, make sure to scroll through the entire document before applying the JavaScript method
- **Low quality**: For better quality, use the high-resolution script or zoom in on the document before converting
- **Document too large**: For very large documents, try processing them in sections or use the image extraction method
- **Browser compatibility**: These scripts work best in Chrome or Firefox
- **Permission issues**: None of these methods notify document owners or bypass legal access restrictions
- **Error handling**: If you get errors about "trustedTypes", try using one of the alternative scripts
- **Large documents**: For documents with hundreds of pages, you may need to scroll slowly to ensure all pages load
- **Image quality**: PNG extraction provides better quality than PDF conversion but results in multiple files
- **Copying text**: You can extract text from downloaded Google Docs by opening the HTML version and using standard copy functions

## Multilingual Support

Our web interface includes support for multiple languages:

- English (default)
- Vietnamese (Tiếng Việt)
- French (Français)
- Spanish (Español)
- Chinese (中文)

The language can be changed using the selector in the top-right corner of the web interface.

## Credits

This project was created by **Thành Nguyễn**.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
