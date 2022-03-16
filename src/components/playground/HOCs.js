import { useState } from "react"

const ClickCounter = (props) => {


    return (
        <button onClick={props.handleCount}>Kliknuto {props.count} puta</button>
    )
}

const HoverCounter = (props) => {

    return (
        <h1 onMouseOver={props.handleCount}>Hoverano {props.count} puta</h1>
    )
}

const withCount = (Component) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0)
        const handleCount = () => {
            setCount(count + 1)
        }

        return <Component {...props} count={count} handleCount={handleCount} />
    }

    return NewComponent
}

const EnrichedHoverCounter = withCount(HoverCounter)
const EnrichedClickCounter = withCount(ClickCounter)




const KeyboardPress = (props) => {



    return (
        <>
            <input type="text" onKeyPress={props.handleCount} />
            <div>{props.count}</div>

        </>
    )
}
const EnrichedKeyboardPress = withCount(KeyboardPress)

const HOCs = () => {



    return (
        <>
            <EnrichedClickCounter />
            <EnrichedHoverCounter />
            <hr />
            <EnrichedKeyboardPress />
            {/* <ClickCounter /> */}
            {/* <HoverCounter /> */}
        </>
    )
}

export default HOCs