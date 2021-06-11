const input = document.querySelector('input');
const profile = document.getElementsByClassName('profile');
const name = document.querySelector('h3');
const userid = document.querySelector('h6');

const catimg = document.getElementsByClassName('.catimage');
const button = document.querySelector('button');

//followers_url
//following_url
function displayUI(data){
    profile.src = data.avatar_url;
    name.inneText = data.name;
    userid.innerHTML = data.login;
}

function handleinput(event){
    console.log(event.keyCode);
    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/user/${event.target.value}`)
        xhr.onload = function (){
            let userData = JSON.parse(xhr.response);
            displayUI(userData);
        };
        xhr.onerror  =function (){
            console.log('Error found');
        }
        xhr.send();
        event.target.value = '';
    }
}
input.addEventListener('keyup',handleinput);


function handlecat(){
    let press = new XMLHttpRequest();
    press.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full');
    press.onload = function (){
        let data = JSON.parse(press.response);
        catimg.src = data.url;
    }
    press.onerror = function (){
        console.log('error found');
    }
    press.send();
}
button.addEventListener('click',handlecat);