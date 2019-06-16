const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
    new GoogleStrategy({
        //options of the google-strat
        clientID:'200253771844-jfev3qd2crmgnhir41f7kfr0f47ao5ld.apps.googleusercontent.com',
        clientSecret:'GWcxMP_XmQd6u9-jlVXvuMW5'
    }),()=>{
        //passport cb
    })