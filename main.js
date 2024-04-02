const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})

function convertCurrency() {
    var quantiaEmReais = parseFloat(document.getElementById('quantia').value);
    var taxaDeCambio = 5.05; 
    var quantiaEmDolaresAmericanos = quantiaEmReais / taxaDeCambio;
    var formattedDollars = quantiaEmDolaresAmericanos.toFixed(2);
    document.getElementById('resultado').innerText = formattedDollars;
}