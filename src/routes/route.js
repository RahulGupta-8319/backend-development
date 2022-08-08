const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     // logger.welcome()

//     res.send('My second ever api!')
// });

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash','datta']
    res.send(students)
})

router.get('/movies', function ( req, res){
    let movies = ['toofan', 'hum-apke-h-kon','dilwale-dulhaniya-le-jayege','jaan']
    res.send(movies)
})

router.get('/movies/:indexNumber', function ( req, res){
    let movies = ['toofan', 'hum-apke-h-kon','dilwale-dulhaniya-le-jayege','jaan']
    let no = req.params.indexNumber
    


    let len = (movies.length)
    if(no>=len || no == 0 ){
        res.send("error")
    }else {
        res.send(movies[no])
    }

})

router.get('/films', function ( req, res){
   let films = [ {
   id: 1,
    name : 'The Shining'
   }, {
   id: 2,
    name : 'Incendies'
   }, {
   id: 3,
    name : 'Rang de Basanti'
   }, {
   id: 4,
    name : 'Finding Nemo'
   }]

   res.send(films)
   
})

router.get('/films/:filmid', function ( req, res){
    let films = [ {
    id: 1,
     name : 'The Shining'
    }, {
    id: 2,
     name : 'Incendies'
    }, {
    id: 3,
     name : 'Rang de Basanti'
    }, {
    id: 4,
     name : 'Finding Nemo'
    }]
    
    let filmid = req.params.filmid

    // const out = films.filter( film => film.id == filmid)
    // res.send(out)
    
      let len = (films.length)
      if( filmid > len || filmid == 0 || filmid < 0){
        res.send(" error ")
      }else{
        const out = films.filter( film => film.id == filmid)
        res.send(out)
      }
 })


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;