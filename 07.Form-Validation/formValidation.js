function validate() {

    document.querySelector("#company").addEventListener("change", (e) => {
       

        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }

    });

    document.querySelector("#submit").addEventListener("click", (e) => {

        let validOut = [];
        let userNameElement = document.querySelector("#username");
        let emailElement = document.querySelector("#email");
        let passWordElement = document.querySelector("#password");
        let confirmPassElement = document.querySelector("#confirm-password");
        let checkBoxElement = document.querySelector("#company");

        let userTestRegex = /^[A-Za-z0-9]{3,20}$/;
        let emailTestRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTestRegex = /^[\w]{5,15}$/;

        if (userTestRegex.exec(userNameElement.value) === null) {
            userNameElement.style.borderColor = "red";
            validOut.push(false);
        } else {
            userNameElement.style.borderColor = "";
            validOut.push(true);
        }

        if (emailTestRegex.exec(emailElement.value) === null) {
            emailElement.style.borderColor = "red";
            validOut.push(false);
        } else {
            emailElement.style.borderColor = "";
            validOut.push(true);
        }

        if (
            passWordElement.value === confirmPassElement.value &&
            passTestRegex.exec(confirmPassElement.value) != null &&
            passTestRegex.exec(passWordElement.value) != null
        ) {
            confirmPassElement.style.borderColor = "";
            passWordElement.style.borderColor = "";
            validOut.push(true);
        } else {
            confirmPassElement.style.borderColor = "red";
            passWordElement.style.borderColor = "red";
            validOut.push(false);
        }

        if (checkBoxElement.checked) {
            let company = document.querySelector("#companyNumber");

            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                validOut.push(false);
            } else {
                company.style.borderColor = "";
                validOut.push(true);
            }

        }

        if (!validOut.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }

    });

}