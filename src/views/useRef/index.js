import {useEffect, useRef, useState} from "react";

const CountRenderTime = () => {
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
    })
    return (
        <div style={{borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', marginBottom: '10px'}}>
            <p>1.计算render次数</p>
            <p>renderTime:{renderCount.current}</p>
        </div>
    )
}

const ImperativelyDom = () => {
    const inputRef = useRef(0)

    return (
        <div style={{borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', marginBottom: '10px'}}>
            <p>2.操作dom</p>
            <input ref={inputRef}/>
            <button onClick={() => inputRef.current.focus()}>begin</button>
        </div>
    )
}

const GetPreviousProps = (props) => {
    const previousProps = useRef({})

    useEffect(() => {
        previousProps.current = props
    })

    return (
        <div style={{borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', marginBottom: '10px'}}>
            <p>3.获取上次渲染的值</p>
            <p>previousProps:{JSON.stringify(previousProps.current)}</p>
            <p>currentProps:{JSON.stringify(props)}</p>
        </div>
    )
}

function UseRefDemoView() {
    const [time, setTime] = useState(new Date().getTime())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(val => val += 1000)
        }, 1000)
        return () => clearInterval(timerId)
    })

    return (
        <div>
            <p>useRef</p>
            <p>跨越渲染周期存储数据，而且对它修改也不会引起组件渲染</p>
            <CountRenderTime/>
            <ImperativelyDom/>
            <GetPreviousProps time={time}/>
        </div>
    )
}

export default UseRefDemoView
