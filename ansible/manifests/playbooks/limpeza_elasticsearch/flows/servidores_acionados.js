//ATRIBUICAO DO VALOR PARA A VARIAVEL DAYS CONFORME O HOSTNAME
if(att_hostname == "serv01" || att_hostname == "serv02"){
    var days = '1';
    var target = "TZ";
}

if(att_hostname == "serv03" || att_hostname == "serv04"){
    var days = '3';
    var target = "AZ";
}