/**
 * Internationalization (i18n) script for Google Doc to PDF Converter
 * Created by Thành Nguyễn
 */

// Load language preference from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing language settings");
    
    // Set default to English first to ensure something is displayed
    const defaultLang = 'en';
    
    try {
        // First make sure English is active by default
        const englishContent = document.querySelectorAll('[lang="en"]');
        englishContent.forEach(element => {
            element.classList.add('active');
        });
        
        // Then try to load saved preference
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            console.log("Found saved language preference: " + savedLanguage);
            setLanguage(savedLanguage);
        } else {
            // Default to browser language if available, otherwise English
            const browserLang = navigator.language || navigator.userLanguage;
            console.log("Browser language detected: " + browserLang);
            const shortLang = browserLang.split('-')[0]; // Get language code without region (e.g., 'en' from 'en-US')
            
            if (['en', 'vi', 'fr', 'es', 'zh'].includes(shortLang)) {
                console.log("Setting language to: " + shortLang);
                setLanguage(shortLang);
            } else {
                // Default to English if browser language not supported
                console.log("Unsupported language, defaulting to English");
                setLanguage(defaultLang);
            }
        }
        
        // Add event listener to the language selector
        const selector = document.getElementById('language-select');
        if (selector) {
            selector.addEventListener('change', function() {
                console.log("Language changed to: " + this.value);
                setLanguage(this.value);
            });
            
            // Make sure the selector displays the correct language
            const currentLang = document.documentElement.lang || defaultLang;
            selector.value = currentLang;
        } else {
            console.error("Language selector element not found!");
        }
    } catch (error) {
        console.error("Error initializing language settings: ", error);
        // Ensure at least English content is visible
        const englishContent = document.querySelectorAll('[lang="en"]');
        englishContent.forEach(element => {
            element.classList.add('active');
        });
    }
});

/**
 * Sets the active language for the website
 * @param {string} lang - Language code ('en', 'vi', 'fr', 'es', 'zh')
 */
function setLanguage(lang) {
    try {
        console.log("Setting language to: " + lang);
        
        // Hide all language content
        const allContent = document.querySelectorAll('[lang]');
        allContent.forEach(element => {
            element.classList.remove('active');
        });
        
        // Show content for selected language
        const selectedContent = document.querySelectorAll('[lang="' + lang + '"]');
        selectedContent.forEach(element => {
            element.classList.add('active');
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update the language selector value
        const selector = document.getElementById('language-select');
        if (selector) {
            selector.value = lang;
        }
        
        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        console.log("Language set successfully to: " + lang);
    } catch (error) {
        console.error("Error setting language: ", error);
    }
}

/**
 * Gets text in the current language
 * This function can be extended to support more complex translations
 * @param {string} key - Translation key
 * @returns {string} - Translated text
 */
function getLocalizedText(key) {
    const currentLang = document.documentElement.lang || 'en';
    const translations = {
        'download': {
            'en': 'Download',
            'vi': 'Tải xuống',
            'fr': 'Télécharger',
            'es': 'Descargar',
            'zh': '下载'
        },
        'view': {
            'en': 'View',
            'vi': 'Xem',
            'fr': 'Voir',
            'es': 'Ver',
            'zh': '查看'
        }
        // Add more translations as needed
    };
    
    if (translations[key] && translations[key][currentLang]) {
        return translations[key][currentLang];
    }
    
    // Fallback to English if translation not found
    return translations[key] ? translations[key]['en'] : key;
} 