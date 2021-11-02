let choix;
let nombreA;
let nombreB;
let total;
let restart ; 

function addition(nombre1, nombre2 ) {
   
    return nombre1 + nombre2;
}

function soustration(nombre1, nombre2) {

    return nombre1 - nombre2;
    
}

function multiplication(nombre1, nombre2) {

    return nombre1 * nombre2;
    
}

function division(nombre1, nombre2) {

    if(nombre2 == 0) {
        alert("Impossible de diviser par 0");
    }

    else{
        return nombre1 / nombre2;
    }   
}


do {  

    do{
    
        choix = Number(prompt("entrez vortre choix \n \n  1: addition \n 2: soustartion   \n 3: mutiplication  \n 4: division"));

    }while(choix != 1  && choix != 2  && choix != 3  && choix != 4){
        
    }



    do{

        nombreA = Number(prompt("entrez un premier chiffre a calcullez"))
        nombreB = Number(prompt("entrez un deuxieme chiffre a calcullez"))

    }while (isNaN(nombreA) || isNaN(nombreB)) 
        



    try{
        switch (choix) {
            case 1:
                total = addition(nombreA, nombreB);
                break;
            
            case 2:
                total = soustration(nombreA, nombreB);
                break;

            case 3:
                total = multiplication(nombreA, nombreB);
                break;
            
            case 4:
                total = division(nombreA, nombreB);
                break;
            
            default:
                throw new Error("tu c'est pas lire ou quoi ?");

        }

        alert(" résultat : " + total);
    }

    catch(ereur){
        alert("ereur");
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?");
  
} while(restart){

}
