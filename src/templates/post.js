import React from 'react'
import { graphql } from "gatsby";

const post = ({ pageContext: { uid }, data }) => {
    
    return (
        <div>
            <h1>{data.prismicPost.data.title.text}</h1>
            <p>{data.prismicPost.data.content.text}</p>
        </div>
    )
}

export default post

export const query = graphql`
    query($uid: String!) {
        prismicPost(uid: { eq: $uid }){
            data {
                title {
                    text
                    html
                }
                content {
                    text
                    html
                }
                date
            }
        }
    }
`;