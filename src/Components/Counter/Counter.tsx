import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};
	const decrement = () => {
		if (count === 0) return;
		setCount((prev) => prev - 1);
	};
	return (
		<div>
			<h1>counter</h1>
			<p>{count}</p>
			<div>
				<button className={s.button} onClick={decrement}>
					-
				</button>
				<button className={s.button} onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
};
