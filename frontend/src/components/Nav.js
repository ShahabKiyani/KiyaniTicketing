import { Link, useNavigate } from "react-router-dom";
import CreateTicket from "../pages/CreateTicket";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createticket">Ticket</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
