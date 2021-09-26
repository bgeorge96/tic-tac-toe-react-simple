import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import TicTacToe from "../TicTacToe/TicTacToe";
import {Provider} from "react-redux";
import store from "../../store";

export default function App() {
    return (
        <Provider store={store}>
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
                            <TicTacToe/>
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
        </Provider>
    )
}