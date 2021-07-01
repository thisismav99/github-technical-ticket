import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useSignedIn from "../../hooks/useSignedIn";
import CreateTicket from "./CreateTicket";
import TicketList from "./TicketList";
import Solve from "./Solve";

const Dashboard = () => {
    const { email } = useSignedIn("dashboard");

    return (
        <Router>
            <div className="py-20 grid grid-cols-12">
                <div className="col-span-2 text-center border-solid border-r-2 border-green-500 h-screen">
                    <div className="flex flex-wrap">
                        <p className="text-green-500 text-xl underline w-full">DASHBOARD</p>
                        <div className="w-full mt-3">
                            <Link to="/dashboard">
                                <button id="home-btn" className="dashboard-btn">HOME</button>
                            </Link>
                            <Link to="/createticket">
                                <button id="create-ticket-btn" className="dashboard-btn">CREATE TICKET</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-10">
                    <Switch>
                        <Route path="/dashboard">
                            <TicketList />
                        </Route>
                        <Route path="/createticket">
                            { email && <CreateTicket email={email} />}
                        </Route>
                        <Route path="/solve/:id">
                            { email && <Solve email={email} /> }
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Dashboard;
