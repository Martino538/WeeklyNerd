import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/assets')); // Serve static files from the 'public' directory
app.set('view engine', 'ejs');

// async function fetchMultipleUrls() {
//   const url1 = ``;

//   // Fetch data from both URLs concurrently
//   const [data1] = await Promise.all([
//     fetch(url1).then(response => response.json())
//   ]);

//   return { discoverMovies: data1.results};
// }

// async function fetchMovieDetails(movieId) {
//   const url = `https://api.themoviedb.org/3/movie/${movieId}&language=nl-NL?api_key=${apiKey}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// Routes
app.get("/", async (req, res) => {
  try {
    const fetchedData = '';
    let title = "test";
    res.render('pages/index', {title});
  } catch (error) {
    console.error('No data to be seen:', error);
    res.status(500).send('No data');
  }
});

// Detailpagina route
app.get("/movie/:id", async (req, res) => {
  try {
    const movieId = req.params.id;

    console.log(reviewData.results.length);

    res.render('pages/movie_detail', { movie: movieData});
  } catch (error) {
    console.error('Fetching movie details failed:', error);
    res.status(500).send('Test');
  }
});

// Search route
app.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const searchData = await fetchSearchResult(searchTerm);

    const searchWithDataImages = searchData.results.filter(movie => movie.poster_path != null);

    res.render('pages/search_results', { title: "Resultaten", searchdataResults: searchWithDataImages, searchTerm});
  } catch (error) {
    console.error('Fetching movie details failed:', error);
    res.status(500).send('test');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});