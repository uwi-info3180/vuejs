/* Movie Time App using VueJS */

let app = new Vue({
    el: '#app',
    data: {
      message: 'A simple demo app showing the basics of VueJS!',
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
      movieRating: 1,
      editMode: false,
      currentlyEditing: null
    },
    methods: {
        addMovie: function() {
            // console.log('clicked')
            this.disableEditing();

            let movie = {
                title: this.movieTitle,
                description: this.movieDescription,
                rating: this.movieRating
            };
            // console.log(movie);
            this.movies.push(movie);
            this.clearFormFields();
            
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
        editMovie: function(index) {
            let movie = this.movies[index];
            this.enableEditing();

            // console.log(movie.title);
            this.movieTitle = movie.title;
            this.movieDescription = movie.description;
            this.movieRating = movie.rating;
            this.currentlyEditing = index;

            $('#addMovieModal').modal('show');
        },
        updateMovie: function() {
            let movie = {
                title: this.movieTitle,
                description: this.movieDescription,
                rating: this.movieRating
            };
            // console.log(movie);
            this.movies[this.currentlyEditing] = movie;

            this.clearFormFields();
            this.currentlyEditing = null;

            this.displayFlash = true;
            this.isSuccess = true;
            this.flashMessage = 'Movie updated successfully!';
            $('#addMovieModal').modal('hide');
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
        },
        enableEditing: function () {
            this.editMode = true;
        },
        disableEditing: function () {
            this.editMode = false;
        },
        clearFormFields: function() {
            this.movieTitle = '';
            this.movieDescription = '';
            this.movieRating = 1;
        }
    }
});