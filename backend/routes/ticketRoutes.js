import express from "express";
import Ticket from "../model/Ticket.js";

const router = express.Router();

// GET (Single Ticket by ID)
router.get("/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundTicket = await Ticket.findById(id);
    if (foundTicket) {
      res.status(200).json(foundTicket);
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// PUT (Update Ticket by ID)
router.put("/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ticketData = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, ticketData, {
      new: true,
    });
    if (updatedTicket) {
      res.status(200).json({ message: "Ticket updated", updatedTicket });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// DELETE (Delete Ticket by ID)
router.delete("/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    if (deletedTicket) {
      res.status(200).json({ message: "Ticket Deleted" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// GET (All Tickets)
router.get("/tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// POST (Create Ticket)
router.post("/tickets", async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = await Ticket.create(ticketData);
    res.status(201).json({ message: "Ticket Created", newTicket });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

export default router;

/*

import express from "express";
import Ticket from "../models/Ticket.js";



const router = express.Router();

//create a new ticket
router.post("/", async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    const newTicket = new Ticket({ title, description, severity });
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    const newTicket = new Ticket({ title, description, severity });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a ticket by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, severity } = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      { title, description, severity },
      { new: true } // Return the updated document
    );
    if (!updatedTicket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a ticket by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    if (!deletedTicket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
*/
