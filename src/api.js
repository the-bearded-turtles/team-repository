module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json())
        .then (logData=>console.log(logData))
  }
};
