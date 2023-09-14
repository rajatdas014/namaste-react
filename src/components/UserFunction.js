import { useState } from "react"

const UserFunction = (props) => {
    const { name, location } = props
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h2>count : {count}</h2>
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
            <h4>email : abc@xyz.com</h4>
        </div>
    )
}

export default UserFunction