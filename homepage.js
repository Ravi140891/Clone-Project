const slider = document.querySelector('.slider_image')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const bottomWear = document.querySelector('.bottom-wear')
const dropMenu = document.querySelectorAll("more_dropdown_list");
const bottomWearMenu = document.querySelector(".bottom-wear-menu");
let translate = 0;

setInterval(() => {
    if(translate >= 0 && translate < 200){
        translate += 100;
    } else{
        translate = 0;
    }
    slider.style.transition = '2s'
    slider.style.transform = `translateX(${-translate}%)`
},3000)

nextBtn.addEventListener('click', () =>{
    if(translate < 200){
        translate += 100;
        slider.style.transition = "1s";
        slider.style.transform = `translateX(${-translate}%)`;
    }
})

prevBtn.addEventListener("click", () => {
  if (translate > 0) {
    translate -= 100;
    slider.style.transition = "1s";
    slider.style.transform = `translateX(${-translate}%)`;
  }
});

bottomWear.addEventListener('mouseover', () => {
    dropMenu.forEach((item) => item.style.display = 'none')
    bottomWearMenu.style.display = 'block'
    console.log("hi");
})