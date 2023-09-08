# RSS Reader

# Introduction
Serving both as a full-stack example and a functional news aggregator, the News Reader App allows users to follow news topics. It uses React, API layers, and a MySQL database.

# Summary
This application features a frontend built with React and a backend using MySQL for data storage, accessed via an API. The NewsReader.jsx component dynamically fetches data from the API based on user interactions while maintaining and updating the app's state.

# Frontend Components
Header.jsx: Manages category selection.
Body.jsx: Handles the display of news stories and pagination.
NewsCard.jsx: Represents individual news stories.
State Management
NewsReader.jsx and Body.jsx use React's useState hook for state management, offering a simple and efficient way to handle component-level states.

# Material-UI Integration
The app incorporates Material-UI components like Select and MenuItem for a polished UI. This not only makes the website visually appealing but also standardizes the navigation UI across the app.

# Modularity and Reusability
Each component is designed to be reusable and modular. This approach makes the codebase easier to maintain and extend. Future plans include expanding the app's news sources and implementing searching and topic analysis to track trending stories.

# API and Database Integration
The integration with the MySQL database is done via an API routed through an express server. The app fetches the most recent stories and regularly removes the oldest ones to manage storage.

# Styling and UX
With the aid of CSS modules, the app features a clean and intuitive user interface. The responsive design ensures a seamless experience across various devices.
