/**
 * 该文件专门为Count组件生成Action对象
 */
import { INCREMENT, DECREMENT } from './constant';

// 同步action,值action的值是Object对象
export const createIncrementAction = data => ({
    type: INCREMENT,
    data
});
export const createDecrementAction = data => ({
    type: DECREMENT,
    data
});

// 异步action,就是action的值为函数，其通常会调用同步action。异步action非必须用
export const createIncrementAsyncAction = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
