document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({
        schoolSelection: 'none'
      }, (items) => {
        document.querySelector('iframe').src = `https://supportwell.netlify.app/?district=${items.schoolSelection}`;
      })
});