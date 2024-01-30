# 1.Alura

### Ansible & Vagrant
<br />

**Atenção**

```
hosts

roles/{mysql,webserver,wordpress}/handlers/main.yml
roles/{mysql,webserver,wordpress}/tasks/main.yml
roles/{mysql,webserver,wordpress}/defaults/main.yml (valores default + o que for setada por exemplo no group_vars/database.yml e não quebra o código caso o valor nao tenha sido informado no group_vars)

template > playbook
roles/wordpress/templates/<file>.j2 (substitui as chaves conforme as vars)

roles/wordpress/meta/main.yml (aqui define que a role wordpress depende primeiro da execução da role webserver)

group_vars/all.yml (todos grupos)
group_vars/database.yml (grupo database conforme hosts)
group_vars/wordpress.yml (grupo wordpress conforme hosts)
```
<br />


|Tools      |Links/Tips|
|-------------|-----------|
|`Ansible Database modules Vagrant Downloads`| https://docs.ansible.com/ansible/2.6/modules/list_of_database_modules.html
|`Ansible Variables`| https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#what-makes-a-valid-variable-name
|`Jinja2`| https://palletsprojects.com/p/jinja/