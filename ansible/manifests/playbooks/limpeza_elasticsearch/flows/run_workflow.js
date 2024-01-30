//PARTE DO CÓDIGO
var workflowParameters = new Properties();
workflowParameters.put("hostname",att_hosts[counter]);
if(in_options) {
    workflowParameters.put("in_options", in_options);
    if(in_options.get("att_envio_sgl_via_vro")) {
        workflowParameters.put("att_envio_sgl_via_vro",in_options.get("att_envio_sgl_via_vro"));
    }
    if(in_options.get("att_branch")) {
        workflowParameters.put("att_branch",in_options.get("att_branch"));
    }
}