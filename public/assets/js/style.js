$(document).ready(function() {
    $('.dropdown-toggle1').click(function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the visibility of the dropdown menu
        $(this).siblings('.dropdown-menu').toggleClass('show');
    });

    // Close the dropdown menu if clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.dropdown-toggle1, .dropdown-menu').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
});