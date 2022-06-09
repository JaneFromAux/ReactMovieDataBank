import data from '../data';
import MovieItems from './MovieItems';

const Movie = () => {
    return (
        <section>
            {
                data.map((ele, i) =>
                    <MovieItems
                        key={i}
                        title={ele.title}
                        year={ele.year}
                        director={ele.director}
                        duration={ele.duration}
                        rating={ele.rating}
                        genre={ele.genre[0]}
                        genre2={ele.genre[1]}
                        genre3={ele.genre[2]}
                        genre4={ele.genre[3]}
                    />
                )
            }
        </section>
    );
}

export default Movie;