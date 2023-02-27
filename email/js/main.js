let email= prompt("Inserisci la tua email");

const emailList = ["pippobaudo@sanremo.com","fedeznonsocantà@leone.com","paolodibala@magica.com", "cameracaffè@digitex.com","duefantagenitori@pippo.com"]
let puoAccedere= false;

for (let i=0; i < emailList.length; i++){
    if (emailList[i]==email){
        puoAccedere=true;
    }
       
    }

    if(puoAccedere==true){
        console.log("Puoi accedere!")

    }else{
        console.log("non puoi accedere!")
    }