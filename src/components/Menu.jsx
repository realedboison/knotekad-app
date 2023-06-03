import { useEffect, useRef, useState } from 'react';

import { GrMenu } from 'react-icons/Gr';

// import Menuone from '../assets/menuthree.svg';

const MainMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	// z-30 absolute h-[580px] xl:w-[1240px] lg:w-[1090px] mx-auto top-[114px] xl:left-[-1175px] lg:left-[-1020px] right-[-21px]  bg-gray-800 text-white transform
	// lg:max-w-screen-xl

	// 'block' : 'hidden'
	const className = `${
		isOpen ? 'visible' : 'invisible'
	} z-30 absolute h-[580px] xl:w-[450px] left-[-350px] mx-auto top-[114px] right-80  bg-[var(--secondary)] border-2 border-[var(--primary)] text-white transform ${
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
					<GrMenu size={60} className="text-red-500" />
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="60"
						height="60">
						<path
							d="M5 8 A 2.0002 2.0002 0 1 0 5 12L45 12 A 2.0002 2.0002 0 1 0 45 8L5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27L45 27 A 2.0002 2.0002 0 1 0 45 23L5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42L45 42 A 2.0002 2.0002 0 1 0 45 38L5 38 z"
							fill="#000000"
						/>
					</svg> */}
					{/* <img src={Menuone} alt="" /> */}
				</div>
			</button>
			{/* Menu items */}
			{/* w-[480px] h-[900px] */}
			<div className={className}>
				<ul className="list-none flex flex-col items-center justify-center h-1/5">
					{/* h-2/2 */}
					<li className="my-2">
						<a href="#" className="hover:text-gray-400">
							Item 1
						</a>
					</li>
					<li className="my-2">
						<a href="#" className="hover:text-gray-400">
							Item 2
						</a>
					</li>
					<li className="my-2">
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
