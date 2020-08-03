require('./conn_mongo.js')

var Student=require('./models/student.js')

Student.find({},function (err,docs) {
    if (!err){
        console.log(docs)
    }
})
