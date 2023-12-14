// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submit_button_element = document.getElementById("submit-button");
const entire_content = document.getElementById("contact-page");

submit_button_element.addEventListener('click', function() {
    entire_content.innerHTML = "<p style='font-size:24px;'> Thank you for your message! </p>";
});
