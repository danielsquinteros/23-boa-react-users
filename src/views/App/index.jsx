import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { getUsers } from '../../api/User'

const App = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, message: 'jeje'})


    const getUserFromApi = async () => {
        setLoading(true)
        try {
            const users = await getUsers()
            setUsers(users)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setError({isError: true, message: error})
        }
    }

    useEffect(() => {
        getUserFromApi()
    }, [])
    

    const render = () => {
        if(loading){
            return <h1>Cargando</h1>
        }
        if(error.isError){
            return <h1>{error.message}</h1>
        }
        console.log(users);
        const renderUsers = users.map(user => {
            return (<div key={user.id}>
                <p>
                    {user.first_name}
                </p>
                <p>
                    {user.last_name}
                </p>
            </ div>)
        })
        return renderUsers
    } 

  return (
    <>
        <Navbar />
        {render()}
    </>
  )
}

export default App