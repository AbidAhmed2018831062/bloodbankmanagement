import React from 'react';
import styles from '../asset/css/landing.module.css';
import ask from '../asset/images/ask.jpg';
import cam from '../asset/images/campaign.avif';
import contact from '../asset/images/contact.webp';
import Item from './Item';
function Flex()
{

return(
   
         <div className={styles.flex}>
        <Item img={cam} head="Campaigns" text="We regularly arrange blood donation campaigns. You can donate blood from there or You can directly come to our office and donate blood 24/7."/>
        <Item img={ask} head="Emergency Blood" text="Ask for blood and we will look at our stored blood bank and if we do not find the needed blood we will contact the donors with the same group so that the blood can be managed."/>
        <Item img={contact} head="Contact" text="When you donate blood, we will create an account for you in our website and we will contact you if any related blood is needed. Moroever, you can also watch from the posts if there is any need of blood donations nearby."/>
      
        </div>
  
)
}

export default Flex;