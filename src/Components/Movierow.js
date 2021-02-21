import React, { useState } from 'react'
import './Movierow.css'
function Movierow({title, items}) {
    const [scrolllX, setScrollX] = useState(0)
    const handleLeft = ()=>{
        let x = scrolllX+Math.round(window.innerWidth/2)
        if(x>0){
            x=0
        }
        setScrollX(x)
    }
    const handleRight = ()=>{
        let x = scrolllX - Math.round(window.innerWidth/2)
        let listw = items.results.length * 150
        if((window.innerWidth-listw)>x){
            x=(window.innerWidth-listw)-60
        }
        setScrollX(x)
    }
    return <div className='movieRow'>
        <h2>{title}</h2>
        <div className="movieRow--left" onClick={handleLeft}>
        ⮜
        </div>
        <div className="movieRow--right" onClick={handleRight}>
        ⮞
        </div>
        <div className="movieRow--listarea">
            <div className="movieRow--list" style={{
                marginLeft: scrolllX,
                width: items.results.length*150
            }
            }>
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <div className="movieRow--item" key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Movierow