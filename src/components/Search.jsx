import React from 'react';

function SearchBar() {
	return (
		<div className="flex justify-center items-center mt">
			<div className="pt-4 pb-2">
				<input
					type="text"
					placeholder="Type a theme"
					className="w- border-blue-7 py-2 px-4 rounded-md mr-2 focus:outline-none"
				/>
				<button className=" bg-gradient-to-l from-blue-300 to-blue-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500  text-white py-2 px-6 rounded-md text-md">
					Search
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
