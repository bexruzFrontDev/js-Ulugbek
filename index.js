const fullDay = document.querySelector('#full-day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function clock() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth()+1;
    let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();

    let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

    fullDay.textContent = `${day} . ${month} . ${year}`;
    hour.textContent = `${hours}`;
    minute.textContent = `${minutes}`;
    second.textContent = `${seconds}`;
}

setInterval(() => {
    clock();
},1000)
