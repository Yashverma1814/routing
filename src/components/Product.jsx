import React from 'react'
import { useParams } from 'react-router-dom'


export const Product = () => {
    const {id} = useParams();
    const [data, setData] = React.useState([]);

    const fetchProduct = () => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => (res.json()))
            .then((res) => setData(res))

        console.log(data);
    }
    React.useEffect(() => {
        fetchProduct()
    }, [])

  return (
    <div>
        <img src={data.image} alt={data.name} style={{ width: "15rem", height: "15rem" }}/>
        <h3>Name: {data.name}</h3>
        <h3>Price: {data.price}$</h3>
    </div>
  )
}
