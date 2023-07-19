window.addEventListener('DOMContentLoaded', () =>{

  let miCanva = document.getElementById('miCanvas');
  let ctx = miCanva.getContext('2d');
  let indy = new Image();
  indy.src = './docs/images/indy.png';
  indy.addEventListener('load', ()=>{
    ctx.drawImage(indy,60,60,100,100)
  })
})
