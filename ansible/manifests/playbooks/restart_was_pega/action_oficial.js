var info_hosts = new Properties();
var config = new Object();

if (hostname == "srvbpoivlbr01"){
    config = {
        was_install_location: '/opt/IBM/websphere/AppServer_8.5.5',
        profile_name: 'PEGAHKNode01',
        jvm_servers: 'nodeagent,BPMHKPegaApp01,BPMHKPegaApp02' //pula BPMHKPegaApp05 na action stop
    }

} else if (hostname == "srvbpohalbr29"){
    config = {
        was_install_location: '/opt/IBM/Websphere/AppServer',
        profile_name: 'PEGAHKNode04',
        jvm_servers: 'nodeagent,BPMHKPegaApp09,BPMHKPegaApp10'
    }

} else {
    var info_hosts = "Sem informações para o hostname " + hostname; throw info_hosts
};

info_hosts.put("was_install_location", config.was_install_location);
info_hosts.put("profile_name", config.profile_name);
info_hosts.put("jvm_server", config.jvm_servers);

return info_hosts;