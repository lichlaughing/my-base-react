// 引入CountUI组件
import CountUI from '../../components/Count';
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action';
// 引入Connect用于链接ui和redux
import { connect } from 'react-redux';

// 函数返回的对象中的key作为传递给UI组件props的key,value作为值传递给UI组件props的value。返回的是状态值
// 该函数是react-redux调用，直接传递了state参数
function mapStateToProps(state) {
    return { count: state };
}
// 函数返回的对象中的key作为传递给UI组件props的key,value作为值传递给UI组件props的value。返回的是操作状态的函数
function mapDispatchToProps(dispatch) {
    return {
        // 通知redux执行
        increment: number => dispatch(createIncrementAction(number)),
        decrement: number => dispatch(createDecrementAction(number)),
        incrementAsync: number => dispatch(createIncrementAsyncAction(number, 500))
    };
}

// 使用connect创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);