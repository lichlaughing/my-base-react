const express = require('express')
const app = new express()

app.use((req, rep, next) => {
    next()
})

app.get('/search/users', (req, rep) => {
    const cars = [
        {
            id: 1,
            login: "1",
            avatar_url: "https://acg.suyanw.cn/api.php?a=1",
            html_url: "https://www.baidu.com",
        },
        {
            id: 2,
            login: "2",
            avatar_url: "https://acg.suyanw.cn/api.php?a=2",
            html_url: "https://www.baidu.com",
        },
        {
            id: 3,
            login: "3",
            avatar_url: "https://acg.suyanw.cn/api.php?a=3",
            html_url: "https://www.baidu.com",
        },
        {
            id: 4,
            login: "4",
            avatar_url: "https://acg.suyanw.cn/api.php?a=4",
            html_url: "https://www.baidu.com",
        },
        {
            id: 5,
            login: "5",
            avatar_url: "https://acg.suyanw.cn/api.php?a=5",
            html_url: "https://www.baidu.com",
        },
        {
            id: 6,
            login: "6",
            avatar_url: "https://acg.suyanw.cn/api.php?a=6",
            html_url: "https://www.baidu.com",
        },
    ]
    sleep(2000)
    rep.send(cars)
})

function sleep(delay) {
    const start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
    }
}

app.listen(5003, (err) => {
    if (!err) {
        console.log("用户服务启动成功！地址：http://localhost:5003/search/users")
    }
})