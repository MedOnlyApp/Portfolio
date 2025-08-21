const contact_panel = document.getElementById("contact_id")

contact_panel.addEventListener("mouseenter", (e) => {
    contact_panel.style.width = "200px"
})

contact_panel.addEventListener("mouseleave", (e) => {
    contact_panel.style.width = "50px"
})