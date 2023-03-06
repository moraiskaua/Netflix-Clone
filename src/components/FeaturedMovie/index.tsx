import React from "react";
import "./FeaturedMovie.css";

export type Props = {
    item: any;
}

export default ({ item }: Props) => {

    let date = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 250) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical-degrade">
                <div className="featured--horizontal-degrade">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--average">{item.vote_average} pontos</div>
                        <div className="featured--year">{date.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--desc">{description}</div>
                    <div className="featured--buttons-area">
                        <a href={`/watch/${item.id}`} className="featured--watch-button">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--addList--button">+Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}