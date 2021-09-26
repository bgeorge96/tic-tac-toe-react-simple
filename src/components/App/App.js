import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import TicTacToe from "../TicTacToe/TicTacToe";
import {Provider} from "react-redux";
import store from "../../store";
import About from "../About/About";
import Home from "../Home/Home";

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
                            <About/>
                        </Route>
                        <Route path={"/"}>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}