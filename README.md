# GOOGLE-CLONE


const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

# LOGIN PAGE

<img width="468" alt="Screenshot 2022-09-17 185920" src="https://user-images.githubusercontent.com/103945041/190859742-46042a76-c309-4913-adc1-6c01a141e0f8.png">

<img width="960" alt="Screenshot 2022-09-17 185950" src="https://user-images.githubusercontent.com/103945041/190859809-ec568d40-91ea-4eca-84ac-703bc03c87e4.png">

# REGISTER NEW USER PAGE

<img width="956" alt="Screenshot 2022-09-17 185613" src="https://user-images.githubusercontent.com/103945041/190859768-7d5da901-493b-4c27-a52c-4cb53ae3b93b.png">

<img width="468" alt="Screenshot 2022-09-17 185835" src="https://user-images.githubusercontent.com/103945041/190859772-a05f8a40-fbba-4e57-8255-4a33a0dac7e5.png">

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

--------------------------------------->>>>><<<<<-----------------------------------------

This is documentation for frontend of the NVCTI website hosted at [https://localhost:3000].

The project uses Material-ui as CSS framework and styled components .
The project uses Material-ui as icons library.
The project uses React-redux for state management.

In the client folder of the project there are several folders---

# 2. public folder---

constaining fav icon and manifest files

# 2. src folder---

It contains all the files ---

2.1. assests---
2.2. components---
2.3. features---
2.4. hook---
2.5. pages---
2.6. utils---
2.7. App.js---
2.8. index.css---
2.9. index.js---
2.10. store.js---

## assests---

It contains all the images used in the website in png format.

## components---

It contains all the components used in the React App.

Folder structure | components.jsx(component) and styles.jsx(its styles)

### Account-popover---

It is the popover appears on the screen when user clicks on the profile-pic button on the navbar.

### Dashboard-navbar---

There are 4 dashboard navbar for each of the admin , client , mentor and superadmin.

### Event-participant---

It fetches all the users from the database who are participating in a event, and displays it in the dashboard.

### Footer---###

It is bottom of the page containing two icons:- one of the IIT(ISM) and other of the NVCTI with links of all the social media handles of the NVCTI.

### Loader---

It is the loader appears on the screen when app is trying to load the data.

### Login---

It contains login form of the website.

### Register---

It contains signup form of the website.

### Logo---

It contains logo of the website and its style.

### Notification-dropdown---

When user clicks on the notification icon at the top-right of the navbar, a dropdown menu appears containing all the notifications.

### Pdi-form---

It contains form of the _NVCTI PDI PORTAL_ as accordance to the
word document provided.

### Previous-status-table---

It contains the previous statuses of the user in the events of the nvcti - "rejcted" or "accepted" or "pending" states.

### Protected-routes---

It contains the protected routes of the client, admin, mentor and superadmin.

### Status-pill---

It contains the component which shows in the Event-participant component indicating the status of the user in the events of the NVCTI with its styles according to the status.

### Timeline--- 

It is the timeline that appears at the right side of the screen in the event details page.

### View-form---

It is the application form for the APPLICATION FORM TO ACCESS THE NVCTI LAB.
