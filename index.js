function convert() {
    let temp = document.getElementById('temp-ratura').value;
    let temp2 = document.getElementById('temp').value;
    let temp3 = document.getElementById('tempe2').value
    
   
  
     if(temp.trim() === "") {
        alert('Valor invalido')
     } else{
       temp = Number(temp)
     } 

      
     
     if(temp2 === 'C' && temp3 === 'F') {
        document.getElementById('res').value =(temp.toFixed(2)) * 9/5 + 32 ;

    } else if (temp2 === 'C' && temp3 === 'K') {
        
        document.getElementById('res').value = temp.toFixed(2) + 273.15;
    } else if (temp2 === 'C' && temp3 === 'C') {
        document.getElementById('res').value = temp;
    }

    if (temp2 === 'F' && temp3 === 'C') {
        document.getElementById('res').value = (temp.toFixed(2) - 32) * 5/9;
    } else if (temp2 === 'F' && temp3 === 'K') {
     document.getElementById('res').value = (temp.toFixed(2) - 32) * 5/9 + 273.15;
    } else if (temp2 === 'F' && temp3 === 'F') {
        document.getElementById('res').value = temp
    }

     if (temp2 === 'K' && temp3 === 'C') {
        document.getElementById('res').value = temp.toFixed(2) = 213,15
    } else if (temp2 === 'K' && temp3 === 'F') {
        document.getElementById('res').value = (temp.toFixed(2) - 273.15) * 9/5 + 32
    } else if (temp2 === 'K' && temp3 === 'K') {
        document.getElementById('res').value = temp
    }


    










   








}