function pong() {
    // Inside this function you will use the classes and functions 
    // from rx.js
    // to add visuals to the svg element in pong.html, animate them, and make them interactive.
    // Study and complete the tasks in observable exampels first to get ideas.
    // Course Notes showing Asteroids in FRP: https://tgdwyer.github.io/asteroids/ 
    // You will be marked on your functional programming style
    // as well as the functionality that you implement.
    // Document your code!  
    const svg = document.getElementById("canvas");
    const paddleOne = createRectangle(10, 100, 10, 10)
    const paddleTwo = createRectangle(10, 100, 580, 10)

    

  svg.appendChild(paddleOne)
  svg.appendChild(paddleTwo)
}

const createRectangle = (width: number, height: number, x: number, y: number): SVGRectElement => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
  rect.setAttribute('width', width.toString())
  rect.setAttribute('height', height.toString())
  rect.setAttribute('x', x.toString())
  rect.setAttribute('y', y.toString())
  rect.setAttribute('fill', 'grey')
  return rect
}
  
// the following simply runs your pong function on window load.  Make sure to leave it in place.
if (typeof window != 'undefined')
  window.onload = ()=>{
    pong();
  }
  
  

