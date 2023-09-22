[![Homyz Banner](https://raw.githubusercontent.com/MaizNadeem/Real-Estate-Web/main/client/src/assets/Banner.png)](https://homyz-real-estate.vercel.app/)

# Homyz - A Real Estate Website

Introducing Homyz - the ultimate real estate platform! Buy or sell properties hassle-free with its user-friendly interface. List your property effortlessly, and explore countless options with a dynamic interactive map. Like your favourite residencies and secure your account with Auth0. Sleek UI powered by Mantine for a seamless experience. Get ready for the real estate adventure of a lifetime!

## Deployment

Homyz Real Estate is now live on Vercel! Explore the website here: [**Homyz Real Estate Website**](https://homyz-real-estate.vercel.app/).

## Key Features

- **Discover Dream Properties**: Uncover your perfect home with Homyz's powerful property search. Explore any location and its surroundings on an interactive map.
- **Love It, Save It**: Fall in love with properties? Simply hit the heart button to save them to your personalized favourites list for future delight.
- **Fortress of Security**: Your data is guarded by Auth0, ensuring a rock-solid and seamless user authentication experience.
- **Unlock Exclusive Features**: Create an account, log in, and open the door to exclusive features, saving preferences, and personalized experiences.

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React Native](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


- **React**: Empowering UI Magic. A dynamic JavaScript library for creating captivating user interfaces with ease.
- **Node.js**: Unleashing Server-Side Potential. A powerful runtime environment enabling lightning-fast back-end development.
- **Express**: Streamlined Web Applications. An agile Node.js framework simplifying server-side coding for web applications.
- **MongoDB**: Rock-Solid Data Storage. A cutting-edge NoSQL database ensuring secure and reliable data storage.
- **Auth0**: Fortified Authentication. A top-tier third-party service providing robust user authentication for enhanced security.
- **Mantine**: Beauty in UI Components. A treasure trove of React components for crafting polished and stunning user interfaces.

## Run on Local Machine

To run this project on your local computer, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/MaizNadeem/Real-Estate-Web.git
```

2. Navigate to the project directory:

```bash
cd Real-Estate-Web
```

3. Install the required dependencies for both the client and server sides:

```bash
cd client
npm install
cd ../server
npm install
```

4. Auth0 Configuration Changes:
   - In the server directory, go to `./config/auth0Config.js` and update the `issuerBaseURL` with the correct Auth0 issuer URL from your own App.

5. MongoDB Configuration Changes:
   - In the server directory, create a `.env` file and set the following variables with your own MongoDB and Auth0 credentials:
     ```
     PORT=8000
     DATABASE_URL=your_mongodb_url_here
     ISSUER_BASE_URL=your_auth0_issuer_url_here
     ```

6. Auth0 Configuration Changes on client side:
   - In the client directory, go to `./config.js` and replace the `domain`, `clientID` with your own Auth0 app configuration.

7. Update API URL:
   - In the client directory, go to `./src/utils/api.js` and update the `baseURL` to your own server URL or `http://localhost:8000/api`.

8. Start the development servers for both the client and server sides:

```bash
cd client
npm run dev
```
```bash
cd ../server
npm start
```

9. Open your web browser and visit `http://localhost:3000` to access the Homyz website. Additionally, you can access the server at `http://localhost:8000`.

Now you can explore the Homyz Real Estate website locally and make any necessary changes to suit your requirements. If you have any questions or face any issues during the setup process, don't hesitate to seek assistance. Happy coding!

**Contributing**

Contributions to this project are welcomed. If you wish to contribute, please follow the standard GitHub workflow by creating pull requests and discussing any proposed changes via issues.

**Reporting Issues**

If you encounter any issues while using the Homyz website or have any suggestions for improvement, please open an issue on the GitHub repository. Your feedback is valuable to us, and we will address any reported issues promptly.

---

## Contact

Maiz - contact.maiznadeem@gmail.com

Project Link: [View Github](https://github.com/MaizNadeem/Real-Estate-Web)