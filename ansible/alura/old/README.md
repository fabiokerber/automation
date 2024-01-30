# 1.Alura

### Ansible & Vagrant
<br />

**Atenção**

```
hosts

handlers > playbook
template > playbook
templates/<file>.j2 (substitui as chaves conforme as vars)

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