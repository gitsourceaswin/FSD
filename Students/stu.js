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

    // If the screen size is less than or equal to 850px, hide the header buttons after selecting a content
    if (window.innerWidth <= 850) {
        document.getElementById('header-buttons').style.display = 'none';
    } else {
        // If the screen size is greater than 850px, show the header buttons
        document.getElementById('header-buttons').style.display = 'flex';
    }
}

function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === 'table') {
        section.style.display = 'none';
    } else {
        section.style.display = 'table';
    }
}

document.getElementById('menu-icon').addEventListener('click', function () {
    var headerButtons = document.getElementById('header-buttons');
    headerButtons.style.display = (headerButtons.style.display === 'flex') ? 'none' : 'flex';
});

// Set the default content to 'profile' on page load
window.onload = function() {
    showContent('profile');
};

// Handle window resize event
window.addEventListener('resize', function () {
    // Adjust the header buttons based on the screen size
    if (window.innerWidth > 850) {
        document.getElementById('header-buttons').style.display = 'flex';
    } else {
        document.getElementById('header-buttons').style.display = 'none';
    }
});

function redirectToLogin() {
    // Navigate to the login.html page
    window.location.href = 'login.html';
}

// Function to validate the grievance form
function validateGrievanceForm() {
    // Get form elements
    var grievanceNumber = document.getElementById("grievanceNumber").value;
    var addressedToClassAdvisor = document.getElementById("classAdvisorCheckbox").checked;
    var addressedToPrincipal = document.getElementById("principalCheckbox").checked;
    var addressedToDean = document.getElementById("deanCheckbox").checked;
    var addressedToWarden = document.getElementById("wardenCheckbox").checked;
    var relatedTo = document.getElementById("r_to").value;
    var issue = document.getElementById("issue").value;

    // Simple validation
    if (!grievanceNumber || !issue) {
        alert("Please fill in all the required fields.");
        return false;
    }

    // Additional validation if needed

    // Display success message
    alert("Grievance submitted successfully!");
    return true;
}

// Invoke the validation function when the form is submitted
document.getElementById("grevSubSubmit").addEventListener("click", function () {
    validateGrievanceForm();
});
