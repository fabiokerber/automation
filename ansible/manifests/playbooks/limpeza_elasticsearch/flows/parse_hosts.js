if(in_hostname && in_hostname.indexOf(",") != -1) {
    att_hosts = in_hostname.split(",").map(function(item) {
        return item.toLowerCase().trim()
    });
}

if(in_hostname && in_hostname.indexOf(",") == -1 && in_hostname.length > 0) {
    att_hosts = [];
    att_hosts.push(in_hostname.toLowerCase());
}

if(in_hostname_arr && in_hostname_arr.length > 0) {
    att_hosts = in_hostname_arr;
}

token_list = [];

//DETERMINA PARAMETROS DE INPUT EXTERNO
var in_options = new Properties();
in_options.put("att_envio_sgl_via_vro", att_envio_sgl_via_vro);
in_options.put("att_branch", att_branch);

System.log(in_options.get("att_envio_sgl_via_vro") + " VALOR att_envio_sgl_via_vro");
System.log(in_options.get("att_branch") + " VALOR att_branch");
System.log(att_hosts + " LISTA DE SERVIDORES ");