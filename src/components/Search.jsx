import { BiSearch } from 'react-icons/bi';
import React from 'react';

function SearchBar() {
	return (
		<div className="flex items-center justify-center">
			<input
				type="text"
				placeholder="Search Theme..."
				className="border-solid p-4 focus:outline-none w-full  "
			/>
			<button className="border-white border-solid bg--[var(--primary)] border-2 py-4 px-4 ">
				<BiSearch size={20} className="text-[var(--secondary)]" />
			</button>
		</div>
	);
}

export default SearchBar;
