import React from 'react';
import "./portfolioList.scss";


export default function PortfolioList({id,setSelected,active,title}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)} >
            {title}
        </li>
    )
}
