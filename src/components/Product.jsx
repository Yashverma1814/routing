import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { Navbar } from './Navbar';


export const Product = () => {
    const {id} = useParams();
    const [data, setData] = React.useState([]);

    const{token} = useContext(AuthContext);

    const fetchProduct = () => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => (res.json()))
            .then((res) => setData(res))

        console.log(data);
    }
    React.useEffect(() => {
        fetchProduct()
    }, [])
    

    if(token==''){
        return <Navigate to={`/login`} />
    }

  return (
    <div>
        <Navbar />
    <div>
        <img src={data.image} alt={data.name} style={{ width: "15rem", height: "15rem" }}/>
        <h3>Name: {data.name}</h3>
        <h3>Price: {data.price}$</h3>
    </div>
    </div>
  )
}
