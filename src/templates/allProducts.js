import React from 'react'

const allProducts = ({ pageContext: { allProducts } }) => {
    return (
        <div>
            <h1>All Products</h1>
            {allProducts.map(product => {
                return(
                    <div key={product.id} style={{maxWidth: '300px'}}>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title}/>
                        <p>{product.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default allProducts
