document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.color-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        let message;
        if (btn.dataset.action === 'reset') {
            message = { action: 'reset' };
        } else {
            message = { action: 'changeColor', color: btn.dataset.color };
        }
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(
            tabs[0].id,
            message,
            response => console.log('BG-Changer response:', response)
          );
        });
      });
    });
  });
