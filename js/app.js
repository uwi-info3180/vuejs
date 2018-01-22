/* Movie Time App using VueJS */

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      flashMessage: '',
      displayFlash: false,
      isSuccess: false,
      alertSuccessClass: 'alert-success',
      alertErrorClass: 'alert-danger',
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
            // console.log('clicked')

            let movie = {
                title: this.movieTitle,
                description: this.movieDescription,
                rating: this.movieRating
            };
            // console.log(movie);
            this.movies.push(movie);
            this.movieTitle = '';
            this.movieDescription = '';
            this.movieRating = 1;
            
            this.displayFlash = true;
            this.isSuccess = true;
            this.flashMessage = 'Movie added successfully!';
            $('#addMovieModal').modal('hide');

            let self = this;
            setTimeout(function() { 
                self.displayFlash = false; 
                // console.log(self.displayFlash);
            }, 3000);
        },
        removeMovie: function(index) {
            this.displayFlash = true;
            this.isSuccess = false;
            this.flashMessage = 'Movie deleted!';
            this.movies.splice(index, 1);

            let self = this;
            setTimeout(function() { 
                self.displayFlash = false; 
                // console.log(self.displayFlash);
            }, 3000);
        }
    }
});