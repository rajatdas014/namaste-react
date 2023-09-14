import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            userInfo:
            {
                name: "Presenter Name",
                location: "Dummy Location",
            },
        }

        //console.log("constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rajatdas014");
        const json = await data.json();
        this.setState(
            {
                userInfo: json
            }
        )

        //console.log("componentDidMount");
    }
    componentDidUpdate() {
        //console.log("componentDidUpdate");
    }
    // Never update state variable directly

    render() {

        //console.log("render");
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="profile" src={avatar_url} alt="" />
                <h3>Name : {name}</h3>
                <h3>Location : {location}</h3>
                <h4>email : def@mno.com</h4>
            </div>
        )
    }
}

export default UserClass