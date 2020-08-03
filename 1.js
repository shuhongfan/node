var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/my_test',{ useNewUrlParser: true,useUnifiedTopology: true })
mongoose.connection.once('open',function () {
    console.log('连接数据库成功')
})
mongoose.connection.once('close',function () {
    console.log('数据库连接断开')
})

mongoose.disconnect()
