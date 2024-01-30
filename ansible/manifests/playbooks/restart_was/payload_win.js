if (servers_alerta.length == 0){
    servers_alerta = "";
}

var obj = {
    "extra_vars": {
        "hostname": host,
        "platform": platform,
        "profile_name": profile_name,
        "servers_alerta": servers_alerta,
        "was_install_location": was_install_location,
        "was_startup_cmd_windows": was_startup_cmd_windows,
        "optional_cmd_bath": optional_cmd_bath,
        "sigla": sigla
    },
    "limit": host,
    "scm_branch": branch
};