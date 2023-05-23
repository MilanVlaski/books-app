# books-app
This project was made with React using Typescript
## How to run locally
1. Download nodejs (I used version 16.14.2, because I'm on an older operating system,
the official download link is here > https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi
my npm version is 8.5.0)
2. Clone or download the project
3. `npm install` - to install all the dependencies
### To get your Google Books API key
1. Go to : https://developers.google.com/books
2. Guides -> Using the API -> Google API Console (https://console.cloud.google.com/welcome?project=books-search-387512)
3. Select a project -> NEW PROJECT
4. Enter a project name
5. -> API & Services
6. ENABLE APIS AND SERVICES
7. Search for "Books api"
8. Enable
9. -> Credentials
10. Create credentials (API Key)
### Running the project
4. Copy your generated API key into: > "books-app\src\Components\Main.tsx", 
At the bottom of the class:

`export const API_KEY: string = "INSERT_API_KEY_HERE";
`

6. While in project folder open command line and execute `npm run dev`
7. A link should show, such as this: `open link: http://localhost.5173/`
8. After clicking the link, the website should be open in your browser!
