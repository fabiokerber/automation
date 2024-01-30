System.log("HOSTNAME " + hostname)

var platform = "Linux"
var att_hostname = hostname.toLowerCase().split(".")[0]

if(branch == "develop" || branch.length == 0) {
    var environment = "DEV";
    var playbook_jobid_linux = dev_playbook_jobid_linux;
    branch = "master";
}

if(branch == "master"){
    var environment = "PRD";
    var playbook_jobid_linux = prd_playbook_jobid_linux;
}

System.log("ENVIO_SGL_VIA_VRO " + envio_sgl_via_vro)
System.log("BRANCH " + branch)