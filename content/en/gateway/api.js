function makeRequest(){
    var request = new XMLHttpRequest();
    let seed = document.getElementById("seed").value;

    if (seed === null || seed === "") {
        return;
    }
    let count = document.getElementById("count").value;
    if (seed === null || seed === "") {
        request.open('GET', 'https://webhook.seedfinding.com/gateway/'+seed, true);
    }else{
        request.open('GET', 'https://webhook.seedfinding.com/gateway/'+seed+"/"+(count-1), true);
    }
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            document.getElementById("results").textContent=data
        } else {
            console.log('error')
        }
    };

    request.send();
}
