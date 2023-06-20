import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_PRODUCTS, } from '../../lib/graphql/queries';

const useProducts = () => {
const {loading, error, data}= useQuery(GET_ALL_PRODUCTS);
  return {loading, error, data}
}



export default useProducts;