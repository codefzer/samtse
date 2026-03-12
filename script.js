// typing animation

const roles = [
"IT Support Engineer",
"Systems Administrator",
"Microsoft 365 Specialist"
]

let roleIndex = 0
let charIndex = 0

function type(){

const current = roles[roleIndex]

document.querySelector(".typing").textContent =
current.slice(0, charIndex++)

if(charIndex > current.length){

roleIndex = (roleIndex + 1) % roles.length
charIndex = 0

}

setTimeout(type,120)

}

type()

// timeline animation

const items = document.querySelectorAll(".timeline-item")

function showTimeline(){

const trigger = window.innerHeight * 0.85

items.forEach(item => {

const top = item.getBoundingClientRect().top

if(top < trigger){

item.classList.add("show")

}

})

}

window.addEventListener("scroll", showTimeline)

showTimeline()