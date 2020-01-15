var bPrenom = false;
var bNom = false;
var bNumOuEmail = false;
var bNumOuEmailC = false;
var bPassword = false;
var bJour = false;
var bMois = false;
var bAnnee = false;
var bDate = false;
var bSexe = false;

var prenom = $("#js-prenom")
var nom = $("#js-nom")
var numOuEmail = $("#js-reg-num-ou-mail")
var confirmNumOuMail = $("#js-reg-num-ou-mail-confirmation")
var mdp = $("#js-reg-password")
var jourNaiss = $("#js-jour-naissance");
var moisNaiss = $("#js-mois-naissance");
var anNaiss = $("#js-an-naissance");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

function correct(_domElement) {
    _domElement.removeClass("incorrect");
    _domElement.addClass("correct");
}

function incorrect(_domElement) {
    _domElement.removeClass("correct");
    _domElement.addClass("incorrect");
}

function envoyer() {
    if (bJour && bMois && bAnnee) { bDate = true; } else { bDate = false; }
    if (bPrenom && bNom && bNumOuEmail && bNumOuEmailC && bPassword && bDate && bSexe) {
        // $("#inscription").submit();
        alert("Envoi au serveur");
    }
    else {
        alert("Le formulaire n'est pas complet");
    }

}



// Contôle du prénom


prenom.keyup(function () {
    if (prenom.val().length > 1) {
        bPrenom = true;
        correct(prenom);
    } else {
        bPrenom = false;
        incorrect(prenom);
    }
    if (prenom.val().match(numbers)) {
        bPrenom = false;
        incorrect(prenom);
    }
});

// Contrôle du nom


nom.keyup(function () {
    if (nom.val().length > 1) {
        bNom = true;
        correct(nom);
    } else {
        bNom = false;
        incorrect(nom);
    }
    if (nom.val().match(numbers)) {
        bNom = false;
        incorrect(nom);
    }
});

// Contrôle du n° ou email


// I/ Contrôle du n° mobile
var bNum = false;
numOuEmail.keyup(function () {
    if (isNaN(numOuEmail.val())) {
        bNum = false;
    } else if (numOuEmail.val().length === 10) {
        bNum = true;
    } else {
        bNum = false;
    }
});

// II/ Contrôle du mail
var bMail = false;


numOuEmail.keyup(function () {
    if (mailformat.test(numOuEmail.val())) {
        bMail = true;
    } else {
        bMail = false;
    }
});

// III/ Synthèse

numOuEmail.keyup(function () {
    if (bMail || bNum) {
        bNumOuEmail = true;
        correct(numOuEmail);
    } else {
        bNumOuEmail = false;
        incorrect(numOuEmail);
    }
    if (confirmNumOuMail.val() === numOuEmail.val()) {
        bNumOuEmailC = true;
        correct(confirmNumOuMail);
    } else {
        bNumOuEmailC = false;
        incorrect(confirmNumOuMail);
    }
    if (numOuEmail.val().length === 0) {
        incorrect(confirmNumOuMail);
    }
});

// Contrôle de la confirmation du n° ou email



confirmNumOuMail.keyup(function () {
    if (confirmNumOuMail.val() === numOuEmail.val()) {
        bNumOuEmailC = true;
        correct(confirmNumOuMail);
    } else {
        bNumOuEmailC = false;
        incorrect(confirmNumOuMail);
    }
    if (bNumOuEmail === false) {
        bNumOuEmailC = false;
        incorrect(confirmNumOuMail);
    }
});


// Contrôle du mot de passe

// I. Contrôle des minuscules

var bLower = false;

mdp.keyup(function () {
    if (mdp.val().match(lowerCaseLetters)) {
        bLower = true;
    } else {
        bLower = false;
    }
});

// II. Contrôle des majuscules

var bUpper = false;

mdp.keyup(function () {
    if (mdp.val().match(upperCaseLetters)) {
        bUpper = true;
    } else {
        bUpper = false;
    }
});

// III. Contôle des chiffres
var bNumbers = false;

mdp.keyup(function () {
    if (mdp.val().match(numbers)) {
        bNumbers = true;
    } else {
        bNumbers = false;
    }
});

// IV. Contrôle de la longueur
var bLength = false;

mdp.keyup(function () {
    if (mdp.val().length > 7) {
        bLength = true;
    } else {
        bLength = false;
    }
});

//Synthèse

mdp.keyup(function () {
    if (bLower && bUpper && bNumbers && bLength) {
        bPassword = true;
        correct(mdp);
    } else {
        bPassword = false;
        incorrect(mdp);
    }
})


// Contrôle de la date de naissance


jourNaiss.change(function () {
    if (this.value > 0) {
        bJour = true;
        correct(jourNaiss);
    } else {
        bJour = false;
        incorrect(jourNaiss);
    }
});
moisNaiss.change(function () {
    if (this.value > 0) {
        bMois = true;
        correct(moisNaiss);
    } else {
        bMois = false;
        incorrect(moisNaiss);
    }
});
anNaiss.change(function () {
    if (this.value > 0) {
        bAnnee = true;
        correct(anNaiss);
    } else {
        bAnnee = false;
        incorrect(anNaiss);
    }
});

// Contrôle du sexe

$("#js-sexe-f").click(function () {
    bSexe = true;
});
$("#js-sexe-m").click(function () {
    bSexe = true;
});

// Envoyer

$("#reg-btn").click(envoyer);





////////////////Connexion///////////////////////

var loginBtn = $("#js-login");
var loginNumOuMail = $("#js-log-num-ou-mail");
var loginPassword = $("#js-log-password");

loginBtn.click(function () {
    if ((mailformat.test(loginNumOuMail.val()) || (isNaN(loginNumOuMail.val()) === false && loginNumOuMail.val().length === 10)) && (loginPassword.val().length > 7 && loginPassword.val().match(lowerCaseLetters) && loginPassword.val().match(upperCaseLetters) && loginPassword.val().match(numbers))) {
        alert("Connexion");
    } else {
        alert("Vérifier mail ou mot de passe")
    }

})