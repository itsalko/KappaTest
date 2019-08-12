import './TaskThree.css';
import React, { useEffect } from 'react';

const TaskThree = () => {

    // Initial Setup
var canvas
var ctx


const colors = ['#ADFF2F', '#00FF00', '#FF0000', '#FF1493','#00FFFF','#0000FF']

useEffect(() => {

    canvas = document.querySelector('.circularCanvas')
    ctx = canvas.getContext('2d')

    canvas.width = 500;
    
    canvas.height = 500;

    init();
    animate();

    return () => {
      
      }
}); 



var randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var  randColor = (colors)=> {
    return colors[Math.floor(Math.random() * colors.length)];
}


function Particle(x, y, radius, color) {
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

let particles;

var init =()=> {
    particles = []

    for (let i = 0; i < 20; i++) {
        // const radius= randInt(1,5);
        const radius= 7;
         particles.push(new Particle(canvas.width/2,canvas.height/2,radius,randColor(colors)));
    }
}


var animate=()=> {
    requestAnimationFrame(animate);
    ctx.fillStyle= "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

     particles.forEach(particle => {
     particle.update();
   });
}



    return (
        <div className='taskthree_wrapper'>
            <h2>Task 3</h2>
            <div className="content">
            <canvas className="circularCanvas"></canvas>
            </div>
        </div>
    );

}

export default TaskThree;