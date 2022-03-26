function validate() {

    let emailInputElement = document.querySelector('#email');
    let emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    function isValidEmail(str) {
        if (emailValidator.test(str)) {
            return true;
        } else {
            return false;
        }
    }
    
    function applyStyle(e, email) {
        e.className = isValidEmail(email) ? '' : 'error';
    }

    emailInputElement.addEventListener('change', (e) => {
        applyStyle(e.target, e.target.value)
    });
}