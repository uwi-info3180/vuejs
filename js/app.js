/* Movie Time App using VueJS */

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      movies: [
            {
                title: 'Test',
                description: 'This is a bad movie',
                rating: 1
            },
            {
                title: 'Test 2',
                description: 'This is a cool movie',
                rating: 4
            },
            {
                title: 'Test 3',
                description: 'This movie is just okay',
                rating: 3
            },            
      ],
      movieTitle: '',
      movieDescription: '',
      movieRating: 1
    },
    methods: {
        addMovie: function() {
            console.log('clicked')

            let movie = {
                title: this.movieTitle,
                description: this.movieDescription,
                rating: this.movieRating
            };
            console.log(movie);
            this.movies.push(movie);
            $('#addMovieModal').modal('hide');
        },
        removeMovie: function() {

        }
    }
});