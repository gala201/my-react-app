import { useQuery, gql } from "@apollo/client"
import { useEffect } from "react"
import { useState } from "react"

const ExchangeRates = () => {

    const EXCHANGE_RATES = gql`
        query GetExchangeRates($currency: String!) {
             rates(currency: $currency) {
                currency
                rate
            }
        }
           
        
    `

    const [valuta, setValuta] = useState("EUR")

    const { data, loading, error } = useQuery
        (EXCHANGE_RATES, { variables: { currency: valuta } })







    //napraviti 3 buttona sa valutama: HRK, EUR, BAM

    return (
        <>


            <h1>Exchange rates</h1>

            <button onClick={() => setValuta("HRK")}>HRK</button>
            <button onClick={() => setValuta("EUR")}>EUR</button>
            <button onClick={() => setValuta("BAM")}>BAM</button>

            <table>
                <thead>
                    <tr>
                        <td>Currency</td>
                        <td>Rate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.rates.map((v, i) => {
                            return (

                                <tr key={i}>
                                    <td>{v.currency}</td>
                                    <td>{v.rate}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

            {/* {

                data.rates.map((v, i) => {
                    return (
                        <table>
                            <tr>
                                <td>{v.currency}</td>
                                <td>{v.rate}</td>
                            </tr>
                        </table>
                    )
                })
            } */}

        </>
    )
}

export default ExchangeRates