// COMPONENTS
const pageHeaderHTML = () => {
    return`
        <h1>List of good, old movies</h1>
    `
};

const pageContentHTML = (movies) => {
    return movies.map(movie => {
        return (
            `
            <div>
                <h5>${movie.title}</h5>
                <p>${movie.year}</p>
                <p>${movie.rate}</p>
            </div>
            `
        );
    }).join("");
};

// FETCH
const fetchMovies = async () => {
    const movieData = await fetch(`http://127.0.0.1:9004/movies`);
    return movieData.json();
};


// FILTER MOVIES function
const filterGoodOldMovies = (movies) => {
    return movies.filter(movie => {
        return movie.year < 1980 && movie.rate > 8.5
    })
};


// LOAD
const loadEvent = async () => {
    const movies = await fetchMovies();
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", pageHeaderHTML());

    const goodOldMovies = filterGoodOldMovies(movies);
    rootElement.insertAdjacentHTML("beforeend", pageContentHTML(goodOldMovies));
};

window.addEventListener("load", loadEvent);