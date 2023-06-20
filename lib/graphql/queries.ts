import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS= gql `
query getProducts {
    products {
    id
    name
    price
    description
    images {
      id
      url
      fileName
      width
      height
    }
  }
}

`;

const GET_SINGLE_PRODUCT =gql`
query getOneProduct($id: ID!){
  product(where: { id: $id }) {
      id
      name
      description
      price
      categories {
        id
        name
      }
      images {
        width
        height
        fileName
        url
      }
      reviews {
        id
        rating
        email
        name
        headline
        content
      }
    }
}

`;



export {GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT};