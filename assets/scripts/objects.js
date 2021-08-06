const addMovieBtn = document.getElementById('add-movie-btn');

const movies = [];
const addMovieHaandler = () =>{
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  const newMovies = {
    info:{
      title,
      [extraName]:extraValue
    }
  }
  movies.push(newMovies);
  console.log(movies)


}

addMovieBtn.addEventListener('click',addMovieHaandler)