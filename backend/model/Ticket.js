import mongoose from "mongoose";

// Define schema for ticket:
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    severity: {
      type: Number,
      enum: [1, 2, 3], // severity scale from 1 to 3
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "open", "waiting", "resolved"],
      default: "new",
    },
    /*
    domain: {
      type: String,
      required: true,
    },
    */
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
