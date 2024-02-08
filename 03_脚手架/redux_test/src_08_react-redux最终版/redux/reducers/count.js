/**
 * 1. 用于创建一个为Count组件服务的reducer.reduder本质就是一个函数
 * 2. 该函数接收到两个参数：之前的状态(preState),动作对象(action)
 */
import { INCREMENT, DECREMENT } from '../constant';
const initState = 0;
export default function countReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data * 1;
        case DECREMENT:
            return preState - data * 1;
        default:
            return preState;
    }
}
