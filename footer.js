// Footer content
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
<footer>
    <div class="container" style="font-size: 0.9rem;">
        <p><strong>KIDDOS WORLD ACADEMY</strong></p>
        <div class="footer-divider"></div>
        <p>2033 Johnson Drive, Antioch, CA | (925) 595-6280</p>
        <p>License #073409534</p>
        <p>&copy; 2025 Kiddos World Academy. All rights reserved.</p>
        <p style="font-style: italic; font-size: 0.9rem;">Where Learning Meets Fun ✨</p>
    </div>
</footer>
    `;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

