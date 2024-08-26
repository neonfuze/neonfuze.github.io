// JavaScript to handle tab switching
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');

        this.classList.add('active');
        const targetSection = this.getAttribute('href').substring(1);
        document.getElementById(targetSection).style.display = 'block';
    });
});

// Set initial visibility for content sections
document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');
document.getElementById('about').style.display = 'block'; // Show "About" section by default
