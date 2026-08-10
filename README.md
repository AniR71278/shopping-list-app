# Smart Shopping List Application

## Project Overview
A responsive, JavaScript-powered web application designed for efficient grocery and task management. The application allows users to dynamically add, edit, track, and delete shopping items without requiring a backend server. 

## Technical Architecture & Coding Functions
This project was built adhering to strict web development standards, utilizing HTML5, CSS3, and ES6 JavaScript.

* **Object-Oriented Programming (OOP):** All application logic is encapsulated within a custom `ShoppingManager` class to prevent global scope pollution and ensure modular, maintainable code.
* **CRUD Operations:** 
  * **Create:** The `addItem()` method captures user input and pushes new object instances to the array.
  * **Read:** The `displayItems()` method iterates through the array and dynamically generates HTML list items.
  * **Update:** The `editItem()` and `togglePurchased()` methods allow users to rename items or mark them as completed via interactive status toggles.
  * **Delete:** The `deleteItem()` method filters the array to permanently remove specific objects.
* **Data Persistence (Local Storage):** The `saveData()` method utilizes browser-native `localStorage.setItem()` and `getItem()`. This ensures the user's shopping list is continuously saved and remains intact even if the browser tab is closed or refreshed.

## UI/UX Design & Icon Rendering
* **Native Unicode Emojis:** To optimize loading speeds and keep the codebase lightweight, this application intentionally avoids heavy external image files (like `.png` or `.svg`) or third-party icon libraries.
* **Implementation:** The shopping cart logo (🛒) and all button icons (✔️, ✏️, ❌) are rendered using standard Unicode text characters directly injected into the DOM via JavaScript's `innerHTML` property. The browser treats these as standard text, resulting in zero external HTTP requests and instant rendering.
* **Responsive Layout:** CSS Flexbox is utilized to ensure the application scales seamlessly from desktop monitors down to mobile phone screens.

## Bug and Debugging
* **Edge-Case Validation:** During testing, an issue was identified where submitting a blank input field generated invisible list items and corrupted local storage data.
* **Resolution:** Strict input sanitization was implemented inside the `addItem()` method. The JavaScript `.trim()` function strips accidental whitespaces, and a conditional `if (itemName === "")` statement halts execution and triggers a browser alert warning the user to enter a valid product name.

## Instructions for Use
1. Download or clone this repository to a local machine.
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).
3. The application runs entirely client-side; no server configuration, Node.js environment, or database setup is required.
