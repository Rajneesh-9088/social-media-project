# Social Media Simple Project


## Database Setup


```shell
$  mysql -u root
```
```mysql
create database cbsocialmediadb1;

create user cbsocialuser1 identified with mysql_native_password by 'cbsocialpass1';

grant all privileges on cbsocialmediadb1.*to 
cbsocialuser1;

flush privileges;
```
## Project Structure

```shell

src
---> controlers    # functions to connect routes to db operations
---> db            # db connection and model definitions     
---> public        # html/js/css for static part of website            
---> routes        # express middlewares (route wise)    

```



