// Replace the old query configuration lines inside your script tag with this:
const userQuery = document.getElementById('searchInput').value.trim();

// This line safely opens up the global parameters so Google doesn't return a blank array
const cleanQuery = encodeURIComponent(userQuery + " chords");
const apiEndpoint = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_CX}&q=${cleanQuery}`;