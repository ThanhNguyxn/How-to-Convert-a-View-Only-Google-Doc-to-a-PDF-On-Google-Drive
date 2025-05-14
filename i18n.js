/**
 * Internationalization (i18n) script for Google Doc to PDF Converter
 * Created by Thành Nguyễn
 */

// Load language preference from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    } else {
        // Default to browser language if available, otherwise English
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0]; // Get language code without region (e.g., 'en' from 'en-US')
        
        if (['en', 'vi', 'fr', 'es', 'zh'].includes(shortLang)) {
            setLanguage(shortLang);
            // Update the selector to match
            const selector = document.getElementById('language-select');
            if (selector) {
                selector.value = shortLang;
            }
        } else {
            // Default to English if browser language not supported
            setLanguage('en');
        }
    }
    
    // Add event listener to the language selector
    const selector = document.getElementById('language-select');
    if (selector) {
        selector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
});

/**
 * Sets the active language for the website
 * @param {string} lang - Language code ('en', 'vi', 'fr', 'es', 'zh')
 */
function setLanguage(lang) {
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