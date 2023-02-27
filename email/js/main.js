const myButton = document.querySelector("#btn")
myButton.addEventListener("click",
    function () {
        let email = document.getElementById("myemail").value;
        document.getElementById("myemail").innerHTML = email;

        const emailList = ["pippobaudo@sanremo.com", "fedeznonsocantà@leone.com", "paolodibala@magica.com", "cameracaffè@digitex.com", "duefantagenitori@pippo.com"]
        let puoAccedere = false;
        for (let i = 0; i < emailList.length; i++) {
            if (emailList[i] == email) {
                puoAccedere = true;
            }

        }

        if (puoAccedere == true) {
            document.getElementById("result").classList.add('green')
            document.getElementById("result").innerHTML="Puoi accedere!";

        } else {
            document.getElementById("result2").classList.add('red')
            document.getElementById("result2").innerHTML="Non puoi accedere!";
        }
    })