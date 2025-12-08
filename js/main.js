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

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isEmptyRegex = /^\s*$/;
        var messageRegex = /^\s*\S+(?:\s+\S+){2,}\s*$/;

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var isValid = true;

            contactNameError.style.display = "none";
            contactEmailError.style.display = "none";
            contactMessageError.style.display = "none";
            contactSuccess.style.display = "none";

            if (isEmptyRegex.test(contactName.value)) {
                contactNameError.style.display = "block";
                isValid = false;
            }

            if (!emailRegex.test(contactEmail.value)) {
                contactEmailError.style.display = "block";
                isValid = false;
            }

            if (!messageRegex.test(contactMessage.value)) {
                contactMessageError.style.display = "block";
                isValid = false;
            }

            if (isValid) {
                contactSuccess.style.display = "block";
                contactForm.reset();
                setTimeout(function () {
                    contactSuccess.style.display = "none";
                }, 3000);
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

        var emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isEmptyRegex2 = /^\s*$/;

        donationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var isValid = true;

            donorNameError.style.display = "none";
            donorEmailError.style.display = "none";
            donationAmountError.style.display = "none";
            donationTypeError.style.display = "none";
            donationSuccess.style.display = "none";

            if (isEmptyRegex2.test(donorName.value)) {
                donorNameError.style.display = "block";
                isValid = false;
            }

            if (!emailRegex2.test(donorEmail.value)) {
                donorEmailError.style.display = "block";
                isValid = false;
            }

            var amount = parseFloat(donationAmount.value);
            if (isNaN(amount) || amount <= 0) {
                donationAmountError.style.display = "block";
                isValid = false;
            }

            if (isEmptyRegex2.test(donationType.value)) {
                donationTypeError.style.display = "block";
                isValid = false;
            }

            if (isValid) {
                donationSuccess.style.display = "block";
                donationForm.reset();
                setTimeout(function () {
                    donationSuccess.style.display = "none";
                }, 3000);
            }
        });
    }
});
