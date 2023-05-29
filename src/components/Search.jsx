import { BiSearch } from 'react-icons/bi';
import React from 'react';

function SearchBar() {
	return (
		<div className="flex items-center justify-center">
			<input
				type="text"
				placeholder="Search Theme..."
				className="border-solid p-2  focus:outline-none w-full"
			/>
			{/* bg-gradient-to-l from-blue-400 to-blue-500 hover:bg-gradient-to-r hover:bg-blue-600 text-white py-2 px-4 border-white border-solid border-2 hover:from-blue-400 hover:to-blue-500 */}
			<button className="border-white border-solid border-2  py-2 px-4 border-whit">
				<BiSearch size={20} className="text-[var(--secondary)]" />
			</button>
		</div>
	);
}

export default SearchBar;
