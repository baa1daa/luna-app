const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add('active');
}

document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('chatInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    
    addMessage(text, 'user');
    input.value = '';
    
    tg.sendData(JSON.stringify({ action: 'chat', message: text }));
}

function addMessage(text, type) {
    const container = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.className = `message ${type}`;
    msg.innerHTML = `<div class="msg-content">${text}</div>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

const user = tg.initDataUnsafe?.user || { username: 'Гость' };
document.getElementById('userName').textContent = user.username || 'Гость';

console.log('🌙 LUNA Mini App загружена!');