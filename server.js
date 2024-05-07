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

  // Fetch data from the URL
  const response = await fetch(url1);
  const data = await response.json();
  
  return { dataResults: data.results };
}

async function fetchMovieDetails(nerdId) {
  const dataset = await fetchDataset();
  const nerdIdManipulation = nerdId - 1;
  return dataset.dataResults[nerdIdManipulation];
}

// Routes
app.get("/", async (req, res) => {
  try {
    const { dataResults } = await fetchDataset();
    res.render('pages/index', { dataResults });
  } catch (error) {
    console.error('Fetching movies failed:', error);
    res.status(500).send('Failed to fetch movies');
  }
});

// Detailpagina route
app.get("/nerd_detail/:id", async (req, res) => {
  try {
    const nerdId = req.params.id;
    const nerdData = await fetchMovieDetails(nerdId);

    res.render('pages/nerd_detail', { nerdData });
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

    res.render('pages/search_results', { title: "Resultaten", searchdataResults: searchWithDataImages, searchTerm });
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