document.addEventListener("DOMContentLoaded", () => {
    const checks = [
        { label: 'Theme Background', pass: () => getComputedStyle(document.body).backgroundImage.includes('bg-vn') },
        { label: 'Menu Grid Exists', pass: () => !!document.getElementById('menuGrid') },
        { label: 'Signup Field', pass: () => !!document.getElementById('emailSignup') },
        { label: 'Login Link Found', pass: () => !!document.querySelector('a[href="login.html"]') }
    ];

    const result = checks.map(c => `${c.label}: ${c.pass() ? '✅' : '❌'}`).join('\n');
    console.log('[🛠 BUILD DIAGNOSTICS]\n' + result);
});
