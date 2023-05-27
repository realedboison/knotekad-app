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
