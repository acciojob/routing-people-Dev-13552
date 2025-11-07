// import { set } from 'cypress/types/lodash'
import React, { useEffect, useState } from 'react'

const UserProfie = (props) => {
    const {id} = props.match.params
    const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`
    const [userData, setUserData] = useState([])
    
    const [loading, setLoading] = useState(false)

        function fetchData(){   
            setLoading(true)
            fetch(API_URL)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                setUserData(data)
                setLoading(false)
            })
        }
    
        useEffect(()=>{
            fetchData()
        }, [])
  return (
    <div>
        {
            loading ? <div>Loading...</div>:
            (
                <div>
                    <h1>User Details</h1>
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Website: {userData.website}</p>
                </div>

            )
        }
      
    </div>
  )
}

export default UserProfie
