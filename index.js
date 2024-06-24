function display() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let time = hours + ":" + minutes + ":" + seconds;

    //Europe Format
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;
    let fullDate = day + "/" + month + "/" + year;

    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');

    h1.innerHTML = time;
    h2.innerHTML = fullDate;
    setTimeout(() => { display() }, 1000);
}