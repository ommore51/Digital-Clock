const clock = () => {
    let time = new Date();
    a = time.getHours();
    b = time.getMinutes();
    c = time.getSeconds();

    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (a == 0) {
        a = 12;
    }
    if (a > 12) {
        a = a - 12;
        document.getElementById('ampm').innerText = 'PM'
    }

    hours.innerText = a;
    minutes.innerText = b;
    seconds.innerText = c;

}
setInterval(clock, 1000);


const wake = document.getElementById("wake-up");
const lunch = document.getElementById("lunch");
const nap = document.getElementById("nap");
const night = document.getElementById("night");


const first = document.getElementById("timings-first");
const second = document.getElementById("timings-second");
const third = document.getElementById("timings-third");
const fourth = document.getElementById("timings-fourth");


const btn = () => {
    first.innerText = wake.options[wake.selectedIndex].text;
    second.innerText = lunch.options[lunch.selectedIndex].text;
    third.innerText = nap.options[nap.selectedIndex].text;
    fourth.innerText = night.options[night.selectedIndex].text;

    let unitime = new Date().getHours();
    let i = wake.value;
    let j = lunch.value;
    let k = nap.value;
    let l = night.value;



    if (i == unitime) {
        document.getElementById("d-image").style.backgroundImage = "url(./wakeupimg.svg)";
        document.querySelector('#message').innerText = 'GOOD MORNING! WAKE UP!';
        document.querySelector('#right-msg').innerText = 'GRAB SOME HEALTHY BREAKFAST!!!';
    }
    if (j == unitime) {
        document.getElementById("d-image").style.backgroundImage = "url(./lunchimg.svg)";
        document.querySelector('#message').innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
        document.querySelector('#right-msg').innerText = 'LETS HAVE SOME LUNCH !!';
    }
    if (k == unitime) {
        document.getElementById("d-image").style.backgroundImage = "url(./napimg.png)";
        document.querySelector('#message').innerText = 'GOOD EVENING !!';
        document.querySelector('#right-msg').innerText = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!';
    }
    if (l == unitime) {
        document.getElementById("d-image").style.backgroundImage = "url(./nightimg.svg)";
        document.querySelector('#message').innerText = 'GOOD NIGHT !!';
        document.querySelector('#right-msg').innerText = 'CLOSE YOUR EYES AND GO TO SLEEP';
    }

    if (i != unitime && j != unitime && k != unitime && l != unitime) {
        document.getElementById("d-image").style.backgroundImage = "url(./party.png)";
        document.querySelector('#message').innerText = 'Party Time!';
        document.querySelector('#right-msg').innerText = 'Lets Party !!!';
    }
}