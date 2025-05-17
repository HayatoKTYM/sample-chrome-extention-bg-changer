let originalColor = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (originalColor === null) {
        const computed = window.getComputedStyle(document.body).backgroundColor;
        originalColor = computed || '';
        console.log('[BG-Changer] originalColor saved:', originalColor);
    }
    if (message.action === 'changeColor') {
        document.body.style.backgroundColor = message.color;
        sendResponse({ status: 'done' });
    } else if (message.action === 'reset') {
        document.body.style.backgroundColor = originalColor;
        sendResponse({ status: 'reset', color: originalColor });
  }
});
