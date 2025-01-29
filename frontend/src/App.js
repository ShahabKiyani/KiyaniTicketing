import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import SetupPage from "./pages/SetupPage";
import NotFoundPage from "./pages/NotFoundPage";
import TicketPage from "./pages/TicketPage";
import CreateTicket from "./pages/CreateTicket";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/ticketpage" element={<TicketPage />} />
            <Route path="/createticket" element={<CreateTicket />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
