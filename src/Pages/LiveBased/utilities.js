export const drawRect = (detections, ctx) =>{
    
    detections.forEach(prediction => {
  
      
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
  
      
      const color = "red";
      ctx.strokeStyle = color;
      ctx.font = '18px Arial';
  
      
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();
    });
  }
