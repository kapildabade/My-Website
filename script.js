document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    });
});