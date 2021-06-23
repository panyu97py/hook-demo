import {useState} from "react";

function UseStateDemoView() {
    const [inputVal,setInputVal] = useState(0)
    const [count, setCount] = useState(10)
    const handleAdd = () => setCount((count) => count + 1)
    const handleReduce = () => setCount((count) => count - 1)
    const handleInput = ({target: {value} = {}}) => setInputVal(value)
    return (
        <div>
            <p>用于声明 State 变量</p>
            <p>inputVal:{inputVal}</p>
            <p>count:{count}</p>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
            <input value={inputVal} onInput={handleInput}/>
        </div>
    )
}

export default UseStateDemoView
