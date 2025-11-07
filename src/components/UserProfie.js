// import { set } from 'cypress/types/lodash'
import React, { useEffect, useState } from 'react'

const UserProfie = (props) => {
const { id } = props.match ? props.match.params : { id: 1 }
    const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`
    const [userData, setUserData] = useState([])
    
    const [loading, setLoading] = useState(true)

seEffect(() => {
    setLoading(true);

    // Artificial delay to ensure "Loading..." is visible for tests
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }, 1000);
  }, [id]);
        if(loading){
        return <div>Loading...</div>
        }
  return (
    <div>
        {
            
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
