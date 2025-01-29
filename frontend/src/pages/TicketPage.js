import { useEffect, useState } from "react";
import axios from "axios";
import "./additional-css/TicketPage.css";
import { Link } from "react-router-dom";

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tickets");
        setTickets(response.data);
      } catch (error) {
        setError("Failed to load tickets");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p className="loading">Loading tickets...</p>;
  if (error) return <p className="error">{error}</p>;

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "red";
      case "open":
        return "yellow";
      case "waiting":
        return "grey";
      case "resolved":
        return "green";
      default:
        return "transparent";
    }
  };

  return (
    <div className="ticket-page">
      <h1>All Tickets</h1>
      {tickets.length > 0 ? (
        <ul className="ticket-list">
          {tickets.map((ticket) => (
            <li key={ticket._id} className="ticket-item">
              <h2 className="ticket-title">{ticket.title}</h2>
              <p className="ticket-description">{ticket.description}</p>
              <div className="ticket-details">
                <span className="ticket-severity">
                  Severity: {ticket.severity}
                </span>
                <span className="ticket-date">
                  Created at: {new Date(ticket.createdAt).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default TicketPage;

/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TicketPage = () => {
  const { id } = useParams();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Fetch tickets for the specific domain
        const response = await fetch(`/api/tickets/${id}`); // Adjust URL as needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tickets for Domain: {id}</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>Severity: {ticket.severity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketPage;
*/
