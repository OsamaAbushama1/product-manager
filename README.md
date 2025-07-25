# Product Manager

Product Manager is a single-page web application designed to manage a product inventory, suitable for a clothing brand like Mate. It allows users to create, update, delete, and search for products while calculating total costs based on price, taxes, ads, and discounts. The application uses browser local storage to persist product data and provides a simple interface for managing product details, including categories and quantities.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Features
- **Product Creation**:
  - Add new products with details like title, price, taxes, ads, discount, and category.
  - Support for adding multiple products at once by specifying a quantity.
- **Product Management**:
  - Update existing product details.
  - Delete individual products or clear the entire product list.
- **Cost Calculation**:
  - Automatically calculate the total cost of a product based on price, taxes, ads, and discounts.
- **Search Functionality**:
  - Filter products by title using a search input (case-insensitive).
- **Local Storage**:
  - Persist product data in the browser's local storage for data retention across sessions.
- **User Interface**:
  - Display products in a table with options to update or delete.
  - Dynamic "Delete All" button appears when products exist.

## Tech Stack
### Frontend
- **HTML**: Structure of the application.
- **CSS**: Styling with a custom `style.css` file for layout and design.
- **JavaScript**: Core logic for product management, local storage, and dynamic updates.
- **Storage**: Browser's [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for data persistence.

## Installation


### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/OsamaAbushama1/product-manager.git
   cd product-manager


Open the index.html file in a web browser:
Double-click index.html to open it directly


Ensure the style.css, script.js, and icon.ico files are in the same directory as index.html.

Project Structure
product-manager/
├── index.html           # Main HTML file for the application
├── style.css            # Custom CSS for styling the interface
├── script.js            # JavaScript logic for product management
├── icon.ico             # Favicon for the application
└── README.md            # Project documentation

Usage

Adding a Product:
Enter product details (title, price, taxes, ads, discount, category, quantity).
The total cost is calculated automatically based on price, taxes, ads, and discounts.
Click the "Create" button to add the product(s) to the inventory.
If a quantity greater than 1 is specified, multiple instances of the product are added.


Updating a Product:
Click the "Update" button next to a product in the table.
Edit the product details in the form and click the "Update" button to save changes.


Deleting a Product:
Click the "Delete" button next to a product to remove it from the inventory.
Use the "Delete All" button to clear the entire product list (appears when products exist).


Searching Products:
Use the search input to filter products by title (case-insensitive).


Data Persistence:
Product data is saved in the browser's local storage and persists across page refreshes.



For any issues or questions, please open an issue on GitHub or contact us at osamaabushama1@gmail.com.```
