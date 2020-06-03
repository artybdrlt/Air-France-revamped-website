$(document).ready(function(){
    $("#buttonSendContact").click(function() {
        console.log("coucou ma calotte !")
        $("#empty").html("Message bien envoyé !");
        $.post('http://62.210.7.82/site/b2/contact.php', 
        {
            name: 'Nom de Famille', 
            firstname: 'Prénom', 
            content: 'Contenu du message'
        }
        );
    });
})
