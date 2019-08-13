import './TaskThree.css';
import React, { useEffect } from 'react';
import Particle from './Particle'

const TaskThree = () => {

    // Initial Setup
var canvas
var ctx


const colors = ['#ADFF2F', '#00FF00', '#FF0000', '#FF1493','#00FFFF','#0000FF']

useEffect(() => {

    canvas = document.querySelector('.circularCanvas');
    ctx = canvas.getContext('2d');

    canvas.width = 500;
    
    canvas.height = 500;

    init();
    animate();

   
},[]); 



var  randColor = (colors)=> {
    return colors[Math.floor(Math.random() * colors.length)];
  }

let particles;

var init =()=> {
    particles = []

    for (let i = 0; i < 20; i++) {
        // const radius= randInt(1,5);
        const radius= 7;
         particles.push(new Particle(canvas.width/2,canvas.height/2,radius,randColor(colors),ctx));
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