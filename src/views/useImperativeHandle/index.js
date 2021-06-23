import {useImperativeHandle, useRef, forwardRef} from 'react'

function CustomInput(props, ref) {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            focus: () => inputRef.current.focus(),
            blur: () => inputRef.current.blur()
        }
    })
    return (
        <input ref={inputRef}/>
    )
}

const ForwardRefCustomInput = forwardRef(CustomInput)

function UseImperativeHandle() {
    const customInputRef = useRef(null)
    return (
        <div>
            <p>结合 ref 转发实现限制组件暴露的 dom 实例的值</p>
            <ForwardRefCustomInput ref={customInputRef}/>
            <button onClick={() => customInputRef.current.focus()}>ForwardRefCustomInputFocus</button>
            <button onClick={() => customInputRef.current.blur()}>ForwardRefCustomInputBlur</button>
        </div>
    )
}

export default UseImperativeHandle
