import {useCallback, useEffect, useRef, useState} from "react";


function UseCallbackDemoView() {
    const renderCount = useRef(1)
    const [num, setNum] = useState(0)
    const [status, setStatus] = useState(0)
    const fn = () => {
        // console.log('fn', num)
        console.log('fn', status)
    }
    const fnUseCallback = useCallback(() => {
        console.log('fnUseCallback', status)
    }, [status])

    useEffect(() => {
        if (renderCount.current > 1) {
            fn()
        }
    }, [fn])

    useEffect(() => {
        if (renderCount.current > 1) {
            fnUseCallback()
        }
    }, [fnUseCallback])

    useEffect(() => {
        renderCount.current += 1
    })
    return (
        <div>
            <p>useCallback 定义函数只有在依赖变化时才会更新</p>
            <p>renderCount:{renderCount.current}</p>
            <p>num:{num}</p>
            <p>status:{JSON.stringify(status)}</p>
            <button onClick={() => setNum(num => num + 1)}>setNum</button>
            <button onClick={() => setStatus(status => !status)}>setStatus</button>
        </div>
    )
}

export default UseCallbackDemoView
