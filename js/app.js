// /* Movie Time App using VueJS */

const App = Vue.createApp({
  data() {
    return {
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
    }
  },
  methods: {
    addMovie() {
        // console.log('clicked')
        this.disableEditing();

        let movie = {
            title: this.movieTitle,
            description: this.movieDescription,
            rating: parseInt(this.movieRating)
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
    editMovie(index) {
        let movie = this.movies[index];
        this.enableEditing();

        // console.log(movie.title);
        this.movieTitle = movie.title;
        this.movieDescription = movie.description;
        this.movieRating = parseInt(movie.rating);
        this.currentlyEditing = index;

        $('#addMovieModal').modal('show');
    },
    updateMovie() {
        let movie = {
            title: this.movieTitle,
            description: this.movieDescription,
            rating: parseInt(this.movieRating)
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
    removeMovie(index) {
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
    enableEditing() {
        this.editMode = true;
    },
    disableEditing() {
        this.editMode = false;
    },
    clearFormFields() {
        this.movieTitle = '';
        this.movieDescription = '';
        this.movieRating = 1;
    }
  }
});

/* Card component*/
App.component('movie-card', {
    template: `
    <div class="card">
        <img class="card-img-top" src="http://placehold.it/280x180?text=Placeholder+Image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <p class="card-text text-center text-muted">
                <img src="images/star.svg" alt="star" v-for="n in movie.rating" /> <br><small>({{ movie.rating + '/5' }} {{ (movie.rating > 1) ? 'stars' : 'star' }})</small>
            </p>
        </div>
        <div class="card-footer text-muted d-flex">
            <button @click="editMovie" class="btn btn-primary btn-sm text-right"><img src="images/pencil.svg" alt=""> Edit</button>
            <button @click="removeMovie" class="btn btn-danger btn-sm text-right"><img src="images/trashcan.svg" alt=""> Remove</button>
        </div>
    </div>
    `,
    props: ['movie'],
    data() {
        return {}
    },
    methods: {
        editMovie() {
            this.$emit('edit');
        },
        removeMovie() {
            this.$emit('remove');
        }
    }
});

App.mount('#app');