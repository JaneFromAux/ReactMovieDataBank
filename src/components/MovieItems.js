const MovieItems = (props) => {
    return (
        <div className="movieCard">
            <h4>{props.title}</h4>
            <h4>{props.year}</h4>
            <h4>{props.director}</h4>
            <h4>{props.duration}</h4>
            <h4>{props.rating}</h4>
            <p>{props.genre}</p>
            <p>{props.genre2}</p>
            <p>{props.genre3}</p>
            <p>{props.genre4}</p>

        </div>
    );
}

export default MovieItems;