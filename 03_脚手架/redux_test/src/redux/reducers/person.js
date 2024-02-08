import { ADD_PERSON } from '../constant';
const initState = [{ name: 'libai', age: 10, id: '01' }];
// 初始化状态及处理状态
export default function personReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}
