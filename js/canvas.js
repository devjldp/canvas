let miCanva = document.getElementById('miCanvas');
let ctx = miCanva.getContext('2d');

window.addEventListener('DOMContentLoaded', () =>{


  console.log(ctx)

  let indy = new Image();
  indy.src = '../images/indy.png';
  indy.addEventListener('load', ()=>{
    ctx.drawImage(indy,60,60,100,100)
  })
  
  

})