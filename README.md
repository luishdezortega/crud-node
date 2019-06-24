# Crud-NodeJs

The project is developed in NodeJs version 10.15.3 using ExpressJs 4.13.3. The project also involves mongoose to perform querys to a mongo database.

The API exposes the following endpoints:

**[GET]**

* To retrieve all the providers:
  * localhost:4000/providers
  
* To retrieve one provider filtered by id:
  * localhost:4000/provider/:id
 
 
 **[POST]**
  
* To insert providers use the following endpoint and provide the necesary fields in the body of the request as the below example shows
  * localhost:4000/providers
  * Example:
```
  {
    "firstName": "Luis",
    "lastName": "Hernandez",
    "middleName": "O",
    "email": "luis2@yahoo.com",
    "specialty": {
        "name": "develop2",
        "createdBy": 1578,
        "createdAt": "2017-05-02T05:26:24.581Z",
        "updatedBy": 6658,
        "updatedAt": "2017-09-19T13:41:06.333Z"
    }
}  
```
  
**[PUT]**
   
  * To update one provider hit the following endpoint an provide the necesary fields as the previus example shows:
    * localhost:4000/provider/:id
    
**[DEL]**
   
  * To delete one provider specify the id of the provider to delete
    * localhost:4000/provider/:id
    
## Involved Tecnologies

<div style="display:flex;">
<img href="https://mongoosejs.com" src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" alt="Mongoose" width="100"/>

<img href="https://expressjs.com" src="https://expressjs.com/images/express-facebook-share.png" alt="ExpressJs" width="100"/>

<img href="https://nodejs.org" src="https://nodejs.org/static/images/logo.svg" alt="ExpressJs" width="100"/>

<img href="https://www.mongodb.com/" src="https://www.josebernalte.com/wp-content/uploads/2018/02/mongoDB.png" alt="MongoDB" width="100"/>

</div>

