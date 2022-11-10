import React from 'react';
import tick from '../asset/images/tick.png';
import List from './List';

function Ul()
{

return(
    <ul>
    <List tick={tick} text="2000+ donators"/>
    <List tick={tick} text="500+ listed hospitals"/>
    <List tick={tick} text="4000+ patients helped"/>
    
</ul>
)
}

export default Ul;