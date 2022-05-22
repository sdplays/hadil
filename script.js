var main = document.querySelector('.main');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');
var Rb =  Math.floor(Math.random() * 100) +'%' ;
main.style.width = '900px';
main.style.height = '450px';
main.style.left =  '70px';
main.style.top = '60px';
main.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16);

const ball = document.createElement('div');
var b = {x:50,y:30,w:Math.floor(Math.random() * 800),h:Math.floor(Math.random() * 

400),dx:Math.floor(Math.random() * 40),dy:Math.floor(Math.random() * 40),ani:

{},move:false};
ball.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16);
ball.style.borderRadius = Rb;
ball.style.width = b.w +'px';
ball.style.height = b.h +'px';
ball.style.left = b.x + 'px';
ball.style.top = b.y +'px';
ball.style.position = 'relative';
h1.addEventListener('click',()=>{
  main.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16);
   b = {x:50,y:30,w:Math.floor(Math.random() * 800),h:Math.floor(Math.random() * 

40),dx:Math.floor(Math.random() * 40),dy:Math.floor(Math.random() * 40),ani:

{},move:false};
ball.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16);
ball.style.borderRadius = Rb;
ball.style.width = b.w +'px';
ball.style.height = b.h +'px';
ball.style.left = b.x + 'px';
ball.style.top = b.y +'px';
  Rb =  Math.floor(Math.random() * 100) +'%' ;
   
})
div.addEventListener('click',()=>{
  if(!b.move){
   b.ani = requestAnimationFrame(mover);
   b.move = true
  }else{
    cancelAnimationFrame(b.ani)
    b.move = false
  }
  
  
})
function mover(){
  if(b.x>900-b.w || b.x < 0){
    b.dx *= -1;
    
    ball.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16);
  }
  if(b.y>450-b.h || b.y < 0){
    b.dy *= -1;
    
    
   main.style.backgroundColor = "#"+
 Math.floor(Math.random()*16777215).toString(16); 
  }
  b.x += b.dx;
  b.y += b.dy;
  ball.style.left = b.x + 'px';
ball.style.top = b.y +'px';
  if(b.move){
    b.ani = requestAnimationFrame(mover);
  }
  
}
main.append(ball);
