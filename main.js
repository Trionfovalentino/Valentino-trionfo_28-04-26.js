let voto_numerico = Number(prompt("Inserisci il voto:")); 

if (voto_numerico < 18) 
    { console.log("insufficiente"); 

    } else if (voto_numerico >= 18 && voto_numerico < 21) 
        { console.log("sufficiente"); 

    } else if (voto_numerico >= 21 && voto_numerico < 24)

    {
        console.log("buono"); 

     } else if (voto_numerico >= 24 && voto_numerico < 27)

    {
        console.log("distinto"); 
     }  else if (voto_numerico >= 27 && voto_numerico < 29) 

    {
         console.log("ottimo"); 

     } else if (voto_numerico = 30) 

    {
         console.log("eccellente"); 
     }

