import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import App from "./components/app/App";
import "antd/dist/antd.min.css";
import "./index.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
