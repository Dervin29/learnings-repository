import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //we are using the user from the context
    const {user} = useContext(UserContext)
    //if user is null return please login
    if (!user) return <div>please login</div>
    //if user is not null return welcome with the username
    return <div>Welcome {user.username}</div>
}

export default Profile