/* ===================================== Toggle Style Switcher =================================*/ 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scrol
window.addEventListener("scroll", () =>  {
  if(document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})
/* ===================================== Theme Colors =================================*/ 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title")) 
    {
      style.removeAttribute("disabled")
    } 
    else 
    {
      style.setAttribute("disabled", "true");
    }
  })
}
/* ===================================== Theme Light An Dark Mode =================================*/ 
const daynNight = document.querySelector(".day-night");
daynNight.addEventListener("click", () => {
  daynNight.querySelector("i").classList.toggle("fa-sun");
  daynNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
  if(document.body.classList.contains("dark"))
  {
    daynNight.querySelector("i").classList.add("fa-sun");
  }
  else
  {
    daynNight.querySelector("i").classList.add("fa-moon");
  }
})

