/**
 * 该文件用于暴露一个store对象，整个应用就一个store对象
 */
// 引入createStore用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './reducers/count';
import perssonReduer from './reducers/person';
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk';

// 汇总所有的reducers
const allReducers = combineReducers({
    count: countReducer,
    person: perssonReduer
});
// 暴露
export default createStore(allReducers, applyMiddleware(thunk));
