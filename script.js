var btn1 = document.querySelector("#submit__button1");
var btn1v = {};
btn1.addEventListener("click", function(e){

    e.preventDefault();

    var sn = document.querySelector("#senior-name");
    var snv = sn.value;
    
    var sbd = document.querySelector("#senior-birth-date");
    var sbdv = sbd.value;

    var sha = document.querySelector("#senior-home-address");
    var shav = sha.value;
    
    // mudar estado css     
    const element1 = document.querySelector('.senior__personalData');
    element1.style.display="none"

    const element2 = document.querySelector('.senior__medicalData');
    element2.style.display="inline-block"


    var result = {
        nameSenior: snv,
        birthDate: sbdv,
        adress: shav
    }
    
    btn1v = result;
    return result;
});


var btn2 = document.querySelector("#submit__button2");
var btn2v = {};
btn2.addEventListener("click", function(e){

    e.preventDefault();

    var spi = document.querySelector("#senior-prevIllnesses");
    var spiv = spi.value;
    
    var sa = document.querySelector("#senior-allergies");
    var sav = sa.value;

    var sb = document.querySelector("#senior-blood");
    var sbv = sb.value;
    
    // mudar estado css     
    const element3 = document.querySelector('.senior__medicalData');
    element3.style.display="none"

    const element4 = document.querySelector('.responsible__personalData');
    element4.style.display="inline-block"


    var result = {
        illnesses: spiv,
        allergies: sav,
        bloodType: sbv
    }
    
    btn2v = result;
    return result;
});

var btn3 = document.querySelector("#submit__button3");
var btn3v = {};
btn3.addEventListener("click", function(e){

    e.preventDefault();

    var rn = document.querySelector("#responsible-name");
    var rnv = rn.value;
    
    var rp1 = document.querySelector("#responsible-phone1");
    var rp1v = rp1.value;

    var rp2 = document.querySelector("#responsible-phone2");
    var rp2v = rp2.value;

    var re = document.querySelector("#responsible-email");
    var rev = re.value;
    
    // mudar estado css     
    const element5 = document.querySelector('.responsible__personalData');
    element5.style.display="none"

    const element6 = document.querySelector('.button-help__section');
    element6.style.display="inline-block"


    var result = {
        nameResponsible: rnv,
        phoneNumber1: rp1v,
        phoneNumber2: rp2v,
        email: rev
    }
    
    btn3v = result;
    return result;
});

var btnH = document.querySelector("#submit__buttonH");
var btnHv = {};
btnH.addEventListener("click", function(e){

    e.preventDefault();

    // Disparar som de alerta
    
    // mudar estado css     
    const element7 = document.querySelector('.button-help__section');
    element7.style.display="none"

    const element8 = document.querySelector('.options-info__div');
    element8.style.display="inline-block"
    
});

// -----------------------------------------------------------------------------

var btnHR = document.querySelector("#help-r");
var btnHRv = {};
btnHR.addEventListener("click", function(e){

    e.preventDefault();

    // Tratamento da mensagem
    var text = ( "Meu nome é " + btn1v.nameSenior + ".<br>" +
                "<br>Por favor chame,<br> " + btn3v.nameResponsible +
                "<br>que é meu contato de emergência.<br>" +
                "<br>Telefone 1: " + btn3v.phoneNumber1 + "<br>" +
                "<br>Telefone 2: " + btn3v.phoneNumber2 + "<br>" +
                "<br>Email: " + btn3v.email
    )
    document.getElementById("msg").innerHTML = text;
    // mudar estado css     
    const element9a = document.querySelector('.options-info__div');
    element9a.style.display="none"

    const element10a = document.querySelector('.help-msg__div');
    element10a.style.display="inline-block"
    
});

var btnHP = document.querySelector("#help-p");
var btnHPv = {};
btnHP.addEventListener("click", function(e){

    e.preventDefault();

    // Tratamento da mensagem
    
    var text = ( "Doenças Prévias:<br>" + btn2v.illnesses + "<br>" +
                "<br>Alergias:<br>" + btn2v.allergies + "<br>" +
                "<br>Tipo Sanguíneo:<br>" + btn2v.bloodType
    )
    document.getElementById("msg").innerHTML = text;

    // mudar estado css     
    const element9b = document.querySelector('.options-info__div');
    element9b.style.display="none"

    const element10b = document.querySelector('.help-msg__div');
    element10b.style.display="inline-block"
    
    
});

var btnHS = document.querySelector("#help-s");
var btnHSv = {};
btnHS.addEventListener("click", function(e){

    e.preventDefault();

    // Tratamento da mensagem
    var text = ( "Nome:<br>" + btn1v.nameSenior + "<br>" +
                "<br>Data de Nascimneto:<br>" + btn1v.birthDate + "<br>" +
                "<br>Endereço:<br>" + btn1v.adress
    )
    document.getElementById("msg").innerHTML = text;

    // mudar estado css     
    const element9c = document.querySelector('.options-info__div');
    element9c.style.display="none"

    const element10c = document.querySelector('.help-msg__div');
    element10c.style.display="inline-block"
    

});

// Return Button -----------------------------------------------------

var btnRR = document.querySelector("#rr");
btnRR.addEventListener("click", function(e){

    e.preventDefault();

    const element9rr = document.querySelector('.options-info__div');
    element9rr.style.display="inline-block"

    const element10rr = document.querySelector('.help-msg__div');
    element10rr.style.display="none"
    

});

// Boolean

let seniorPersonalDataBoolean = false;
var f1b = seniorPersonalDataBoolean;

let seniorMedicalDataBoolean = false;
var f2b = seniorMedicalDataBoolean;

let responsiblePersonalDataBoolean = false;
var f3b = responsiblePersonalDataBoolean;

function formBreadcrumbChecking(bread1, bread2, bread3) {

    var spf = cbtn(bread1);
    var smf = cbtn(bread2);
    var rpf = cbtn(bread3);

    if ((spf + smf + rpf) == 3) {
        return true;
    } else {
        return false;
    }

}
var fbc = formBreadcrumbChecking;

function convertingBooleanToNumber(boolean) {

    if (boolean == true) {
        return 1;
    } else {
        return 0;
    }

}
var cbtn = convertingBooleanToNumber;

var fullFormCompleted = fbc(f1b, f2b, f3b);
var ffc = fullFormCompleted;
