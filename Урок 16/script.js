"use strict"

const telegram_bot_token = '8254727494:AAFMm5jPC9uUnapJLvHHORRQUiPSrx2VUm4';
const telegram_chat_id = '-3777803894';
const api = `https://api.telegram.org/bot${telegram_bot_token}/sendMessage`;

async function sendEmailTelegram(event) {
    event.preventDeafult()

    const form = event.target;
    const formBtn = document.querySelector('.form_button')
    const formSendResult = document.querySelector()
    formSendResult.textContent = '';

    const  {name, phone, problem} = Object.fromEntries(new FormData(from).entries)
    const text = `Заявка от ${name}! /n Телефон: ${phone} /n Краткое описание проблемы: ${problem}`

    try  {
        formBtn.textContent = 'Отправка...'
        const respone = await fetch(api, {
            method: 'POST',
            header:{
                'Content-Type' : 'application/jsons'
            },
            body: JSON.stringify({
                chat_id: telegram_chat_id,
                text,
            })
        });

        if (Response.ok){
            formSendResult.textContent = 'Спасибо за ашу заявку, мы связжемся с вами в ближайшее время.'
            form.reset()
        }
        else{
            throw new Error(Response.statusText)
        }
    }
    catch (error){
        console.error(error)
        formSendResult.textContent = 'Анкета не отправлена! Попрбуйте позжею.'
        formSendResult.style.color = 'red'
    }
    finally{
        formBtn.textContent = 'Отправитьы'
    }    
}