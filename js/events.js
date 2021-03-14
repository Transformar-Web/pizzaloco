const btnMenu = document.querySelector("#btnMenu");
const mostrarMenu = document.querySelector(".containerMenu2");

btnMenu.addEventListener("click", ()=>{
    btnMenu.classList.toggle("is-active");
    mostrarMenu.classList.toggle("activarMenu");
})


// modal contact
const modal = document.querySelectorAll('#contact');
const showContainer = document.querySelector('.containerContact');
modal.forEach(contacts => {
    contacts.addEventListener('click', (e)=>{
        e.preventDefault();
        showContainer.classList.add('activeModal');
    });
});

// close modal
const cerrar = document.querySelector('.form-container__icon');
cerrar.addEventListener('click',()=>{
    showContainer.classList.remove('activeModal')
});

// form 
 const form = document.querySelector('.form-container__form')
 .addEventListener('submit', (e)=>{
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Envio Completado!!',
        showConfirmButton: false,
        timer: 3500
    })
    showContainer.classList.remove('activeModal');
 })

//  suscription
const noti = document.querySelector("#suscription");
noti.addEventListener("click", ()=>{
     Swal.fire({
        icon: 'success',
        title: 'Suscrito Exitosamente',
        timer: 3500,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#FF0E0E',
     })
})

// deslizar 
const btnDeslizar = document.querySelector('.contenido__down');
btnDeslizar.addEventListener("click",()=>{
    location.href = 'index.html#section1'
})