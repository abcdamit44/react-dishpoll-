import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'


const Home = () => {
    const [dish, setDish] = useState()

    const getData = async () => {
        const res = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
        const data = await res.json();
        // console.log(data);
        let dishes = data.map((dish, i) => {
            return (
                <div className="card m-3" style={{ width: "18rem" }} key={dish.id}>
                    <img src={dish.image + i} className="card-img-top" alt={dish.dishName} />
                    <div className="card-body">
                        <h5 className="card-title">{dish.dishName}</h5>
                        <p className="card-text">{dish.description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
        return setDish(dishes)
    }
    useEffect(() => {
        getData()

    }, [])
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="d-flex flex-wrap">
                    {dish}
                </div>
            </div>
        </>
    )
}

export default Home