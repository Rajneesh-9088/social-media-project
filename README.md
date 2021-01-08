# Social Media  Project


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

### Backend

```shell
src
├───controllers    # db connection and model definitions 
├───db             # functions to connect routes to db operations
├───public         # html/js/css for static part of website     
│   ├───app
│   ├───components
│   ├───css
│   └───js         # express middlewares (route wise)      
├───routes       
│   ├───posts
│   └───users
└───utils

```
### Frontend

```shell
public
│   index.html             # first/ home page
│
├───app                    # own frontend js code
│       social-common.js
│
├───components             # own html snippets      
│       navbar.html
│
├───css                    # bootstrap library
│       bootstrap.css
│
└───js                     # javascript library
        bootstrap.js
        jquery-3.3.1.js
        popper.js
 
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

 ## API DOCUMENTATIONS

 ### `users`

 1. `POST/users`
 Create a user with randome username and user id

 2. `GET/users/{userid}` 
 Get a user with given user id 

 3. `GET/users/{username}`
  Get a user with given username

 ### `posts`

 1. `GET/posts` 
 Get all posts of everyone

 2. `POST/posts`
 Create a new post

 Required fields in body -

 ```
userid
body
title
 ```







