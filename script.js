// API Key
var apiky = {
    key: 'INSIRA A API KEY AQUI'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiky.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
    .then((api) => {

var texto = "";
// 7 moedas e símbolos
for(let i = 0; i < 7; i++) {

// API INFO
                texto = texto + `
                
                <div class="media">
                    <img src="img/coin.png" class="align-self-center mr-3" alt="coin" width="60" height="60">
                    <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>symbol: ${api.data[i].symbol}</p>
                    <p>Primeira data histórica: ${api.data[i].first_historical_data}</p>
                    </div>
                </div>

                `;

                document.getElementById("coins").innerHTML = texto;
                
                }
            })

.catch((error) => {
    console.error(error.message);
});

/* Gerar resposta da API: extensão Moesif Orign & CORS Changer pelo navegador */