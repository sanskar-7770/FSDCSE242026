
import React, { useEffect, useState } from 'react';

function FetchProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const jsonData = await res.json();

                console.log(jsonData);
                setData(jsonData.products);

            } catch (e) {
                console.log("Error is: " + e);
            } finally {
                console.log("fetch products");
            }
        }

        fetchData();
    }, []);

    return (
        <div >
            <h2>Fetch Products</h2>

            {data.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="150"
                        padding='5px'
                        margin='5px'
                        border='5px'
                    />
                    <button >add to cart</button>
                    <button>Buy Now</button>
                </div>
            ))}
        </div>
    );
}

export default FetchProducts;
