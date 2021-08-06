const addMovieBtn = document.getElementById("add-movie-btn");

const movies = [];
const addMovieHaandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title === "" || extraName === "" || extraValue === "") return;
  const newMovies = {
    info: {
      title,
      [extraName]: extraValue,
    },
  };
  movies.push(newMovies);
  renderMovie();
};

const renderMovie = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) return;
  else movieList.classList.add("visible");
  const newMovieEl = document.createElement("li");
  movies.forEach((movie) => {
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key} : ${movie.info[key]}`
        
      }
    }
    newMovieEl.textContent = text;
    movieList.append(newMovieEl);
  });
};
addMovieBtn.addEventListener("click", addMovieHaandler);
