import "@/styles/normalize.scss";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { Main } from "@/pages/Main";
import { About } from "@/pages/About";
import { NotFound } from "@/pages/NotFound";

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
					<Suspense fallback={<b>"Loading..."</b>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "*",
				element: (
					<Suspense fallback={<b>"Loading..."</b>}>
						<NotFound />
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
