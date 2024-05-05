import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/assets')); // Serve static files from the 'public' directory
app.set('view engine', 'ejs');

async function fetchDataset() {
  const url1 = `https://raw.githubusercontent.com/Martino538/WeeklyNerd/main/src/data/data.json`;

  // Fetch data from both URLs concurrently
  const [data] = await Promise.all([
    fetch(url1).then(response => response.json())
  ]);

  console.log(data);

  return { dataResults: data.results};
}

// Routes
app.get("/", async (req, res) => {
  try {
    const {dataResults} = await fetchDataset();
    res.render('pages/index', {dataResults});
  } catch (error) {
    console.error('Fetching movies failed:', error);
    res.status(500).send('Failed to fetch movies');
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