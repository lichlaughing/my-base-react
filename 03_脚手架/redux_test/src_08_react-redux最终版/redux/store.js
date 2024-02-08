/**
 * 该文件用于暴露一个store对象，整个应用就一个store对象
 */
// 引入createStore用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';
// 引入所有的reducer
import reducer from './reducers';
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'; 
// 引入redux-devtools开发者工具扩展
import { composeWithDevTools } from '@redux-devtools/extension';
// 暴露 applyMiddleware(thunk)
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
