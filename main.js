document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-es]');
    let currentLanguage = 'es';

    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        languageToggle.textContent = currentLanguage === 'es' ? 'English' : 'Español';
        updateLanguage();
    });

    function updateLanguage() {
        elementsToTranslate.forEach(element => {
            const text = element.getAttribute(`data-${currentLanguage}`);
            if (text) {
                element.textContent = text;
            }
        });
    }
});
