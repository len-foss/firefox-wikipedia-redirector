// Load the saved skin option
document.addEventListener('DOMContentLoaded', function() {
    browser.storage.sync.get({ skin: 'timeless', isEnabled: true, forceSkin: false }, function(items) {
    document.getElementById('skin').value = items.skin;
    document.getElementById('isEnabled').checked = items.isEnabled;
    document.getElementById('forceSkin').checked = items.forceSkin;
    });
});

// Save the skin option
document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const skin = document.getElementById('skin').value;
    const isEnabled = document.getElementById('isEnabled').checked;
    const forceSkin = document.getElementById('forceSkin').checked;
    browser.storage.sync.set({ skin: skin, isEnabled: isEnabled, forceSkin: forceSkin });
});

