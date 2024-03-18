// index.js

const fs = require('fs');

class MovieCollection {
  constructor() {
    this.movies = [];
  }

  loadMovies() {
    try {
      const data = fs.readFileSync('movies.json', 'utf8');
      this.movies = JSON.parse(data);
      console.log('Movies loaded successfully.');
    } catch (err) {
      console.error('Error loading movies:', err);
    }
  }

  saveMovies() {
    try {
      const data = JSON.stringify(this.movies, null, 2);
      fs.writeFileSync('movies.json', data);
      console.log('Movies saved successfully.');
    } catch (err) {
      console.error('Error saving movies:', err);
    }
  }

  addMovie(movie) {
    this.movies.push(movie);
    this.saveMovies();
  }

  displayMovies() {
    console.log('Movies:');
    this.movies.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title} (${movie.year})`);
      console.log(`   Director: ${movie.director}`);
      console.log(`   Genre: ${movie.genre}`);
      console.log('-------------------------------------');
    });
  }
}

const movieCollection = new MovieCollection();
movieCollection.loadMovies();
movieCollection.displayMovies();

// Example: Add a new movie
const newMovie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  year: 2010,
  genre: 'Sci-Fi'
};
movieCollection.addMovie(newMovie);
