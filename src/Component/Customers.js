import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import styles from '../asset/css/landing.module.css';

function Count({value,text})
{
    const [countup, setCountUp]=useState(false)
return(
    <ScrollTrigger onEnter={()=> setCountUp(true)} className={styles.count}>
   
        {countup&&
         <div> 
        <h6>
        <CountUp start={0} end={value} delay={0}/>+
        </h6>
        <h5>{text}</h5>
        </div>
}

        
    
    </ScrollTrigger>
)
}

export default Count;