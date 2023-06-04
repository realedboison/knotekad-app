import React, { useState } from 'react';
import { RiDeleteBinLine, RiSave3Line } from 'react-icons/Ri';

import { FaRegEdit } from 'react-icons/fa';
import Knotekad from '../assets/knotekad.png';
import LogoSub from '../assets/logo-sub.png';
import Menu from './Menu';
import SearchBar from './Search';
import { Tiptap } from './TipTap';

// import EditorOutput from './EditorOutput';

// outline-debug background-debug
function Layout() {
	const [description, setDescription] = useState('');

	return (
		<div className="mx-auto h-min lg:max-w-screen-xl">
			<main className="mx-auto h-[700px]">
				{/* ---------- MENU ---------- */}
				<div className="nav-bar">
					<img
						src={LogoSub}
						alt="Logo"
						className=" w-20 cursor-pointer pl-[2px]"
					/>

					<img src={Knotekad} alt="knotekad" className="w-50 hidden md:block" />

					<div className="flex">
						<nav>
							<Menu />
						</nav>
					</div>
				</div>
				{/* ------------ MAIN EDITOR ------------------- */}

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
					<div className="h-[600px] border-2 border-[var(--primary)] px-5 pt-5 md:col-span-2">
						{/*  */}
						<div>
							{/* ------- EDITOR --------- */}
							<div>
								<Tiptap setDescription={setDescription} />

								<div className="flex justify-between border-2 border-t-0 border-[var(--primary)]">
									<button className="button-delete border-l-0">
										<div className="flex gap-2">
											<RiDeleteBinLine size={30} />
											<p className="hidden text-2xl font-medium uppercase md:block">
												delete
											</p>
										</div>
									</button>
									{/* md:gap-3 */}

									<button className="button-edit">
										<div className="flex gap-2">
											<FaRegEdit size={30} />
											<p className="hidden text-2xl font-medium uppercase md:block ">
												edit
											</p>
										</div>
									</button>
									<button className="button-save">
										<div className="flex gap-2">
											<RiSave3Line size={30} />
											<p className="hidden text-2xl font-medium uppercase md:block">
												Save
											</p>
										</div>
									</button>
								</div>
							</div>
							{/* ------- OUTPUT --------- */}
							{/* <div className="mt-20 bg-gray-500 h-[30rem] rounded-xl focus:border-none overflow">
								<EditorOutput description={description} />
							</div> */}
							{/* ---------- BUTTONS ---------- */}
						</div>
					</div>

					{/* ------------- SEARCH THEME AREA --------------- */}
					{/* h-[620px] */}
					<div className="col-span h-[600px] border-2 border-[var(--primary)] bg-[var(--secondary)]">
						<div className="bg-[var(--primary)] px-5 py-6">
							<h3 className="pt-  border-[var(--primary)] text-gray-800"></h3>
							<div className="">
								<SearchBar />
							</div>
						</div>
						<p className="search-main"></p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Layout;
