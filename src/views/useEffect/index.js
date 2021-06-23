import {useEffect, useState} from "react";

function UseEffectDemoView() {
    const [count, setCount] = useState(0)
    const [state, setState] = useState(false)

    useEffect(() => {
        console.log(`count=>${count}`)
        console.log(`state=>${state}`)

        // 每个 effect 都可以返回一个清除函数, React 会在组件卸载的时候执行清除操作
        return () => {

            // 每次 effect 会在调用一个新的 effect 之前对前一个 effect 进行清理
            console.log('clearEffect')
        }
    })

    useEffect(() => {
        console.log(`state=>${state}`)
    }, [state])

    useEffect(()=>{
        console.log('componentDidMount')
        return ()=>{
            console.log('componentWillUnMount')
        }
    },[])
    return (
        <div>
            <p>可以让你在函数组件中执行副作用操作</p>
            <p>你可以告诉 React 组件需要在渲染后执行某些操作</p>
            <button onClick={() => setCount(count => count + 1)}>setCount</button>
            <button onClick={() => setState(state => !state)}>setState</button>
        </div>
    )
}

export default UseEffectDemoView
