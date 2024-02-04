$(document).ready(function () {
  $("body").on("click", ".accordion-header", function () {
    const target = $(this).data("target");
    $("#" + target + " tbody").toggle(); // Toggle the targeted table body
  });
});