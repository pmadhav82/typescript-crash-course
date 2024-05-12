const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const undoBtn = document.getElementById("undoBtn") as HTMLButtonElement;
const redoBtn = document.getElementById("redoBtn") as HTMLButtonElement;
const  drawingArea = document.getElementById("drawing-area") as HTMLDivElement;



type pointerPosition = {
    x:number,
    y: number,
    circleNum: number
};

let circle: pointerPosition[] = [];

let circleInRedoCollection: pointerPosition[] = [];


resetBtn.addEventListener("click", ()=>{
    circle = [];

drawingArea.innerHTML = "";
})


undoBtn.addEventListener("click", ()=>{
   let undosCircle = circle.pop();
   
    if(circle.length ===0) {
         drawingArea.innerHTML = ""
    }
    if(undosCircle){

        circleInRedoCollection.push(undosCircle);
    }

    displayCircle(circle);
})




redoBtn.addEventListener("click", ()=>{
   let lastCircle = circleInRedoCollection.pop();
   if(circle && lastCircle){
    circle = [...circle, lastCircle]
    displayCircle(circle); 
   }
})


const displayCircle = (circleCollection: pointerPosition[]) =>{
    let html = "";
  
        circleCollection.forEach((circle)=>{
     html += `<div style= " height: 50px;
      position:absolute;
      top: ${circle.y}px;
     left: ${circle.x}px;
 
      width: 50px;
     border: 1px solid white;
      display:flex;
      justify-content: center;
     align-items: center;
      border-radius: 50%;
 
      "> ${circle.circleNum}</div>`;
    drawingArea.innerHTML = html
        })
    }





drawingArea.addEventListener("click", (e)=>{
   
    const circlePosition: pointerPosition = {
        x: e.clientX,
        y: e.clientY,
        circleNum: circle.length +1
    };
   
    circle.push(circlePosition);
displayCircle(circle)
})




