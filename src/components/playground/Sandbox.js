export default function Sandbox(props) {

    const totalPrice = props.price * props.quantity
    /*     const priceDiscount = props.cipela
    
        if(props.quantity >= 5) {
            totalPrice = totalPrice - totalPrice/100*priceDiscount
        } */




    return (
        <>
            <h2>Cijena ovih proizvoda je: {props.quantity < 5 ? totalPrice : totalPrice - (totalPrice * .10)}</h2>
            <h3>Vaše Ime i prezime je {props.name}</h3>
        </>
    )
}