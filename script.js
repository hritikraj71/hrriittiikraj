// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to reveal more information about projects
function revealProjectInfo() {
    const projectInfo = document.getElementById('project-info');
    projectInfo.style.display = projectInfo.style.display === 'none' ? 'block' : 'none';
}
