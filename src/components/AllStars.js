import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Star from './Star'

const ALLSTARS_QUERY = gql`
    query StarsQuery {
        stars{
            toi,
            tfopwg_disp,
            rastr,
            decstr,
            decerr1,
            decerr2,
            st_dist,
            st_disterr1,
            st_disterr2,
            st_distlim,
            st_distsymerr
        }
    }
`

const AllStars = () => {
    const { loading, error, data } = useQuery(ALLSTARS_QUERY);
    
    if(loading) return <p>Loading...</p>
    if (error){
        console.log(data, 'not working')
        return <p>Error: {error.message}</p>
    }

    return (
        data.stars.map( star => <Star key={star.toi} data={star} />)
  
  )
}

export default AllStars