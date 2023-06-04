import { BiSearch } from 'react-icons/bi';
import React from 'react';

function SearchBar() {
	return (
		<div className="flex items-center justify-center">
			<input
				type="text"
				placeholder="Search Theme..."
				className="search-input"
			/>
			<button className="bg--[var(--primary)] border-2 border-white py-[18px] px-[18px] lg:px-[16px] lg:py-[16px]">
				<BiSearch size={24} className="text-[var(--secondary)]" />
			</button>
		</div>
	);
}

export default SearchBar;
