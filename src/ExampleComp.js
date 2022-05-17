//import useEffect here
import { useEffect } from "react"
import { Container } from "react-bootstrap";

export default function ExampleComp(props) {
    const { user } = props

    console.log('Props example', user?.email);
    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Guest Greeting Component Did Mount" & "Guest Greeting Component Will Unmount"
    useEffect(() => {
        console.log("Example comp did update");
        console.log(user);
    }, [props])

    return <Container>Email : {props.user.email}</Container>
}
