import {useState,useDebugValue} from "react";

function useMyCount(num) {
    const [ count, setCount ] = useState(0);

    // 延迟格式化
    useDebugValue(count > num ? '溢出' : '不足', value => {
        return value
    });

    const myCount = () => {
        setCount(count + 2);
    }

    return [ count, myCount ];
}

function UseDebugValueDemoView() {
    const [ count, seCount ] = useMyCount(10);

    return (
        <div>
            {count}
            <button onClick={() => seCount()}>setCount</button>
        </div>
    )
}
export default UseDebugValueDemoView
