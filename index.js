const { Bot } = require("grammy");
const token = ''; // Bot Token

const bot = new Bot(token);

console.log('bot', bot)

bot.command('start', async (ctx) => {
    console.log('start in');
    try {
        const author = await ctx.getAuthor();
        console.log('1 author: ', author);
        console.log('2 ctx: ', ctx);
        ctx.reply('Click the button below to open the Web App:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Open mini App',
                            web_app: { url: 'https://hostname' }
                        }
                    ]
                ]
            }
        });
    } catch (error) {
        console.error('Error getting author:', error);
    }
});

bot.command('3rd', async (ctx) => {
    console.log('3rd in');
    try {
        const author = await ctx.getAuthor();
        console.log('1 author: ', author);
        console.log('2 ctx: ', ctx);
        ctx.reply('Click the button below to open the 3rd Web App:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Open thirdParty App',
                            web_app: { url: 'https://hostname' }
                        }
                    ]
                ]
            }
        });
    } catch (error) {
        console.error('Error getting author:', error);
    }
});

// error 
bot.catch((err) => {
    console.error('Bot error:', err);
});

// start
bot.start().then(() => {
    console.log('Bot started');
}).catch((err) => {
    console.error('Error starting bot:', err);
});
