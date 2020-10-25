//create 
const router = require("express").Router()

const db = require("../models")

router.get("/api/workouts", function (req, res){
    db.Workout.find().then(function (dbWorkout){
        // console.log(dbWorkout),
res.json(dbWorkout)
    })
})

//create new workout
router.post('/api/workouts', (req,res) => {
    db.Workout.create({}).then(newWorkout => {
        res.json(newWorkout);
    })
})


router.put("/api/workouts/:id", ({body, params}, res) => {
    // console.log(body, params)
    let workoutId = params.id
    let savedExercises = []


db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
                console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            })
        })

            function updateWorkout(exercises){
                db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, res){
                if(err){
                    console.log(err)
                }
    
                })
            }

router.get("/api/range", function (req, res){
    db.Workout.find().then(function (dbWorkout){
res.json(dbWorkout)
    })
})
module.exports = router