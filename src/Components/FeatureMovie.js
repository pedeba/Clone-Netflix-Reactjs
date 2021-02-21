import React from 'react'
import './FeatureMovie.css'

function FeatureMovie({item}){
    const firstDate = new Date(item.first_air_date)
    const genres = item.genres.map((item)=>{
        return item.name
    })
    const genres2 = genres.join(', ')
    console.log(genres2)
    return (
        <section className="featured" style={{backgroundSize: 'cover', backgroundPosition:'center',backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons === 1 ? 'temporada': 'temporadas'}</div>
                    </div>
                    <div className="featured--description">
                        {item.overview}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="btn1">► Assistir</a>
                        <a href={`/listen/add/${item.id}`} className="btn2">+Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <b>Gêneros</b>: {genres2}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureMovie