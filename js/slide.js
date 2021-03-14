let sliderComment = 
new Glide(document.querySelector("#sliderComments"),{
    type: 'carousel',
    perView: 3,
    autoplay: 3500,
    breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
    }
}).mount()