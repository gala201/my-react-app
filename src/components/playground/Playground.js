import { useState, useEffect } from "react"
import DriversLicence from "./DriversLicence"
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
    const [adresa, setAdresa] = useState("")
    const [phone, setPhone] = useState("")

    const [product, setProduct] = useState({
        name: "Skecers tenisice",
        description: "lorem ipsum sit",
        price: 120
    })

    const [vozac, setVozac] = useState({
        ime: "",
        prezime: "",
        adresa: ""
    })




        ;


    const handleUpdate = (e) => {
        const value = e.target.value
        const name = e.target.name


        setProduct(prevValues => ({
            ...prevValues, ["name"]: value
        }))


    }

    const updatePrice = (e) => {
        const price = e.target.value

        setProduct(prevValues => ({
            ...prevValues, price: price
        }))
    }

    const updateId = (e) => {
        const value = e.target.value
        const name = e.target.name



        setVozac(prevValues => ({
            ...prevValues, [name]: value
        }))

    }

    const [category, setCategory] = useState([])
    const [disableBtn, setDisableBtn] = useState(true)

    const handleSizes = (item) => {
        console.log(item);

        if (!category.includes(item)) {
            setCategory(prevValues => [...prevValues, item])
        }
        else {
            const newArray = category.filter(v => v !== item)

            setCategory(newArray)
        }


    }

    const [isShow, setIsShow] = useState(true)

    useEffect(() => {
        console.log("Mijenjam kategorije");
    }, [vozac])


    return (
        <>




            <h1>My Playground</h1>

            {/*
            <h3>Vase ime i prezime je {name}</h3><br />
            <h4>Vasa adresa je {adresa}</h4><br />
            <h4>Vas broj telefona je {phone}</h4> */}

            <small>Naziv proizvoda - </small>
            <span>{product.name}</span> <br />
            <small>Opis proizvoda - </small>
            <span>{product.description}</span><br />
            <small>Cijena - </small>
            <span><b>{product.price}</b></span>
            <hr />

            <div>
                <label htmlFor="">Naziv proizvoda</label> <br />
                <input name="name" onChange={(e) => handleUpdate(e)} type="text" value={product.name} /> <br /> <br />
                <label htmlFor="">Opis proizvoda</label><br />
                <input type="text" value={product.description} /><br />
                <label htmlFor="">Cijena</label><br />
                <input type="text" value={product.price} name="price" onChange={(e) => updatePrice(e)} />
            </div><hr />



            <hr />
            <button onClick={() => setCounter(counter + 1)}>Povečaj</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(Math.max(1, counter - 1))}>Umanji</button>

            <hr />
            <button onClick={() => setIsShow(!isShow)}>Sakrij</button>
            <hr />

            {
                isShow && <DriversLicence
                    vozac={vozac}
                    category={category}
                    handleSizes={handleSizes}
                    updateId={updateId}
                />
            }



            <Sandbox
                price={donutPrice}
                quantity={counter}
                risetajKaunter={setCounter}
                cipela={discount}
                name={name}
                adresa={adresa}
                phone={phone}
                postaviAdresu={setAdresa}
                postaviIme={setName}
                postaviBroj={setPhone}

            />
        </>

    )
}