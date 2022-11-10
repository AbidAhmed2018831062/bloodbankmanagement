import React from 'react';
import styles from '../asset/css/landing.module.css';
import Count from './Customers';
import Flex from './Flex';
import Ul from './Ul';

function LandingPage()
{
return(
    <div className={styles.landing}>
        <div className={styles.back}>
         <div className={styles.coverWriting}>
            <h2>Blood Donation is a great cause.</h2>
            <h4>Donate Blood be a Hero and Help the Mankind</h4>
            <h5 style={{fontSize:"120%"}}>We Have Done So Far</h5>
           <Ul/>
         </div>
        </div>
       <div className={styles.operate}>
        <h5>How we Operate</h5>
       <Flex/>
       </div>
       <div className={styles.achieve}>
           <h4>Our Achievement So Far</h4>
           <div className={styles.flex}>
            <Count value={10000} text={"Donors"}/>
            <Count value={1000} text={"Hospitals Network"}/>
            <Count value={12000} text={"Patients Helped"}/>
            <Count value={50} text={"Campaigns"}/>
            <Count value={8} text={"Cities Office"}/>
            </div>
       </div>
    </div>
)
}

export default LandingPage;