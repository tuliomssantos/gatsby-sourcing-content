import React from 'react'
import { graphql } from "gatsby";

const product = ({ pageContext: { productId }, data }) => {
   
    return (
        <div>
            <p><strong>Product Id:</strong> {productId} - received via context</p>
            <p><strong>Product Title:</strong> {data.products.title} - received via query</p>
            <p><strong>Product Description:</strong> {data.products.description} - received via query</p>
        </div>
    )
}

export default product

export const query = graphql`
    query($id__normalized: Int) {
        products(id__normalized: { eq: $id__normalized }) {
            title
            description
        }
    }
`;