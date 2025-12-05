document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var currentPage = body.getAttribute("data-page");
    var navLinks = document.querySelectorAll(".main-nav a[data-link]");
    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute("data-link");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    var toggle = document.getElementById("menuToggle");
    var nav = document.querySelector(".main-nav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    var yearSpan = document.getElementById("footerYear");
    if (yearSpan) {
        var year = new Date().getFullYear();
        yearSpan.textContent = year.toString();
    }

    var faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
        var button = item.querySelector(".faq-question");
        if (button) {
            button.addEventListener("click", function () {
                item.classList.toggle("open");
            });
        }
    });

    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        var contactName = document.getElementById("contactName");
        var contactNameError = document.getElementById("contactNameError");
        var contactEmail = document.getElementById("contactEmail");
        var contactEmailError = document.getElementById("contactEmailError");
        var contactMessage = document.getElementById("contactMessage");
        var contactMessageError = document.getElementById("contactMessageError");
        var contactSuccess = document.getElementById("contactSuccess");
        var emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
        var isEmptyRegex = /^\s*$/;
        var messageRegex = /^\s*\S+(?:\s+\S+){2,}\s*$/;

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var isValid = true;

            if (contactNameError) contactNameError.style.display = "none";
            if (contactEmailError) contactEmailError.style.display = "none";
            if (contactMessageError) contactMessageError.style.display = "none";
            if (contactSuccess) contactSuccess.style.display = "none";

            if (!contactName || isEmptyRegex.test(contactName.value)) {
                if (contactNameError) contactNameError.style.display = "block";
                isValid = false;
            }

            if (!contactEmail || !emailRegex.test(contactEmail.value)) {
                if (contactEmailError) contactEmailError.style.display = "block";
                isValid = false;
            }

            if (!contactMessage || !messageRegex.test(contactMessage.value)) {
                if (contactMessageError) contactMessageError.style.display = "block";
                isValid = false;
            }

            if (isValid && contactSuccess) {
                contactSuccess.style.display = "block";
            }
        });
    }

    var donationForm = document.getElementById("donationForm");
    if (donationForm) {
        var donorName = document.getElementById("donorName");
        var donorNameError = document.getElementById("donorNameError");
        var donorEmail = document.getElementById("donorEmail");
        var donorEmailError = document.getElementById("donorEmailError");
        var donationAmount = document.getElementById("donationAmount");
        var donationAmountError = document.getElementById("donationAmountError");
        var donationType = document.getElementById("donationType");
        var donationTypeError = document.getElementById("donationTypeError");
        var donationSuccess = document.getElementById("donationSuccess");
        var emailRegex2 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
        var isEmptyRegex2 = /^\s*$/;

        donationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var isValid = true;

            if (donorNameError) donorNameError.style.display = "none";
            if (donorEmailError) donorEmailError.style.display = "none";
            if (donationAmountError) donationAmountError.style.display = "none";
            if (donationTypeError) donationTypeError.style.display = "none";
            if (donationSuccess) donationSuccess.style.display = "none";

            if (!donorName || isEmptyRegex2.test(donorName.value)) {
                if (donorNameError) donorNameError.style.display = "block";
                isValid = false;
            }

            if (!donorEmail || !emailRegex2.test(donorEmail.value)) {
                if (donorEmailError) donorEmailError.style.display = "block";
                isValid = false;
            }

            var amount = donationAmount ? parseFloat(donationAmount.value) : 0;
            if (!donationAmount || isNaN(amount) || amount <= 0) {
                if (donationAmountError) donationAmountError.style.display = "block";
                isValid = false;
            }

            if (!donationType || isEmptyRegex2.test(donationType.value)) {
                if (donationTypeError) donationTypeError.style.display = "block";
                isValid = false;
            }

            if (isValid && donationSuccess) {
                donationSuccess.style.display = "block";
            }
        });
    }
});
