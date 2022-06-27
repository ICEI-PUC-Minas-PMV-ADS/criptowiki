
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





function legenda(){
    var caixa = document.querySelector('.tooltip')
    var caixa2 = caixa.classList.toggle('tooltip2')
}

function legenda2(){
    var caixa = document.querySelector('.tooltip2')
    var caixa2 = caixa.classList.remove('tooltip2')
}

function legendaTemas(){
    var caixa = document.querySelector('.tooltip')
    var caixa2 = caixa.classList.toggle('tooltip3')
}

function legendaTemas2(){
    var caixa = document.querySelector('.tooltip3')
    var caixa2 = caixa.classList.remove('tooltip3')
}

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}


function comentar(){
    var comentario = document.getElementById('inputcomentario').value
    if(comentario.length > 0){
        var p = document.createElement('section')
    p.innerHTML = `<p>${comentario}</p>
    <p class="horario">Postado em: ${dataAtualFormatada()}</p>
    <hr>`
    document.getElementById('comentariospost').prepend(p)
    document.getElementById('inputcomentario').value=''
    }else{
        alert('Comentário inválido')
    }
    
}