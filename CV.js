
const botones=
document.querySelectorAll('.mas_btn');
const Textos= document.querySelectorAll('.contenido');
botones.forEach((boton,index)=>{
    boton.addEventListener('click',()=>{
        const Texto=Textos[index];
        Texto.classList.toggle('mostar');
    });
});






