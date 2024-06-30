document.getElementById('add-button').addEventListener('click', () => {
    const websiteInput = document.getElementById('website-input').value;
    if (websiteInput) {
        // Add logic to save to blocklist
        const list = document.getElementById('blocklist');
        const listItem = document.createElement('li');
        listItem.textContent = websiteInput;
        list.appendChild(listItem);
        document.getElementById('website-input').value = '';
    }
});

document.getElementById('toggle-extension').addEventListener('click', () => {
    // Add logic to enable/disable the extension
    alert('Toggle extension functionality!');
});

