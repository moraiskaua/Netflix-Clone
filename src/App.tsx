import { useEffect, useState } from "react";
import Tmdb from "./components/API/Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import loading from "./assets/Netflix_LoadTime.gif";
import "./App.css";

function App() {

  const [movieList, setMovieList] = useState<any[]>([]);
  const [featuredData, setFeaturedData] = useState<object>();
  const [blackBg, setBlackBg] = useState<boolean>(false);

  useEffect(() => {
    const loadAll = async () => {

      // pega a lista da API
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pega o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChoose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let choose = originals[0].items.results[randomChoose];
      let chooseInfo = await Tmdb.getMovieInfo(choose.id, "tv");
      setFeaturedData(chooseInfo);
    }

    // Chama a função
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackBg(true);
      } else {
        setBlackBg(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header isBlack={blackBg} />

      {!featuredData &&
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      }
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Clone da página feito para estudo, por <a href="https://www.linkedin.com/in/kauamorais03/">Kauã Morais.</a><br />
        Direitos de imagem para <a href="https://www.netflix.com">Netflix.</a><br />
        Dados pegos da API do <a href="https://www.themoviedb.org">The Movie Database</a>
      </footer>

    </div>
  )
}

export default App;