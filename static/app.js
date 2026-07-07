const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// ===== НАВИГАЦИЯ =====
function navigateTo(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Показываем нужный
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add('active');
    
    // Обновляем активный пункт навигации
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screenId);
    });
}

// ===== ВЫБОР ПЕРСОНАЖА =====
function selectGirl(name) {
    const names = {
        alisa: 'Алиса',
        milana: 'Милана',
        sofia: 'Софи',
        nika: 'Ника',
        vega: 'Вега'
    };
    
    const displayName = names[name] || name;
    tg.sendData(JSON.stringify({ action: 'select_girl', girl: name }));
    tg.showAlert(`✨ Ты выбрал ${displayName}!`);
}

// ===== ОБРАБОТКА ВХОДНЫХ ДАННЫХ =====
tg.onEvent('mainButtonClicked', () => {
    console.log('Main button clicked');
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
console.log('🌙 LUNA Space запущена!');
console.log('👩‍🚀 5 сестёр готовы к знакомству');