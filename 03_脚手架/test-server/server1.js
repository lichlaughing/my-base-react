const express = require('express')
const app = new express()

app.use((req, rep, next) => {
    console.log("someone 请求服务器1啦！")
    next()
})

app.get('/students', (req, rep) => {
    const students = [
        {id: "001", name: 'tom', age: 100},
        {id: "002", name: 'jerry', age: 200},
        {id: "003", name: 'idea', age: 200},
    ]
    rep.send(students)
})

app.listen(5000, (err) => {
    if (!err) {
        console.log("服务器1启动成功！学生信息地址：http://localhost:5000/students")
    }
})