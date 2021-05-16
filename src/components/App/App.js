import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import TicTacToe from "../TicTacToe/TicTacToe";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/game"}>Game</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={"/game"}>
                        <TicTacToe />
                    </Route>
                    <Route path={"/about"}>
                        <h2>About</h2>
                    </Route>
                    <Route path={"/"}>
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}