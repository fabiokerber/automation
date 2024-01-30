System.log("ACTION WAS INSTALL LOCATION " + info_hosts.get("was_install_location"));
System.log("ACTION PROFILE NAME " + info_hosts.get("profile_name"));
System.log("ACTION JVM SERVERS " + info_hosts.get("jvm_servers"));

// Validação automation_type
if (!automation_type) {
    att_automation_type = "ROBOTIZADA";
    att_was_install_location = was_install_location;
    att_profile_name = profile_name;
    var att_jvm_servers = jvm_servers;
} else {
    att_automation_type = automation_type;
    att_was_install_location = info_hosts.get("was_install_location");
    att_profile_name = info_hosts.get("profile_name");
    var att_jvm_servers = info_hosts.get("jvm_servers");
}

System.log("ATT_AUTOMATION_TYPE " + att_automation_type);
System.log("ATT_WAS_INSTALL_LOCATION " + att_was_install_location);
System.log("ATT_PROFILE_NAME " + att_profile_name);
System.log("ATT_JVM_SERVERS " + att_jvm_servers);

// Tratamento de variáveis
System.log(jvm_servers + "servers_alerta STRING - " + typeof jvm_servers);
if(jvm_servers != ""){
    servers_alerta = jvm_servers.split(","); //preparado para receber mais de uma JVM
} else {
    servers_alerta = [];
}
System.log(servers_alerta + "SERVERS_ALERTA ARRAY - " + typeof(servers_alerta));