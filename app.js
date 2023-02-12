const express = require('express');
const app = express();
const port = 3000;

//setting up view engine for express
app.set('view engine','ejs');


const user = {

    firstName: "Ankush",
    lastName: "banerjee",
    admin: true,

}


const posts = [

    {title: 'title1',  body: 'body1'},
    {title: 'title2',  body: 'body2'},
    {title: 'title3',  body: 'body3'},
    {title: 'title4',  body: 'body4'},

]




app.get('/',(req,res)=>{
    
    res.render('pages/index',{
        user: user,
        title: 'Home-page'
    });

})


app.get('/articles', (req,res)=>{
    res.render('pages/articles',{
        articles: posts,
        title: 'Articles'
    })
})

app.get('/about', (req,res)=>{

    res.render('pages/about',{
        title: 'About'
    })


})


app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
  })
