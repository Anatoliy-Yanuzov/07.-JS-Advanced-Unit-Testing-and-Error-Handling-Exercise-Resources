function validate() {

    let emailValidatorRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailInputElement = document.querySelector('#email');

    emailInputElement.addEventListener('change', checkEmail);

    function checkEmail(e) {
        if (emailValidatorRegex.test(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }
        e.target.className = 'error';
    }
}
// function validate() {

//     let emailInputElement = document.querySelector('#email');
//     let emailValidatorRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    // function isValidEmail(str) {
    //     if (emailValidatorRegex.test(str)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function applyStyle(e, email) {
    //     e.className = isValidEmail(email) ? '' : 'error';
    // }

    // emailInputElement.addEventListener('change', (e) => {
    //     applyStyle(e.target, e.target.value)
    // });
// }