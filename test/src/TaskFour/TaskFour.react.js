import React, { useEffect,useState }  from 'react';
import Slot from './Slot';

import './TaskFour.css';



const TaskFour = () => {

    const[ints,setInt] = useState([
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0]
    ]); //7 days in array. each day have array [t,h] -  where t - time, when interval starts (1-24), h - how many hours interval
        //if t = 0 - no interval in this day was set yet, 
        //if t!=0 and h=0 - interval was canceled this day                                                                                                       
    

    const[days,setDay] = useState([]); 
                                                                        
    var dayNames=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
    var timeNames=["12 AM","1","2","3","4","5","6","7","8","9","10","11","12 PM","1","2","3","4","5","6","7","8","9","10","11"]
    
    var daysData = [];

   

    useEffect(() => {
        
      update();
            
    },[ints]);

    const update = ()=>{
        daysData = [];

        var beforeInterval=[0,0]; //"playhead" position before next interval
                                  // [b,i]  b -slots before next interval,i -interval length

        ints.forEach((element,index) => {
            var row = [];
            
          
            for(let i=0;i<24;i++){
                let hour;
                if(element[0]===i+1){
                    if(element[1]>0){
                        hour = element[1];
                        beforeInterval=[hour,hour]
                    }else{
                        hour = "s";
                    }
                }else{
                if(element[1]>0||(element[0]===0&&element[1]===0)){ //show day interval only if this day's interval wasn't cancelled
                    if(beforeInterval[0]>1){
                        beforeInterval[0]--;
                        hour="";
                    }else{
                        beforeInterval[0]=beforeInterval[1];
                        if(beforeInterval[1]>0){hour="i"}else{hour="";}
                    }
                 }
                }

                row.push(hour);
            }
            daysData.push(row);
        });
            setDay(daysData);
    }

    const updateInt=(day,time,length)=>{
        
    var obj = ints; 
        obj[day][0]=time;
        obj[day][1]=length;
        setInt(obj);
        update();
        
    }

    const clear=()=>{
        setInt([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]);
        update();
    }

    return (
        <div className='taskfour_wrapper'>
            <h2>Task 4</h2>
            <div className="content">

            <div className="modal">
                <h4>Set Full Spetrum Measurement Scheldue</h4>
                <div className="calendar">
                { days.map((item,index)=>{
                  
                    return(
                    <div className="row" key={index}>
                        <div className="title">{dayNames[index]}</div>
                        <div className="slots">
                            {item.map((slot,ind)=>{//updateInt(index,ind+1,slot)
                                
                               return <Slot data={slot} key={ind} day={index} time={ind+1} onIntChange={updateInt}/>
                                
                            })}
                        </div>
                    </div>
                    )
                })
                }
               
                

                </div>
                    
                <div className="row empty">
                        <div className="title"></div>
                        <div className="slots">
                            {timeNames.map((item,index)=>{
                                return(
                                    <div className="slot" key={index} >{item}</div>
                                    )  
                            })}
                        </div>
                    </div>
                    <button onClick={()=>{clear()}}>Clear</button>
            </div>
                
            </div>
        </div>
    );

}

export default TaskFour;