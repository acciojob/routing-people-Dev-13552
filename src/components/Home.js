import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/users"
    const [userData, setUserData] = useState([])
    function fetchData(){   
        fetch(API_URL)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setUserData(data)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>
        <h1>User List</h1>
        {
            <ul>
                {
                    userData.map((user, index)=>{
                        return (
                            <li key={user.id}>
                                <Link to = {`/users/${user.id}`}>{user.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        }
    </div>
  )
}

export default Home
