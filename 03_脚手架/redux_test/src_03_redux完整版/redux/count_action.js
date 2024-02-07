/**
 * 该文件专门为Count组件生成Action对象
 */
import { INCREMENT, DECREMENT } from './constant';
export const createIncremAction = data => ({
    type: INCREMENT,
    data
});
export const createDecremAction = data => ({
    type: DECREMENT,
    data
});
