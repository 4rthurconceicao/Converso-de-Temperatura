

document.addEventListener("keydown", function (evento) {
    if (evento.keyCode === 13) {
        convert();
    }


})

function convert() {

    document.getElementById("temp-ratura").focus();
    let temp = document.getElementById('temp-ratura').value;
    let temp2 = document.getElementById('temp').value;
    let temp3 = document.getElementById('tempe2').value





    if (temp.trim() === "") {
        alert('Valor invalido')
    } else {
        temp = Number(temp)
    }



    if (temp2 === 'C' && temp3 === 'F') {
        let resultado = (temp * 9 / 5) + 32

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }

    } else if (temp2 === 'C' && temp3 === 'K') {
        let resultado = temp + 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(2);
        }

    } else if (temp2 === 'C' && temp3 === 'C') {
        document.getElementById('res').value = temp;
    }

    if (temp2 === 'F' && temp3 === 'C') {
        let resultado = (temp - 32) * 5 / 9

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }



    } else if (temp2 === 'F' && temp3 === 'K') {

        let resultado = (temp - 32) * 5 / 9 + 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }

    } else if (temp2 === 'F' && temp3 === 'F') {
        document.getElementById('res').value = temp
    }

    if (temp2 === 'K' && temp3 === 'C') {

        let resultado = temp - 273.15

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }
    } else if (temp2 === 'K' && temp3 === 'F') {

        let resultado = (temp - 273.15) * 9 / 5 + 32

        if (resultado % 1 === 0) {
            document.getElementById('res').value = resultado;
        } else {
            document.getElementById('res').value = resultado.toFixed(1);
        }
    } else if (temp2 === 'K' && temp3 === 'K') {
        document.getElementById('res').value = temp
    }

    let registro = {
        valor: resultado
    }


    let historico = JSON.parse(localStorage.getItem("historico")) || [];

    historico.push(registro);

    localStorage.setItem("historico", JSON.stringify(historico))

    let historico = JSON.parse(localStorage.getItem("historico")) || [];


    historico.forEach(item => {
        console.log(`${resultado}`)
    })



}

