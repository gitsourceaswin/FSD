function showContent(contentId) {
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    // For small screens, hide the menu after clicking a button
    var checkInput = document.getElementById('check');
    if (window.innerWidth <= 1000 && checkInput.checked) {
        checkInput.checked = false;
        toggleNav();
    }
}

function toggleNav() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

// Set the default content to 'profile' on page load
window.onload = function () {
    showContent('profile');
};
