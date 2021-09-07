import { Button } from 'react-bootstrap';
import './Body.css'
import group from "./Group.png";
import vector from "./Vector.png";

const Body = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-5">
                    <img src={group} alt="Logo" style={{position:'absolute', top:'11.3%', left:'6%'}}/>                  
                    <Button className="button" style={{top:'11.3%',left:'88.5%'}}> + Raise a Ticket </Button>
                </div>
            </div>
            <div className="row">
                <form action="/action_page.php">
                    <label for="priority" style={{position:'absolute', left:'6.5%', top:'18.5%'}}>Sort by:</label>
                    <select className="priority" >
                        <option >Priority</option>
                        <option className='value'>High</option>
                        <option className='value'>Medium</option>
                        <option className='value'>Low</option>
                    </select>
                    <img src={vector} alt="vector" className="vector" />
                    <select className="Table_view" >
                        <option >Table View</option>
                        <option className='value'>Pending Request</option>
                        <option className='value'>Completed Request</option>
                    </select>
                </form>
                <Button className="button" style={{top:'17.8%', left:'33.5%', width:'123px', height:'36.8px'}}>Create a View</Button>
            </div>
        </div>
    )
}

export default Body

