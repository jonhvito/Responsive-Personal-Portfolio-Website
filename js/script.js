/*====================================== Typing Animation ================================*/
const typingStrings = [
  "",
  "Web Designer",
  "Web Developer",
  "Graphic Designer",
  "YouTube",
]
const typeSpeed = 100
const backSpeed = 60
const loop = true

const typed = new Typed(".typing", {
  strings: typingStrings,
  typeSpeed: typeSpeed,
  backSpeed: backSpeed,
  loop: loop,
})

/*================================================ Aside =============================================*/

const nav = document.querySelector(".nav")
const navList = nav.querySelectorAll("li")
const allSection = document.querySelectorAll(".section")
const totalSection = allSection.length

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section")
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section")
}

function showSection(element) {
  allSection.forEach((section) => section.classList.remove("active", "out"))
  const target = element.getAttribute("href").split("#")[1]
  document.querySelector("#" + target).classList.add("active")
  setTimeout(() => {
    document.querySelector("#" + target).classList.remove("out")
  }, 800)
}

function updateNav(element) {
  navList.forEach((item) => {
    item.querySelector("a").classList.remove("active")
    const target = element.getAttribute("href").split("#")[1]
    if (target === item.querySelector("a").getAttribute("href").split("#")[1]) {
      item.querySelector("a").classList.add("active")
    }
  })
}

function handleNavLinkClick(event) {
  event.preventDefault()
  removeBackSection()

  navList.forEach((item) => item.querySelector("a").classList.remove("active"))
  this.classList.add("active")
  showSection(this)

  if (window.innerWidth < 1200) {
    asideSectionTogglerbtn()
  }
}

navList.forEach((item) => {
  const a = item.querySelector("a")
  a.addEventListener("click", handleNavLinkClick)
})

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index")
  showSection(this)
  updateNav(this)
  removeBackSection()
  addBackSection(sectionIndex)

  if (window.innerWidth >= 1200) {
    asideSectionTogglerbtn()
  }
})

const navTogglerBtn = document.querySelector(".nav-toggler")
const aside = document.querySelector(".aside")

navTogglerBtn.addEventListener("click", () => {
  aside.classList.toggle("open")
  navTogglerBtn.classList.toggle("open")
  allSection.forEach((section) => section.classList.toggle("open"))
})

function asideSectionTogglerbtn() {
  aside.classList.toggle("open")
  navTogglerBtn.classList.toggle("open")
  allSection.forEach((section) => section.classList.toggle("open"))
}
