export default class Particle{

  constructor(x, y, radius, color,ctx) {
   
  
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
  this.radians= Math.random()* Math.PI*2;
  
  this.distanceFromCenter= randInt(20,90);
  this.speed= (100-this.distanceFromCenter)*0.001;
  this.centerPos= {x: x,y: y}
      
  this.update= () => {
      const point= {
          x:this.x,
          y:this.y,
      }
      
      this.radians+= this.speed;
      
      this.x= this.centerPos.x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y= this.centerPos.y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(point);
  }
  
  this.draw = (point) =>{
      
      ctx.fillStyle= this.color;
      ctx.fillRect(point.x,point.y,this.radius,this.radius);
      
     
  }
}
}

var randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

