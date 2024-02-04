function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Set the default content to 'profile' on page load
window.onload = function() {
    showContent('profile');
};

// You can add more functions or logic as needed
function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === 'table') {
        section.style.display = 'none';
    } else {
        section.style.display = 'table';
    }
}

