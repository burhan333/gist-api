import React, {useContext} from 'react'
import ContextWrapper from '../context/ContextWrapper'
import Gist from './Gist'

const GistList = () => {

    const {data, isLoading} = useContext(ContextWrapper)

    return(
        <div className='main'>
            {isLoading && <h1>Loading...</h1>}
            {data.length === 0 && !isLoading && <h1> NO GIST FOUND</h1>}
            {data.length > 0 && data.map(item => <Gist key={item.id} gist={item}/>)}
        </div>
    )
}

export default GistList
