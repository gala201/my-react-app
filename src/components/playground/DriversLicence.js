import { useEffect } from "react"

function DriversLicence(props) {

    useEffect(() => {

        alert("Vozacka se ucitala")

    }, [])


    return (
        <>
            <button onClick={() => props.handleSizes('A1')}>A1</button>
            <button onClick={() => props.handleSizes('A')}>A</button>
            <button onClick={() => props.handleSizes('B')}>B</button>
            <button onClick={() => props.handleSizes('C1')}>C1</button>
            <button onClick={() => props.handleSizes('C')}>C</button>
            <div style={{ backgroundColor: "lavender", width: "400px", height: "250px", borderRadius: "8px" }}>
                <span style={{ margin: "10px", display: "inline-block" }}>{props.vozac.ime}</span><br />
                <span style={{ margin: "10px", display: "inline-block" }}>{props.vozac.prezime}</span><br />
                <span style={{ margin: "10px", display: "inline-block" }}>{props.vozac.adresa}</span> <br />
                <span style={{ margin: "10px", display: "inline-block" }}>Kategorije : {props.category.join(", ")}</span>

            </div><hr />
            <div>
                <input type="text" value={props.vozac.ime} name="ime" onChange={(e) => props.updateId(e)} /> <br />
                <input type="text" value={props.vozac.prezime} name="prezime" onChange={(e) => props.updateId(e)} /> <br />
                <input type="text" value={props.vozac.adresa} name="adresa" onChange={(e) => props.updateId(e)} />
            </div>
        </>
    )
}

export default DriversLicence