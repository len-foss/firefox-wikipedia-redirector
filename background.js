browser.webRequest.onBeforeRequest.addListener(
    async function(details) {
        const url = new URL(details.url);
        const { skin, isEnabled, forceSkin } = await browser.storage.sync.get({ skin: 'timeless', isEnabled: true, forceSkin: false });

        if (!isEnabled) {
            return;
        }

        // Redirect to the non-mobile version if mobile link is detected
        if (url.hostname.startsWith('m.')) {
            url.hostname = url.hostname.replace('m.', '');
        }

        // Check if the skin is already set
        if (forceSkin || !url.searchParams.has('useskin')) {
            const { skin } = await browser.storage.sync.get({ skin: 'timeless' });
            url.searchParams.set('useskin', skin);
        }
        const newUrl = url.toString();
        if (newUrl !== details.url) {
            return { redirectUrl: newUrl };
        }
    },
    { urls: ["*://*.wikipedia.org/wiki/*"] },
    ["blocking"]
);