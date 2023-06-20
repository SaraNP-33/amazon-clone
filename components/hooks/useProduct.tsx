import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_SINGLE_PRODUCT } from '../../lib/graphql/queries';


const useProduct = (id: string) => {
    const {loading, error, data}= useQuery(GET_SINGLE_PRODUCT,{
        variables: {id}
    });
      return {loading, error, data}
    }

    export default useProduct;