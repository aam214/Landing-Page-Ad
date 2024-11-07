const adContainer = document.querySelector(".ad-container");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");

leftSide.addEventListener("mouseover", () =>{
adContainer.classList.add("active-left");
});
leftSide.addEventListener("mouseleave", () =>{
  adContainer.classList.remove("active-left");
});

rightSide.addEventListener("mouseover", () =>{
  adContainer.classList.add("active-right"); 
});
rightSide.addEventListener("mouseleave", () =>{
  adContainer.classList.remove("active-right");
});