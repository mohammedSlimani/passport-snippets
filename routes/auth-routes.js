const router = require('express').Router;

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/lougout',(req,res)=>{
    //hadnle this with passport
    res.send("loggin out");
})

router.get('/google',(req,res)=>{
    //handle with passport
    res.send('login with google ');
});

module.exports = router;