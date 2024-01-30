// Tratamento de variáveis
System.log(jvm_servers + "servers_alerta STRING - " + typeof jvm_servers);
if(jvm_servers != ""){
    servers_alerta = jvm_servers.split(","); //preparado para receber mais de uma JVM
} else {
    servers_alerta = [];
}
System.log(servers_alerta + "SERVERS_ALERTA ARRAY - " + typeof(servers_alerta));