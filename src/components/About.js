import UserFunction from "./UserFunction"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div>
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1 className="font-bold">Hey {loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <UserFunction name={"Rajat"} location={"Jamshedpur"} /> */}
            <UserClass />
        </div>
    )
}

export default About