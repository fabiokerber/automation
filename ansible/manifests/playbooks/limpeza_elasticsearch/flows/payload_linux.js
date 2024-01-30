var host = hostname.toLowerCase().split(".")[0];
var playbook_jobid = playbook_jobid_linux

var obj = {
    "extra_vars": {
        "hostname": host,
        "platform": platform,
        "days": days,
    },
    "limit": host,
    "scm_branch": branch
};

payload = JSON.stringify(obj);

att_ansible_options = new Properties();
att_ansible_options.put("ADD_HOST_TO_ADHOC", true);
att_ansible_options.put("ANSIBLE_RAW_RESPONSE", true);