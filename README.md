# 🎟️ KiyaniTicketing

**KiyaniTicketing** is a domain-based ticket management platform designed to help users efficiently create, manage, and resolve support tickets. The app enables isolated workspaces (called domains) where users can collaborate on resolving issues within a shared ticket queue.

## 🚀 Key Features

- 🏷️ **Domain-Based Workspaces**  
  Users create or join 5-character alphanumeric domains that serve as isolated environments for managing tickets.

- 📝 **Create & View Tickets**  
  Users can submit new tickets with descriptive titles and view a list of all tickets in their domain.

- 📋 **Status Tracking**  
  Each ticket has an editable status (e.g., Open, In Progress, Closed), allowing teams to track issue resolution progress.

- 🔄 **Real-Time Interaction**  
  Seamless navigation and updates across domain-specific ticket pages with a responsive frontend.

- 🧩 **Modular Routing Structure**  
  Clean and organized routes for domain joining, ticket viewing, and ticket creation.

## 🧰 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express, Mongoose (MongoDB)
- **Routing:** React Router for page navigation
- **Data Modeling:** Mongoose models for ticket schema and domain separation

## 🗂️ Project Structure

KiyaniTicketing-main/
├── frontend/
│ ├── public/ # Static assets and index.html
│ ├── src/
│ │ ├── components/ # TicketPage, CreateTicket, SetupPage, etc.
│ │ ├── App.js # Main routing logic
│ │ └── index.js # Entry point for React
│ └── package.json # Frontend dependencies
│
├── backend/
│ ├── model/ # Mongoose ticket model
│ ├── routes/ # API routes for ticket operations
│ ├── src/ # Backend server setup
│ └── package.json # Backend dependencies

markdown
Copy
Edit

## 👥 Use Cases

- Small teams or classroom settings managing shared tasks
- Tech support departments needing lightweight domain-based issue tracking
