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
## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create posts**
    this will create a new post ,required fields are
    - username (the author of this post)
    - title
    - body

 2. **show all posts**
   list all existing posts, we should have following filtering support
   -  filter by username
   - filter by query contained in title (search by title)  

 3. **edit posts** `TBD`

 4. **delete posts** `TBD`

 ### Comments

 1. **show all comments of a user**

 2. **show all comments under a post**

 3. **add a comment**





