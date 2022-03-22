import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Counter</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>4</div>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}

export default Counter