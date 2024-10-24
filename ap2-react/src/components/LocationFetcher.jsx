import { useEffect, useState } from "react"

export function LocationFetcher({clicked, enable}) {
    const [data, setData] = useState({})

    useEffect(() => {
        async function getCep(){
            const dataJson = await fetch("http://viacep.com.br/ws/01001000/json/")
            const cep = await dataJson.json()
            setData(() => cep)
        }
        getCep()
    }, [clicked])

    return(
        <>
            { enable && 
            <div>
                <h1> Cep - {data.cep}</h1>
                <h1> Bairro - {data.bairro}</h1>
                <h1> Cidade - {data.localidade}</h1>
            </div>
            }
        </>
    )

}
