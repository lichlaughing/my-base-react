const express = require('express')
const app = new express()

app.use((req, rep, next) => {
    console.log("someone 请求服务器1啦！")
    next()
})

app.get('/cars', (req, rep) => {
    const students = [
        {id: "001", name: 'car1'},
        {id: "002", name: 'car2'},
        {id: "003", name: 'car3'},
    ]
    rep.send(students)
})

app.listen(5001, (err) => {
    if (!err) {
        console.log("服务器1启动成功！学生信息地址：http://localhost:5001/cars")
    }
})