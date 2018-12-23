const $ = require('jquery');

module.exports = {
  getMovies: () => {
    $(document).ajaxStart(function () {
      $('#loading-screen').show();
    });
    $(document).ajaxStop(function () {
      $('#loading-screen').hide();
    });

    return fetch('/api/movies')
      .then(response => response.json())
        .then((movies)=>{
          console.log('Here are all the movies:');
          movies.forEach(({title, rating, id}) => {
            console.log(`${title} - Rating: ${rating}`);
            const movieArray = [
              id,title,rating
            ];
            let html = '<div class="movieBox">';
            html += '<h2>' + title + '</h2>';
            html += '<p> Rating: ' + rating + '</p>';
            html += '<button type="button" class="button-edit">Edit Title</button>';
            html += '<button type="button" class="button-remove">Remove Title</button>';
            html += '</div>';
            $('#movie-list').append(html);
            console.log(movieArray);
          });

          // BELOW CONSOLE LOG PROVES WHAT INFO WITHIN ".forEach" IS BEING PUSHED TO 'movieArray'

        })
  }
};
