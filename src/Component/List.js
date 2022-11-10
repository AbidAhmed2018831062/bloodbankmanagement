import React from 'react';

function List({tick,text})
{

return(
    <li><img src={tick} alt="tick"></img><span>{text}</span></li>
)
}

export default List;