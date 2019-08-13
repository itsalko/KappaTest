import React, { useEffect } from 'react';

import './TaskOne.css';

const TaskOne = () => {

   

    var squareProps = {
        tx:{
            from:400,
            to:0,
            now:0
        },
        ty:{
            from:-600,
            to:0,
            now:0
        },
        tr:{
            from:180,
            to:0,
            now:0
        },
        op:{
            from:0,
            to:1,
            now:0
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getScroll);
        return () => {
            window.removeEventListener('scroll', getScroll);
          }
    }); 

  

    const getScroll=(e)=>{
        var scrollPos;
        var niceEdge;//edge of scroll position after which  "nice title" starts appear;
      
       
        if(e){
 

            niceEdge = e.target.scrollingElement.clientHeight/2;
            scrollPos = e.target.scrollingElement.scrollTop;

            var timeline = scrollPos-niceEdge;
   
            var nice = document.querySelector('.nice');
           // var square = document.querySelector('.square');
      
            if(getComputedStyle(document.documentElement).getPropertyValue('--tx')==="0"){ //check if initial parameters added to style
                                                                                        //if not - add
                squareProps.tx.from=600; 

                squareProps.tx.now=squareProps.tx.from;
                squareProps.ty.now=squareProps.ty.from;
                squareProps.tr.now=squareProps.tr.from;
                squareProps.op.now=squareProps.op.from;
            }
             
               

            if(scrollPos>niceEdge/5){  //show square earlier 

                var xpos = squareProps.tx.from-(timeline);
               
               if(xpos>25){  //limit left edge as half of square width
                squareProps.tx.now = xpos;
                squareProps.ty.now = squareProps.ty.from+(timeline)/1.5;
                squareProps.tr.now =-(timeline)/5;
                squareProps.op.now = (timeline)/100;
                }else{squareProps.tx.now =25;}
            }
            
            if(scrollPos>niceEdge){
                
                nice.style.opacity = (timeline)/(niceEdge*1.5);
   
            }else{
                nice.style.opacity = 0;
            }

            document.documentElement.style.setProperty('--tx', squareProps.tx.now+'px');
            document.documentElement.style.setProperty('--ty', squareProps.ty.now+'px');
            document.documentElement.style.setProperty('--tr', squareProps.tr.now+'deg');
            document.documentElement.style.setProperty('--op', squareProps.op.now);
            
        }


    }
  

    return (
        <div className='taskone_wrapper' onScroll={getScroll()}>
            <h2>Task 1</h2>
        <div className="container" >
          
                <h3 className="title">Scroll<br/>&#8681;</h3>
                <h2 className="nice">Hey this is nice title</h2>

                <svg className="square">
                    <rect width="50" height="50" style={{fill:'red'}} />
                </svg>

           

        </div>

        </div>
    );

}

export default TaskOne;