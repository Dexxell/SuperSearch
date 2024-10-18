let searchEngineUrl = 'https://www.google.com/search?q='; // Default search engine

// Function to search the web using the selected search engine
document.getElementById('search-btn').addEventListener('click', function() {
  const query = document.getElementById('search-query').value.trim();
  if (query) {
    // Open search URL in the specified search engine
    const searchUrl = `${searchEngineUrl}${encodeURIComponent(query)}`;
    window.open(searchUrl, '_self'); // Open in the same tab
  } else {
    alert("Please enter a search query."); // Alert if the input is empty
  }
});

// Function to set the custom search engine
document.getElementById('set-engine').addEventListener('click', function() {
  const customUrl = document.getElementById('search-engine').value.trim();
  if (customUrl) {
    if (!customUrl.endsWith('search?q=')) {
      alert("Please ensure the custom URL ends with 'search?q='");
      return;
    }
    searchEngineUrl = customUrl;
    alert(`Search engine set to: ${customUrl}`);
    document.getElementById('search-engine').value = ''; // Clear input field
  } else {
    alert("Please enter a valid search engine URL."); // Alert if the input is empty
  }
});

// Quick access buttons for YouTube, Reddit, and GitHub
document.getElementById('youtube-btn').addEventListener('click', function() {
  window.open('https://www.youtube.com', '_blank');
});

document.getElementById('reddit-btn').addEventListener('click', function() {
  window.open('https://www.reddit.com', '_blank');
});

document.getElementById('github-btn').addEventListener('click', function() {
  window.open('https://www.github.com', '_blank');
});

// Other feature buttons
document.getElementById('images-btn').addEventListener('click', function() {
  window.open('https://images.google.com', '_blank');
});

document.getElementById('maps-btn').addEventListener('click', function() {
  window.open('https://maps.google.com', '_blank');
});

document.getElementById('news-btn').addEventListener('click', function() {
  window.open('https://news.google.com', '_blank');
});

// Change background color feature
document.getElementById('bg-btn').addEventListener('click', function() {
  const colors = ['#f4f4f4', '#e3f2fd', '#ffe0b2', '#dce775', '#ffccbc'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// To-Do List Functionality
document.getElementById('add-todo').addEventListener('click', function() {
  const todoInput = document.getElementById('todo-input').value;
  if (todoInput) {
    const li = document.createElement('li');
    li.innerText = todoInput;
    document.getElementById('todo-list').appendChild(li);
    document.getElementById('todo-input').value = '';
  }
});
