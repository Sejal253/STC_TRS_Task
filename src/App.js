import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Ver_SideNavbar from './components/Ver_SideNavbar.js';
import Body from './components/body/Body';
import Pending_Table from './components/body/PendingTable';
import Completed_Table from './components/body/CompletedTable';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div className="d-flex">
          <Ver_SideNavbar/>
          <Body />
          <Pending_Table />
          <Completed_Table />
        </div>
      </Router>
  </>
  );
}

export default App;
