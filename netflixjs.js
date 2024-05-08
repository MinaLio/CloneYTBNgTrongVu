document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('languagesSelect');
    const signInButton = document.querySelector('.signin__button');
    const emailFormContainers = document.querySelectorAll('.email__form__container');
    const faqTitles = document.querySelectorAll('.FAQ__title');

    // Language Selector Change
    languageSelector.addEventListener('change', function () {
        alert('Language changed to: ' + this.value);
        // Implement changes to page elements based on selected language
    });

    // Sign In Button Click
    signInButton.addEventListener('click', function () {
        alert('Sign In button clicked!');
        // Here, you would typically handle a real sign in process
    });

    // Email Form Submission
    emailFormContainers.forEach(container => {
        const formButton = container.querySelector('.primary__button');
        formButton.addEventListener('click', function(event) {
            event.preventDefault();
            const emailInput = container.querySelector('.email__input');
            if (emailInput.value.includes('@')) {
                alert('Thank you for your email!');
                // Process the email submission here
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    });

    // FAQ Accordion
    faqTitles.forEach(title => {
        title.addEventListener('click', function () {
            const visibleElement = this.nextElementSibling;
            if (visibleElement.style.display === 'block') {
                visibleElement.style.display = 'none';
                this.querySelector('i').classList.remove('fa-minus');
                this.querySelector('i').classList.add('fa-plus');
            } else {
                visibleElement.style.display = 'block';
                this.querySelector('i').classList.remove('fa-plus');
                this.querySelector('i').classList.add('fa-minus');
            }
        });
    });
});
