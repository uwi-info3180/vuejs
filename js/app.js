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
                title: 'The Lord of the Rings: The Fellowship of the Ring',
                description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
                rating: 5
            },
            {
                title: 'The Bourne Identity',
                description: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and regain his memory.',
                rating: 4
            },
            {
                title: 'Wonder Woman',
                description: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.',
                rating: 5
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