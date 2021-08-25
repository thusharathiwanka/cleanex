const Error = ({
	error,
	left = "left-1/2",
	top = "top-10",
	translateX = "-translate-x-1/2",
}) => {
	return (
		<div className={"w-full flex justify-center relative"}>
			<div className={`absolute z-10 ${top} ${left} transform ${translateX}`}>
				<div
					className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
					role="alert"
				>
					<strong className="font-bold">Error !</strong>
					<span className="block sm:inline pl-2">{error}</span>
				</div>
			</div>
		</div>
	);
};

export default Error;
