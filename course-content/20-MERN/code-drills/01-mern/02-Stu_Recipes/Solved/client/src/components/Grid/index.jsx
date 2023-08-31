export function Container({ fluid, children }) {
	return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

export function Row({ fluid, children }) {
	return (
			<div className={`row${fluid ? '-fluid' : ''}`}>
				{children}
			</div>
	);
}

export function Col({ size, children }) {
	const classNames = size
		.split(' ')
		.map((size) => `col-${size}`)
		.join(' ');
	return <div className={classNames}>{children}</div>;
}
