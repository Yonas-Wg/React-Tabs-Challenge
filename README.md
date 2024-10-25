# React Tabs Component
A dynamic tabbed interface built with React that fetches text content from the Loripsum API. This component implements caching and state management to enhance performance and user experience.

# Features
- Fetches placeholder text for multiple tabs from an external API
- Implements caching to minimize redundant API calls
- Responsive design with easy navigation between tabs

# Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the development server with `npm start`

To avoid CORS issues, run a local proxy server (e.g., using cors-anywhere):
- Install CORS Anywhere globally with `npm install -g cors-anywhere`
- Start the server with `cors-anywhere` 
- Run the server with `node server.js`
- Use `http://localhost:8080/https://loripsum.net/api/1/short/plaintext` as your API endpoint

# Usage
Simply integrate the Tabs component into your React application to provide users with an interactive way to view content.

# Video Demonstration
[Watch the Video](https://drive.google.com/file/d/1pBrLrWZMVzAfBmJHwe45iz9-ZEuYwPCa/view?usp=drive_link)
