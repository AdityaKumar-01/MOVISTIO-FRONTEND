import React from 'react'
import {useParams} from 'react-router-dom'
const GenresPage = () => {
   
    let {id} = useParams();
    console.log(id);
    return (
        <div>
            GenresPage
        </div>
    )
}

export default GenresPage
