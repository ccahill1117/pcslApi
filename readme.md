* to do

* development
  * cd pcslApi
  * to run and watch - $ npm run start:dev

* user auth
  * POST localhost:8080/api/auth/signup -
    * {"username": "chris23",
    "email": "cahill3@gmail.com",
    "password": "123456",
    "roles": ["moderator", "user"]
  }
  * POST localhost:8080/api/auth/signin
    * {"username": "chris23",
    "email": "cahill3@gmail.com",
    "password": "123456" }
