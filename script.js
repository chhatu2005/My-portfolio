/* Select HTML elements */
const navLinks = document.getElementById("navLinks")
const menuBtn = document.getElementById("menuBtn")
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")
const yearElement = document.getElementById("year")

// Mobile menu: open and close
const toggleMenu = () => {
    navLinks.classList.toggle("active")

    const isOpen = navLinks.classList.contains("active")
    menuBtn.setAttribute("aria-expanded", String(isOpen))
}

// Close menu after clicking a navigation link
const closeMenu = () => {
    navLinks.classList.remove("active")
    menuBtn.setAttribute("aria-expanded", "false")
}

// Connect mobile menu button
menuBtn.addEventListener("click", toggleMenu)

// Close menu when a navigation link is clicked
const links = document.querySelectorAll("#navLinks a")

links.forEach((link) => {
    link.addEventListener("click", closeMenu)
});

// Display current year
if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
}

// Contact form validation
const submitForm = (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields."
        return
    }

    formMessage.textContent = "Form validated successfully "

    contactForm.reset()
}

// Connect contact form to submit function
contactForm.addEventListener("submit", submitForm)
