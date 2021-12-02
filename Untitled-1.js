let buutton = document.getElementById('button');
let output = document.getElementById('outputtexte');
let count =0;
let number =Math.floor(Math.random()*100)
console.log(number)             
buutton.addEventListener('click', function(){
    count++;
    console.log(count)
     let input = document.getElementById("input").value;
     if (input==number && count <=2) {
    
        output.innerHTML ='Bravo, vous etes un Génie :'+count;
     } else if (input < number ){

        output.innerHTML = 'un peu plus petit:'+count;
     }
     if (input > number){ 
         output.innerHTML = 'un peu plus grand :'+count;

     } else if (count>=3 && count<10 && input==number){ output.innerHTML= 'Félicitations, vous avez gagné après :'+count;

     } else if (count>=10){ output.innerHTML ='c\'est raté';
            buutton.disabled =true;

                 


     }


});