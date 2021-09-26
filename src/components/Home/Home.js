import {Link} from "react-router-dom";

export default function Home() {
    return <>
        <h2>Home</h2>
        <p>This is not the prettiest work of dev, but if you navigate to the <Link to={"/game"}>game link</Link>,
            you will be able to play tic-tac-toe!</p>
    </>;
}