import { useState } from "react"
import Sandbox from "./Sandbox"
import TotalPrice from "./Sandbox"

export default function Playground() {

    const [counter, setCounter] = useState(1)
    const donutPrice = 7

    //dodati popust ako je vise od 5 komada
    const discount = 10

    /*     function increaseCounter() {
            return setCounter(counter + 1)
        } */

    const [name, setName] = useState("")

    return (
        <>
            <h1>My Playground</h1>
            <hr />

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Upiši ime i prezime" /><br />


            <hr />
            <button onClick={() => setCounter(counter + 1)}>Povečaj</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(Math.max(1, counter - 1))}>Umanji</button>

            <hr />
            <Sandbox price={donutPrice} quantity={counter} cipela={discount} name={name} />
        </>

    )
}