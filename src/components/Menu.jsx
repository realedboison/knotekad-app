import { useEffect, useRef, useState } from 'react';

import { RiMenu3Fill } from 'react-icons/Ri';

const MainMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const handleKeyDown = event => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};

	// 'block' : 'hidden'
	// 'visible' : 'invisible'
	const className = `${isOpen ? 'block' : 'hidden'} hamburger-menu ${
		isOpen
			? 'translate-x-0 transition-transform duration-300 ease-in-out'
			: 'translate-x-40'
	}`;

	useEffect(() => {
		const handleOutsideClick = event => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [menuRef]);

	return (
		<div className="relative" ref={menuRef}>
			{/* Menu button */}
			<button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
				<div className="">
					<RiMenu3Fill size={60} />
				</div>
			</button>

			<div className={className}>
				<ul className=" flex flex-col items-center justify-center ">
					<div className="pt-20 ">
						<li className="my-4 mx-4">
							<a href="#" className="hover:text-gray-400">
								Lorem ipsum dolor sit amet.
							</a>
						</li>
						<li className="my-4 mx-4">
							<a href="#" className="hover:text-gray-400">
								Lorem ipsum, dolor sit amet consectetur adipisicing.
							</a>
						</li>
						<li className="my-4 mx-4 ">
							<a href="#" className="hover:text-gray-400">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
								illum autem fuga aliquam, id modi
							</a>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default MainMenu;
