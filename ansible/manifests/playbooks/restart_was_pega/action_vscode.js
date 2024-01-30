let config = new Object();
let hostname = "srvbpoivlbr01";
let att_was_install_location;
let att_profile_name;
let att_jvm_servers;

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

console.log(`CONFIG WAS_INSTALL_LOCATION: ${info.was_install_location}`);
console.log(`CONFIG PROFILE_NAME: ${info.profile_name}`);
console.log(`CONFIG JVM_SERVERS: ${info.jvm_servers}`);

att_was_install_location = info.was_install_location;
att_profile_name = info.profile_name;
att_jvm_servers = info.jvm_servers;

console.log(`CONFIG ATT_WAS_INSTALL_LOCATION: ${att_was_install_location}`);
console.log(`CONFIG ATT_PROFILE_NAME: ${att_profile_name}`);
console.log(`CONFIG ATT_JVM_SERVERS: ${att_jvm_servers}`);