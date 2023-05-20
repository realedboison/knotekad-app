import { BiSearch } from 'react-icons/bi';
import React from 'react';

function SearchBar() {
	return (
		<div className="flex items-center justify-center">
			<input
				type="text"
				placeholder="Search Theme..."
				className="border-solid p-2 rounded-l-md focus:outline-none w-full"
			/>
			<button className="bg-gradient-to-l from-blue-400 to-blue-500 hover:bg-gradient-to-r hover:bg-blue-600 text-white py-2 px-4 rounded-r-md border-white border-solid border-2 hover:from-blue-400 hover:to-blue-500">
				<BiSearch size={20} className="text-white" />
			</button>
		</div>
	);
}

export default SearchBar;

// function SearchBar() {
// 	return (
// 		<div className="flex justify-center items-center mt">
// 			<div className="pt-4 pb-2">
// 				<input
// 					type="text"
// 					placeholder="Type a theme"
// 					className="w-2/2 border-blue-7 py-2 px-4 rounded-md mr-2 focus:outline-none"
// 				/>
// 				<button className="w-2/2 bg-gradient-to-l from-blue-300 to-blue-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500  text-white py-2 px-6 rounded-md text-md">
// 					Search
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default SearchBar;

// import React from 'react';
