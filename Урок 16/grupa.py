import telebot
import os
from dotenv import load_dotenv


load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")
bot = telebot.TeleBot(TOKEN)


@bot.message_handler(content_types=['new_chat_members'])
def hanle_new_chat_member(message):
    for member in message.new_chat_members:
        if member.id == bot.get_me().id:
            chat_id = message.chat.id
            bot.send_message(message.from_user.id, f"ID этой {chat_id}")

bot.infinity_polling()