const Report = () => {
	return (
		<div>
			<form>
				<div className="flex">
					<label class="text-blue-400 font-light float-right mt-4">
						Enter Customer name :
					</label>
					<input
						type="text"
						placeholder="Enter your input here"
						class=" ml-8 float-left w-min mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div className=" flex">
					<label class="text-blue-400 font-light float-right mt-4 mr-2">
						Enter Date range :
					</label>
					<input
						type="text"
						placeholder="Enter your input here"
						class="ml-16 float-left w-min mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 "
					/>
				</div>
				<button className="text-blue-400 bg-gray-500 ">Generate</button>
			</form>
		</div>
	);
};

export default Report;
