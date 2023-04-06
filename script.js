const fonts = ['sans-serif','monospace','cursive','Arial','Verdana','Tahoma','times new roman','brush script mt', 'georgia','garamond'];

document.getElementById("kanye").addEventListener("click", function(event) {
    event.preventDefault();
    const url = 'https://api.kanye.rest';
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json){
            let rand = parseInt((Math.random()*10));
            let newQuote = json.quote;
            document.getElementById('quote').textContent = newQuote;
            document.getElementById('quote').style.fontWeight = 'normal';
            document.getElementById('quote').style.fontFamily = fonts[rand];
        });
});
