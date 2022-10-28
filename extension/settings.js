function update() {
    var schoolSelection = document.querySelector('select').value;
    chrome.storage.sync.set({ schoolSelection }, () => {});
}

function restore() {
    chrome.storage.sync.get({
        schoolSelection: 'none',
    }, (items) => {
        document.querySelector('select').value = items.schoolSelection;
    })
}

document.addEventListener('DOMContentLoaded', restore)
document.querySelector('select').addEventListener('change', update)