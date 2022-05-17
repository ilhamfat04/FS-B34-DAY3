//import useEffect here
import { useEffect, useContext } from "react"
import { Container } from "react-bootstrap";

import { UserContext } from "./context/userContext";

export default function ExampleComp() {
    const [state, dispatch] = useContext(UserContext)
    console.log(state);

    // const { user } = props

    // console.log('Props example', user?.email);
    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Guest Greeting Component Did Mount" & "Guest Greeting Component Will Unmount"
    // useEffect(() => {
    //     console.log("Example comp did update");
    //     console.log(user);
    // }, [props])

    return <Container>Email : {state?.user?.email}</Container>
}
