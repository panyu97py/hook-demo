import {useEffect, useRef} from "react";

function noop() {
}

function useMount(effect = noop) {
    useEffect(effect, [])
}

function useUnmount(effect = noop) {
    const effectRef = useRef(effect)
    useEffect(() => {
        return () => {
            effectRef.current()
        }
    }, [])
}

function CustomizeHookDomView() {
    useMount(() => {
        console.log('mount')
    })
    useUnmount(() => {
        console.log('unmount')
    })
    return (
        <div>
            <a href='https://github.com/streamich/react-use' target='_blank'>react-use</a>
        </div>
    )
}

export default CustomizeHookDomView
