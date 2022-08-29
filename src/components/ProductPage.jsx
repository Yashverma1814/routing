import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar';


export const ProductPage = () => {

    const [data, setData] = React.useState([]);

    const fetchProduct = () => {
        fetch(`http://localhost:8080/products`)
            .then((res) => (res.json()))
            .then((res) => setData(res))

        console.log(data);
    }
    React.useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div>
            <Navbar />
            <h2>All Products</h2>
            <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)"}}>
            {
                data.map((el) => {
                    return (
                        <div key={el.id}>
                            <div style={{border:"1px solid gainsboro",width:"20rem"}}>
                                <img src={el.image} alt={el.name} style={{ width: "12rem", height: "12rem" }} />
                                <h4>{el.name}</h4>
                                <Link to={`/product/${el.id}`}>
                                    <button>More</button>
                                </Link>
                            </div>
                        </div>)
                })
            }
            </div>
        </div>
    )
}
