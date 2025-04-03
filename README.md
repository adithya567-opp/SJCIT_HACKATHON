# SJCIT_HACKATHON
Basic inventory system using html,css and javascript

This simple inventory application is a complete client-side web solution built with HTML, CSS, and JavaScript that allows users to track product inventory. Below is a comprehensive breakdown of how it works:

1. Application Structure
The application consists of three main components:

HTML (Structure)
Provides the visual skeleton including:

Dashboard header with statistics cards

Form for adding new inventory items

Table for displaying current inventory

Action buttons for editing and deleting items

CSS (Presentation)
Handles all styling and layout including:

Responsive design with flexbox

Color schemes and visual feedback

Card-based UI components

Table styling and interactive elements

JavaScript (Functionality)
Implements all business logic:

Form handling and validation

Inventory data management

Local storage persistence

Dynamic UI updates

2. Core Features
Inventory Management
Add Items: Users can add new inventory items with name, quantity, and price

Edit Items: Existing items can be modified by clicking the edit button

Delete Items: Items can be removed from inventory

Data Persistence: All changes are saved to localStorage automatically

Dashboard Statistics
Total Items: Shows current count of all inventory items

Low Stock: Highlights items with quantity below 5 (configurable threshold)

3. Technical Implementation Details
Data Structure
The application maintains inventory data as an array of objects in the format:

javascript
Copy
[
  {
    name: "Product Name",
    quantity: 10,
    price: 19.99
  },
  // ... more items
]
Key Functions
renderInventory()
Clears and rebuilds the entire inventory table

Creates table rows dynamically from the inventory array

Attaches event handlers to action buttons

Formats prices to 2 decimal places

updateStats()
Calculates and displays:

Total number of inventory items

Count of low stock items (quantity < 5)

Updates the dashboard cards in real-time

Event Handlers
Form Submission:

Validates inputs

Adds new items to inventory

Persists to localStorage

Resets form and updates UI

Button Actions:

Delete: Removes item and updates storage

Edit: Pre-fills form with item data and removes original

Error Handling
Basic validation ensures:

All form fields are required

Quantity and price must be valid numbers

Prevents empty submissions

4. Storage Mechanism
The application uses the browser's localStorage API to:

Save the entire inventory array as a JSON string

Retrieve and parse data on page load

Maintain inventory between sessions

Update storage on every change

5. User Interface
Dashboard
Clean, card-based design

Real-time statistics display

Responsive layout that works on different screen sizes

Form
Simple three-field input

Clear validation feedback

Unified submit button

Inventory Table
Tabular display of all items

Color-coded action buttons

Hover effects for better usability

6. Potential Enhancements
This basic implementation could be extended with:

Search/filter functionality

Category organization

Bulk import/export

More detailed statistics

User authentication

Server synchronization

7. Technical Considerations
Client-side only: No server required

Lightweight: Minimal dependencies

Cross-browser: Works in modern browsers

Easy to deploy: Single HTML file with embedded resources

This application demonstrates fundamental web development concepts while providing practical inventory management capabilities suitable for small businesses or personal use.
