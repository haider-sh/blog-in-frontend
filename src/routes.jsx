import App from "./App.jsx";
import Home from "./components/Home.jsx";
import LoginForm from "./components/LoginForm.jsx";
import PostPage from "./components/PostPage.jsx";
import SignupForm from "./components/SignupForm.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/signup",
                element: <SignupForm />
            },
            {
                path: "/posts/:id",
                element: <PostPage />
            }
        ]
    }
];

export default routes;