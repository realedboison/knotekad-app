import React, { useState } from 'react';

import { GrMenu } from 'react-icons/Gr';

const MenuTwo = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{/* Main Page */}
			<div className={`main-page ${isOpen ? 'blur' : ''}`}>
				{/* Main content of the page */}
				<h1>Main Page Content</h1>
				{/* Button to toggle the menu */}
				<button onClick={toggleMenu} className="hamburger-btn">
					<GrMenu className="text-sm xl:text-2xl lg:text-xl text-black" />
					{/* <span className="hamburger-icon" /> */}
				</button>
			</div>

			{/* Hamburger Menu */}
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
					<div className="menu-container p-4 bg-white rounded-lg">
						{/* Menu content */}
						<ul>
							<li className="py-2">Menu Item 1</li>
							<li className="py-2">Menu Item 2</li>
							<li className="py-2">Menu Item 3</li>
							{/* Add more menu items as needed */}
						</ul>
						{/* Close button */}
						<button onClick={toggleMenu} className="close-btn mt-4">
							<span className="close-icon">Close</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuTwo;
