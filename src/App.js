import React, { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb'
import Movierow from './Components/Movierow'
import FeatureMovie from './Components/FeatureMovie'
import Header from './Components/Header'
function App() {
  const [movielist, setMovielist] = useState([])
  const [featuredata, setFeaturedata] = useState(null)
  
  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando lista total
      let list = await Tmdb.getHomeList()
      setMovielist(list)
      //pegando o featured
      let originals = list.filter(item=>item.slug==='originals')
      let random = Math.floor(Math.random()*originals[0].item.results.length-1)
      let chosen = originals[0].item.results[random]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedata(chosenInfo)
    }
    loadAll()
  }, [])
  return (
    <div className="page">
      <Header/>
      {featuredata && <FeatureMovie item={featuredata}/>}
      <section className="lists">
        {movielist.map((item,key)=>(
          <Movierow title={item.title} items={item.item} key={key}/>
        ))}
      </section>
      <footer>
        Direitos de imagem para Netflix.
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
    
  );
}

export default App