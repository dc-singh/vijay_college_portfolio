document.querySelectorAll(".faq").forEach((faq) =>
    faq.addEventListener("click", () => faq.classList.toggle("open")),
);

const menuButton = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menuButton && links) {
    const closeMenu = () => {
        links.classList.remove("mobile-open");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.setAttribute("role", "button");
    menuButton.setAttribute("tabindex", "0");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Toggle navigation menu");

    const toggleMenu = () => {
        const isOpen = links.classList.toggle("mobile-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    };

    menuButton.addEventListener("click", toggleMenu);
    menuButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }
    });

    links.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", () => {
            if (window.innerWidth <= 850) closeMenu();
        }),
    );

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) closeMenu();
    });
}

document.querySelectorAll("form").forEach((form) =>
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you! Your enquiry has been submitted.");
    }),
);
