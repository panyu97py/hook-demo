import {useReducer} from 'react'

function init(initialCount) {
    return {count: initialCount};
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function UseReduceDemoView({initialCount = 0} = {}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            <p>针对复杂的数据格式及数据操作时使用</p>
            <p>Count: {state.count}</p>
            <button
                onClick={() => dispatch({type: 'reset', payload: initialCount})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    );
}


export default UseReduceDemoView
