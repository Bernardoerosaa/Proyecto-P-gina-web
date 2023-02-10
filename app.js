let nave=document.querySelector(' .nave');
let body=document.querySelector('body');
document.addEventListener ('mousemove',(e)=>{
    nave.style.left=(e.clientX-40)+"px"
});
