const API_KEY = 'Sge6uzhiEW+sDDX6NR+esA==sal0MxtCUkulmgcn'; // Replace with your actual API key
const API_URL = 'https://api.api-ninjas.com/v2/randomquotes'; // Example endpoint

document.querySelector('.quote-button')
  .addEventListener('click', () => {
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json' // Or other content type if required by the specific API
  }
};

fetch(API_URL, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.querySelector('.quote').innerHTML = data[0].quote
    // Process the data received from the API
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})