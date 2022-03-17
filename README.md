# login-practice-typescript

1. ```npm install``` to install dependencies
2. In the ***.env*** file, place the value that corresponds to each variable
3. run ```npm run dev```

Practice login using Typescript, Mongo DB, Node JS, Express JS, Json Web Token

![image](https://imgur.com/UQprdqq.png)


Contains a rest api with a single endpoint which is ***/auth***

In this process, 2 parameters are received:

1. e-mail
2. password

The existence of the user is verified

exists: returns a token
does not exist: returns an error like "username or password is invalid"
