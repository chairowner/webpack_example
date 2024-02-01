import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "@/Components/App/App";
import { Main } from "@/Pages/Main";
import { About } from "@/Pages/About";
import { Shop } from "@/Pages/Shop";

const root = document.getElementById("root");

if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<b>"Loading..."</b>}>
						<Main />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<b>"Loading about..."</b>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/shop",
				element: (
					<Suspense fallback={<b>"Loading shop..."</b>}>
						<Shop />
					</Suspense>
				),
			},
		],
	},
]);

container.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
