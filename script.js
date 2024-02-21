document.getElementById('form').addEventListener('submit' , (event) =>{
    event.preventDefault();

    const verificarNum = (valor) => {
        let regex = /^[01]+$/;
        if(regex.test(valor)){
            console.log(`Valor ${valor} é válido.`)
            let resultado = document.getElementById('resultado');
            let lista = [];
            let binario = conversao(valor, lista);
            mostraValor(binario, resultado)

        } else if( valor === ""){
            alert('Insira um valor válido.')
        }
        else{
            alert(`Valor digitado ${valor}, não é um valor válido.`)
            event.preventDefault();
        }
    }

    const conversao = (valor, lista) => {

        let base = 2;
        let cont = 0;
        let listaReversa = [];

        for(elemento of valor){
            lista.push(elemento)
        }

        for(let i = lista.length -1; i >= 0; i--){
            listaReversa.push(Math.pow(base, i))
        }
        
        for(let i = 0; i < lista.length; i++){
            cont += listaReversa[i] * lista[i];
        }

       return cont;
    }

    const mostraValor = (valor, resultado) => {
        resultado.innerText = "Resultado: " + valor;
        console.log("Resultado: " + valor)

    }

    let valor = document.getElementById('input').value;    
    verificarNum(valor);
    let resultado = document.getElementById('resultado');
    let lista = [];
    let binario = conversao(valor);
    mostraValor(binario, resultado)


})
