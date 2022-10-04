import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import "antd/dist/antd.min.css";
import "./index.scss";
import RootLayout from "./pages/RootLayout/RootLayout";
import DetailContainer from "./components/detailContainer/DetailContainer";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
			<Route index element={<DetailContainer />}></Route>
			<Route path="posiciones" element={<h1>Posiciones</h1>} />
			<Route path="calendario" element={<h3>Calendario</h3>} />
			<Route path="goleadores" element={<h3>Goleadores</h3>} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
