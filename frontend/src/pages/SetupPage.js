import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SetupPage = () => {
  const [joinDomain, setJoinDomain] = useState("");
  const [createDomain, setCreateDomain] = useState("");
  const navigate = useNavigate();

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    // Navigate to the ticket page with the domain ID
    if (joinDomain.length === 5) {
      navigate(`/ticketPage/${joinDomain}`);
    } else {
      alert("Domain ID must be exactly 5 characters.");
    }
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // Navigate to the ticket page with the new domain ID
    if (createDomain.length === 5) {
      navigate(`/ticketPage/${createDomain}`);
    } else {
      alert("Domain ID must be exactly 5 characters.");
    }
  };

  return (
    <>
      <h1>Please either join or create a ticketing domain:</h1>

      <form onSubmit={handleJoinSubmit}>
        <input
          type="text"
          placeholder="Join Domain (5 characters/numbers)"
          value={joinDomain}
          onChange={(e) => setJoinDomain(e.target.value)}
          maxLength={5}
          required
        />
        <button type="submit">Join Domain</button>
      </form>

      <form onSubmit={handleCreateSubmit}>
        <input
          type="text"
          placeholder="Create Domain (5 characters/numbers)"
          value={createDomain}
          onChange={(e) => setCreateDomain(e.target.value)}
          maxLength={5}
          required
        />
        <button type="submit">Create Domain</button>
      </form>
    </>
  );
};

export default SetupPage;
