# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/Tatiana-312/nodejs2022Q4-service.git
```
```
cd nodejs2022Q4-service
```
```
git checkout rest-service
```

## Installing NPM modules

```
npm install
```

## Get PORT
Copy `.env.example` file and rename copy to `.env`
## Running application

```
npm start
```
## OpenAPI
After starting the app on port (4000 as default) you can open
in your browser OpenAPI by typing https://editor.swagger.io/.

Then copy all text from `api.yaml` file, which in `doc` folder and past it in Swagger Editor.

After that, on the right side of the screen, you can see a `Home Library Service`.

Now, you can check how It works here.

![image](https://user-images.githubusercontent.com/84280280/217025876-791bb013-7150-4b05-a28f-b938c6d9fa33.png)

Choose method that you want, press 

![image](https://user-images.githubusercontent.com/84280280/217026768-c963c363-8a6b-464e-96de-a64c6ffd1454.png)  button 

and use it.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

### Auto-fix and format

```
npm run lint
```

