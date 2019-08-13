import React, { useEffect,useState,useRef }  from 'react';

import './TaskFour.css';



const Slot = (props) => {

    const node = useRef();

    useEffect(() => {
        
        document.addEventListener("mousedown", handleClick);
       
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };

    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
         
          return;
        }
        setClick(false);
      };

    const onChange=(e)=>{
        var data = e.target.options[e.target.selectedIndex].dataset.i;
       if(data>0){
        props.onIntChange(props.day,props.time,parseInt(data));
       }
    }
   

    const[clicked,setClick]=useState(false);

    return(
        <div className="slot"  ref={node}>
        <div className="content" onClick={()=>{setClick(true);}}>
        {(props.data==="i")&&<span className="intervalMark">|</span>}
        {(props.data==="s")&&<span className="stopMark"></span>}
        {(props.data>0)&&<span className="startMark">{props.data}</span>}
        {(props.data===""||!props.data)&&<span className={"emptyMark "+(clicked?"clicked":"")}></span>}
        </div>
        {clicked&&
        <div className="popup" id="pop">
            <div className="header">
                <span>Measurement interval</span>
                <div className="btns">
                    <span onClick={()=>{props.onIntChange(props.day,0,0);setClick(false);}} title="Delete interval">[`]</span>
                    <span onClick={()=>{setClick(false);}}>X</span>
                </div>
                
            </div>
            <select onChange={(e)=>{onChange(e);setClick(false);}}>
                    <option data-i="0">Select...</option>
                    <option data-i="3">3 hours</option>
                    <option data-i="6">6 hours</option>
                    <option data-i="12">12 hours</option>
                    <option data-i="24">24 hours</option>
            </select>
            <span className="stop-link" onClick={()=>{props.onIntChange(props.day,props.time,0);setClick(false);}}>Stop measurement</span>
        </div>
        }

        </div>
        );  

}

export default Slot;