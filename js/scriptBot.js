const TOKEN = '5633139025:AAHDghDftlYUF74VwJ7MDesIGflyPZEf2q4';
const CHAD_ID = '-1001673147021';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('bot').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${this.phone.value}\n`;



    axios.post(URL_API, {
        chat_id: CHAD_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            this.phone.value = '';
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
           




        })
})