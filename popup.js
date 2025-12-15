document.addEventListener('DOMContentLoaded', () => {
    
    localizeHtml();

    
    chrome.storage.local.get(['policy'], (result) => {
        const currentPolicy = result.policy || 'disable_non_proxied_udp';
        updateUI(currentPolicy);
    });

    document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', () => {
            const policy = el.getAttribute('data-val');
            chrome.storage.local.set({ policy: policy });
            chrome.runtime.sendMessage({ action: "updatePolicy", policy: policy }, () => {
                updateUI(policy);
                
                const successMsg = chrome.i18n.getMessage("statusUpdated");
                showStatus(successMsg);
            });
        });
    });
});


function localizeHtml() {
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        const msg = chrome.i18n.getMessage(key);
        if (msg) {
            element.textContent = msg;
        }
    });
}

function updateUI(activePolicy) {
    document.querySelectorAll('.option').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-val') === activePolicy) {
            el.classList.add('active');
        }
    });
}

function showStatus(msg) {
    const status = document.getElementById('status');
    status.textContent = msg;
    status.style.opacity = 1;
    setTimeout(() => {
        status.style.opacity = 0;
    }, 2000);
}