const project_panel = document.getElementById("project_body_id")
const project_carts = document.querySelectorAll(".card-container")
// const front_carts = document.querySelectorAll(".front")
// const back_carts = document.querySelectorAll(".back")

console.log("moh")

project_carts.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.children[0].style.transform = "rotateY(180deg)"
        // setTimeout(() => {
        //     card.children[0].querySelector(".front").style.display = "none"
        //     card.children[0].querySelector(".back").style.display = "block";
        // }, 100);
    })
    
    card.addEventListener("mouseleave", () => {
        console.log("moh2")
        
        card.children[0].style.transform = "rotateY(0)"
        // setTimeout(() => {
        //     card.children[0].querySelector(".front").style.display = "block";
        //     card.children[0].querySelector(".back").style.display = "none";
        // }, 100);
    })
})

console.log("moh3")










