import { useQuery, gql } from "@apollo/client"


// const SINGLESTAR_QUERY = gql`
// query SingleStarQuery($toi: Integer!) {
//     singleStar(toi: $toi){
//         toi,
//         tfopwg_disp,
//         rastr,
//         decstr,
//         decerr1,
//         decerr2,
//         st_dist,
//         st_disterr1,
//         st_disterr2,
//         st_distlim,
//         st_distsymerr
//     }
// }
// `

const Star = (data) => {

    // const { loading, error, data } = useQuery(SINGLESTAR_QUERY, {
    //     variables: { toi },
    // })
    
    // if(loading) return null;
    // if(error) return `Error! ${error}`

  return (
    <div>
        {/* <h1>{data.singleStar.toi}</h1> */}Star
    </div>
  )
}

export default Star