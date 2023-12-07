<!-- **********************************************************-->
Here I am going to use 2 library for form validation.
-Form validation by using 
    -Formik library and yup
    -(npm i formik , npm i yup)
    -Formik take care of form (ie that to handle the form and get data) and yup take care of validation

<!-- ********************************************************* -->

<!-- 2-12-2023 -->
# Firebase Setup
- create a project on firebase
- Keep the project name same as your local project
- Command to set up the firebase in your project: 
    -  npm install firebase
    -  npm install -g firebase-tools
    -  firebase login
    -  firebase init
        - choose as 'use the existing project
        -   What do you want to use as your public directory? build
        - Set up automatic builds and deploys with GitHub? No
        - Ans - the meaning of the above line is that , if project is on git and when we want to update the project , it will directlty get update     (its optional )
        - ater running this command firebase.json and firebaserc file will get added to project
    -  npm run build 
        - this commmand will build the project for deployment
    -  firebase deploy
        - after running this command we will get a url link of project and our is project is hoisted .we can test for live.!!
