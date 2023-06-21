# **DOGGIES** | Individual project

## **📌 Objectives**

- Build a Single Page Application using the technologies: **React**, **Redux**, **Node**, **Express** and **Sequelize**.
- Put into practice basic style and design resources (UX: UI).
- Affirm and connect the concepts learned in the race.
- Learn best practices.
- Learn and practice the GIT workflow.
- Use and practice testing.


## Demo

- [Doggies deploy](https://dogs-frontend-theta.vercel.app/)


## Screenshots

![App Screenshot](https://i.imgur.com/4iBqTE8.png)

![App Screenshot](https://i.imgur.com/UpCnBlJ.png)




## **📖 Purpose**

The idea of this project is to build a web application from the API [**TheDogApi**](https://thedogapi.com/) and in which you can:

- Search for dogs.
- View the information of the dogs.
- Filter them.
- Order them.
- Create new dogs.

⛔️ For the filtering and sorting functionalities you can NOT use the external API endpoints that already return the filtered or ordered results.

⚠️ In order to use the API it is necessary to create an account and obtain an ApiKey that must then be included in all the requests we make. 

**Only endpoints that can be used**

-  [**TheDogApi**](https://api.thedogapi.com/v1/breeds)
-  **Search By 'Breed':** _"https://api.thedogapi.com/v1/breeds/search?q={raza_perro}"_


## **📁 Requirements**
 **🖱 Database**

Create two models for your database. One will be for the dog breeds and the other will be for the temperaments (they can have whatever name you want). The relationship between both models must be many-to-many. Below we leave you **all** the properties that each model must have.

**📍 MODEL 1 | dogs**

-  ID.\*
-  Image.\*
-  Name.\*
-  Height.\*
-  Weight.\*
-  Years of life.\*


**📍 MODEL 2 | temperaments**

-  ID.\*
-  Name.\*



### **🖱 BACK-END**

For this part you will need to build a server using **NodeJS** and **Express**. You will have to connect it to your database using **Sequelize**.

Your server must have the following routes:

#### **📍GET | /dogs**

- Gets an array of objects, where each object is a breed of dog.

#### **📍GET | /dogs/:idBreed**

- This route gets the detail of a specific race. In other words, it returns an object with the information requested in the detail of a dog.
- The race is received by parameter (ID).
- You have to include the data of the temperaments associated with this breed.
- It should work for both API and database dogs.

#### **📍GET | /dogs/name?="..."**

- This route must obtain all those dog breeds that match the name received by query. (It doesn't have to be an exact match.)
- You must be able to search it regardless of upper or lower case.
- If the race does not exist, it must display an appropriate message.
- You must look for both the API and the database.

#### **📍 POST | /dogs**

- This route will receive all the necessary data to create a new dog and relate it to the associated temperaments.
- All information must be received by body.
- You must create the dog breed in the database, and it must be related to the indicated temperaments (at least one).

#### **📍 GET | /temperaments**

- Gets all existing temperaments.
- These must be obtained from the API (it will be evaluated that there is no hardcoding). After getting them from the API, they must be saved in the database for later consumption from there.

### **🖱 FRONT-END**

An application must be developed using **React** and **Redux** that contains the following views:

**📍 LANDING PAGE |** you must create a home or welcome page with:

- Some background image representative of the project.
- Button to enter the **`home page`**.



**📍HOME PAGE |** The main page of your SPA must contain:

- SearchBar: a search input to find dog breeds by name.
- Sector in which you can see a list of cards with the dogs. When starting it should load the first results obtained from the **`GET /dogs`** route and should show its:
    -  Image.
    -  Name.
    - Temperaments.
    -  Weight.
- When a Card is clicked, it should redirect to the detail of that specific race.
- Buttons/Options to **filter** by temperaments, and if its origin is from the API or from the database (created by us from the form).
- Buttons/Options to **order** both ascending and descending dog breeds in alphabetical order and by weight.
- Paginated: the list of dog breeds will be done in parts. Your SPA must have a page that shows a total of 8 dogs per page.

**⚠️ IMPORTANT**: Both the dog breeds brought from the API and the database must be shown, but it is **NOT** allowed to store dog breeds from the API in the database . **Only those created from the form** can be saved.



**📍DETAIL PAGE |** This view should show all the specific information of a dog:

- ID.
-  Image.
-  Name.
-  Height.
-  Weight.
- Temperaments.
-  Years of life.



**📍FORM PAGE |**: in this view you will find the form to create a new breed of dog.

This form should be **fully controlled with JavaScript**. HTML validations cannot be used, nor can special libraries be used for this. It must have the following fields:

-  Name.
- Height **(differentiate between minimum and maximum height of the breed)**.
- Weight **(differentiate between minimum and maximum weight of the breed)**.
-  Years of life.
- Possibility to select/add several temperaments simultaneously.
- Button to create the new race.

> [**IMPORTANT**]: it is a requirement that the creation form is validated only with JavaScript. You can add the validations that you consider. For example: that the name of the breed cannot contain numbers, or that the minimum weight/height cannot be greater than the maximum.

---


### **🖱TESTING**

Keep in mind that in this instance it is not mandatory to develop tests for your application. In the same way, we challenge you to do them, since they add points!

- At least have a frontend component with its respective tests.
- At least have two backend routes with their respective tests.
- At least have a database model with its respective tests.
