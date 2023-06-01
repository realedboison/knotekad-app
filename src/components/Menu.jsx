import { useEffect, useRef, useState } from 'react';

// import Menuone from '../assets/menuthree.svg';

const MainMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = event => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [menuRef]);

	return (
		<div className="relative" ref={menuRef}>
			{/* Menu button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="px-2 py-2 cursor-pointer ">
				<div className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="60"
						height="60">
						<path
							d="M5 8 A 2.0002 2.0002 0 1 0 5 12L45 12 A 2.0002 2.0002 0 1 0 45 8L5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27L45 27 A 2.0002 2.0002 0 1 0 45 23L5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42L45 42 A 2.0002 2.0002 0 1 0 45 38L5 38 z"
							fill="#000000"
						/>
					</svg>
					{/* <img src={Menuone} alt="" /> */}
				</div>
			</button>

			{/* Menu items */}
			<div
				className={`${
					isOpen ? 'visible' : 'invisible'
				} absolute h-[900px] w-[480px] top-[105px] right-[-40px] bg-gray-800 text-white transition duration-500 ease-in-out transform ${
					isOpen ? 'translate-y-0' : '-translate-y-0'
				}`}>
				<ul className="list-none flex flex-col items-center justify-center h-2/4">
					<li className="my-4">
						<a href="#" className="hover:text-gray-400">
							Item 1
						</a>
					</li>
					<li className="my-4">
						<a href="#" className="hover:text-gray-400">
							Item 2
						</a>
					</li>
					<li className="my-4">
						<a href="#" className="hover:text-gray-400">
							Item 3
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MainMenu;
