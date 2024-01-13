function showContent(contentId) {
    // Hide all content elements
    var contentElements = document.getElementsByClassName('content');
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = 'none';
    }

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
