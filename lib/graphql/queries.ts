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



export {GET_ALL_PRODUCTS};