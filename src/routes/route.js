//1. This API will fetch all movies from array

router.get('/movies', function(req,res) {
      res.send('["Fukrey","Delhi","Dabang","Rockstar","suryavanshi"]')
});

//2.This API will fetch all movie by indexid from array
router.get('/movies/:movieId', function(req,res){
    //console.log(req)
    mov=["Fukrey","Delhi","Dabang","Rockstar","Suryavanshi"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send('"doesnt exist"')
    }else{
        res.send(mov[value])
    }
})

//3.This API will fetch all movies from array all objects
router.get('/moviez', function(req,res){
    res.send([ {id: 1,name: 'The shining'}, {id: 2,name: 'incendies'},{id: 3,name: '3 idiots'},{

    }]);

 //4.This API will fetch all movies from array of objects by indexId
 router.get('/films/:filmId', function(req,res){
     let movi=[{id: 1,name: 'The shining'}, {id: 2,name: 'Incendies'},{id: 3,name: '3 idiots'},{
         let value = req.params.filmId;
         //console.log(typeof value)
         let found=false;
         for(i=0;i<movi.length;i++){
             //console.log(typeof movi[i].id)
             //console.log(movi[i])
             if(movi[i].id==value){
                 found=true
                 res.value(movi[i])
                 break
             }
         }
     
         if(found==false){
             //console.log(found)
             res.send('No movie exists with this id')}
         }
 
        }




module.exports = router;
