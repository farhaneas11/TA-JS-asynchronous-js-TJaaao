function fetch(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = () => resolve(JSON.parse(xhr.response));
        xhr.onerror = () => reject('something happened');

        xhr.send();
    });
}

let data = fetch(`https://api.unsplash.com/search/photos?client_id=upkPuk0bSo9v6dUNxsk20sZ2vflEmIRRBRzdDyE8hso&page=1&query=small`)