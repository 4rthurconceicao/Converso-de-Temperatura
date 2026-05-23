

document.addEventListener("keydown", function (evento) {
    if (evento.keyCode === 13) {
        convert();
    }


})

function convert() {

    document.getElementById("temp-ratura").focus();
    let tempeRatura = document.getElementById('temp-ratura').value;
    let grau1 = document.getElementById('temp').value;
    let grau2 = document.getElementById('tempe2').value

    
    
 

    if (tempeRatura.trim() === "") {
        document.getElementById('res').value = '';
        alert('Valor invalido')
        return;
    } else {
        tempeRatura = Number(tempeRatura)

    }

    let resultado;

    if (grau1 === 'C' && grau2 === 'F') {
         resultado = (tempeRatura * 9 / 5) + 32

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }

    } else if (grau1 === 'C' && grau1 === 'K') {
         resultado = tempeRatura + 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(2);
        }

    } else if (grau1 === 'C' && grau1 === 'C') {
        document.getElementById('res').value = tempeRatura;
    }

    if (grau1 === 'F' && grau1 === 'C') {
        resultado = (tempeRatura - 32) * 5 / 9

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }



    } else if (grau1 === 'F' && grau2 === 'K') {

         resultado = (tempeRatura - 32) * 5 / 9 + 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }

    } else if (grau1 === 'F' && grau2 === 'F') {
        document.getElementById('res').value = tempeRatura
    }

    if (grau1 === 'K' && grau2 === 'C') {

         resultado = tempeRatura - 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }
    } else if (grau1 === 'K' && grau2 === 'F') {

         resultado = (tempeRatura - 273.15) * 9 / 5 + 32

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }
    } else if (grau1 === 'K' && grau2 === 'K') {
        document.getElementById('res').value = tempeRatura
    }
    

        let registro = {
             resultado:resultado
        }

        let historico = JSON.parse(localStorage.getItem("historico")) || [];

        historico.push(registro);

        localStorage.setItem("historico", JSON.stringify(historico));


        console.log(historico);


        function clear(){
            localStorage.removeItem("historico");

            document.getElementById('res').value = "";

            console.log("historico limpo")
        }

}





