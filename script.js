document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    themeToggle.addEventListener('click', function() {
        body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
    });

    const installBtn1 = document.getElementById('install-btn1');

    installBtn1.addEventListener('click', function() {
        const apkSrc = installBtn1.getAttribute('data-src');
        const link = document.createElement('a');
        link.href = apkSrc;
        link.download = 'Blocksy.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    const installBtn = document.getElementById('install-btn');

    installBtn1.addEventListener('click', function() {
        const apkSrc = installBtn.getAttribute('data-src');
        const link = document.createElement('a');
        link.href = apkSrc;
        link.download = 'app-release.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});