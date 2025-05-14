# Contributing to Google Doc to PDF Converter

Thank you for your interest in contributing to this project! This guide will help you get started with contributing to the Google Doc to PDF Converter.

## Getting Started

### Prerequisites

- Basic knowledge of JavaScript
- Understanding of how browser consoles and developer tools work
- Familiarity with Git and GitHub

### Setting Up the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/How-to-Convert-a-View-Only-Google-Doc-to-a-PDF-On-Google-Drive.git
   cd How-to-Convert-a-View-Only-Google-Doc-to-a-PDF-On-Google-Drive
   ```

2. There are no dependencies to install for the basic scripts, as they are vanilla JavaScript.

3. If you want to test minification or other enhancements, you can set up a local development environment with Node.js:
   ```bash
   npm init -y
   npm install terser --save-dev
   ```

## Project Structure

- `script.js`: Main script for converting Google Docs to PDF
- `high_res_script.js`: Enhanced script for high-resolution PDF conversion
- `bookmarklet.js`: Bookmarklet version for one-click conversion
- `image_extractor.js`: Script for extracting individual page images
- `minified.js`: Minified version of the main script
- `index.html`: Web interface for the tools
- `README.md`: Project documentation

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improving the project:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/yourusername/How-to-Convert-a-View-Only-Google-Doc-to-a-PDF-On-Google-Drive/issues)
2. If not, create a new issue with a clear description, including:
   - Steps to reproduce the bug
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable
   - Any relevant information about your environment

### Making Changes

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Create a Pull Request from your fork to the main repository

### Pull Request Guidelines

- Describe the purpose of your pull request clearly
- Reference any related issues
- Ensure your code works across different browsers (Chrome, Firefox, Edge)
- Keep your pull requests focused on a single issue or feature

## Code Style Guidelines

- Use clear, descriptive variable and function names
- Add comments to explain complex parts of your code
- Use semicolons at the end of statements
- Follow ES6+ conventions where possible
- Indent with 4 spaces

## Testing

When submitting a change, please test it thoroughly:

1. Try it on different browsers (Chrome, Firefox, Edge)
2. Test with different types of Google Docs (text-heavy, with images, with tables)
3. Test with documents of various sizes
4. Ensure compatibility with older browser versions, if possible

## Creating a Minified Version

If you've made changes to the scripts, you can create a minified version using Terser:

```bash
npx terser script.js -o minified.js -c -m
```

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.

Thank you for contributing to make this project better! 