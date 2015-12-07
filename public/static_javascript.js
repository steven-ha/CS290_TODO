document.addEventListener('DOMContentLoaded', addWorkout());

function addWorkout(){
	
app.post('/',function(req,res,next){
  var context = {};

  if(req.body['Add']){

    var context = {};
    mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", [req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs], function(err, result){
      if(err){
        next(err);
        return;
      }
      context.results = "Inserted id " + result.insertId;
      res.render('home',context);
    });
  }
});
}