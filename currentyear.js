// This JavaScript function, updateCurrentYearElements, 
//efficiently updates the text content of all HTML elements with the data-year="current" attribute to the current year. 
//It utilizes querySelectorAll to select the elements and forEach to iterate through them, 
//ensuring that each element reflects the current year. The function is executed immediately upon calling.

function updateCurrentYearElements() {
    // Get the current year
    let currentYear = new Date().getFullYear();

    // Select all elements with the attribute data-year="current"
    let elements = document.querySelectorAll('[data-year="current"]');

    // Loop through each element and update its text
    elements.forEach(function(element) {
        element.textContent = currentYear;
    });
}

// Call the function to update elements
updateCurrentYearElements();
