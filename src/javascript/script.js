
// pesquisar.addEventListener('click', busca)

function busca(){
    var texto = document.querySelector('#caixabusca').value
    var texto = String(texto).toLocaleLowerCase()
    var textoEspaco = texto.replace(/ /g,'-')
    var link = document.getElementById('link').href=`https://coinmarketcap.com/pt-br/currencies/${textoEspaco}/`
}

/* document.addEventListener("keypress",function(e){
    if (e.key === "Enter"){

        var btn = document.querySelector("#link")

        btn.click()
        
        console.log("Enter")

    }
});
 */

