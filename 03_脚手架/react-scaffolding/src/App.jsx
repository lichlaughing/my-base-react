import React, {Component} from 'react';
import axios from "axios";

export default class App extends Component {
    getStuData = () => {
        axios.get("/api1/students").then(
            response => {
                console.log("请求成功！", response.data)
            },
            error => {
                console.log("请求失败！", error)
            }
        )
    }
    getCarData = () => {
        axios.get("/api2/cars").then(
            response => {
                console.log("请求成功！", response.data)
            },
            error => {
                console.log("请求失败！", error)
            }
        )
    }

    render() {
        return (
            <div style={{marginLeft: "30%"}}>
                <button onClick={this.getStuData}>丶点击获取学生数据</button>
                <br/>
                <button onClick={this.getCarData}>丶点击获取汽车数据</button>
            </div>
        );
    }
}