import React from 'react';
import styles from '../asset/css/landing.module.css';

function Item({img,head,text})
{

return(
    <div className={styles.item}>
    <img src={img} alt="Campaign"></img>
    <h3>{head}</h3>
    <pre>{text}</pre>
</div>
)
}

export default Item;