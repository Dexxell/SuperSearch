document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: searchUrl });
    }
  });
  
  document.getElementById('images-btn').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://images.google.com' });
  });
  
  document.getElementById('maps-btn').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://maps.google.com' });
  });
  
  document.getElementById('news-btn').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://news.google.com' });
  });
  