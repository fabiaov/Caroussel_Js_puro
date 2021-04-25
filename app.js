const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')
const lastSlideIndex = slides.length - 1

let myTimer

let timer = 2000

let currentSlideIndex = 0

// Manipula as classes tirando e adicionando a classe pra ficar visivel nas imagens
const manipulateSlideClasses = correctSlideIndex => {
    slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
    slides[correctSlideIndex].classList.add('carousel__item--visible')
}

// Evento de apertar Botão de avançar slide
nextButton.addEventListener('click',() => {
    stop()
    start()
    const correctSlideIndex = currentSlideIndex === lastSlideIndex
        ? currentSlideIndex = 0
        : ++currentSlideIndex
    manipulateSlideClasses(correctSlideIndex)
    
})

// Evento de apertar botão de retroceder slide
prevButton.addEventListener('click',() =>{
    stop()
    start()
    const correctSlideIndex = currentSlideIndex === 0 
        ? currentSlideIndex = lastSlideIndex
        : --currentSlideIndex
    manipulateSlideClasses(correctSlideIndex)
})

const intervalLogic = function(){
    nextImage()   
}
// função nextImage passa os slides automaticamente
function nextImage() {
    const correctSlideIndex = currentSlideIndex === lastSlideIndex
        ? currentSlideIndex = 0
        : ++currentSlideIndex
    manipulateSlideClasses(correctSlideIndex)
}


// abaixo a variavel que iniciei aqui fora myTimer pra ver se resolvia a questão do clearInterval

//função start inicia quando a pagina carrega, nessa função start que tudo começa


function start() {
    
    myTimer = setInterval(intervalLogic,timer)
    
}

function stop(){
    clearInterval(myTimer)
}

window.addEventListener('load', start)









// nextButton.addEventListener('click',() => {
//     if(currentSlideIndex === slides.length - 1){
//         currentSlideIndex = 0
//     }else{
//         currentSlideIndex++
//     }
//     slides.forEach(slide => {
//         slide.classList.remove('carousel__item--visible')
//     })
//     slides[currentSlideIndex].classList.add('carousel__item--visible')
    
// })
// prevButton.addEventListener('click',() =>{
//     if(currentSlideIndex === 0){
//         currentSlideIndex = slides.length - 1
//     }else{
//         currentSlideIndex--
//     }
//     slides.forEach(slide => {
//         slide.classList.remove('carousel__item--visible')
//     })
//     slides[currentSlideIndex].classList.add('carousel__item--visible')
// })