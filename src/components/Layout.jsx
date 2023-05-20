import MainEditor from './MainEditor';
import Menu from './Menu';
import React from 'react';
import SearchBar from './Search';

function Layout() {
	return (
		// CONTAINER ---
		<div class="xl:max-w-screen-xl w-fit mx-auto lg:max-w-screen-xl bg-yellow-   mb-20 outline-deb bg-white rounded-2xl">
			{/* ---------- MENU ---------- */}
			<div class="p-5 flex rounded-2xl justify-between outline-d items-center my-4  bg-purple-400">
				<h1 class="text-4xl">😂</h1>

				<div class="hidden md:block">Lorem ipsum dolor sit amet.</div>

				<div class="flex">
					<div>
						<p class="hidden md:block">Lorem, ipsum.</p>
					</div>
					<nav>
						<Menu />
					</nav>
				</div>
			</div>
			{/* ------------ MAIN EDITOR ------------------- */}
			{/* grid-rows-3   */}
			<div class="grid gap-4 w-full md:grid-cols-3 md:grid-rows bg-white">
				{/* xl:max-w-screen-xl lg:max-w-screen-xl */}
				<div class="px-5 md:col-span-2 col-span bg-green-800 rounded-2xl">
					<div>
						<MainEditor />
					</div>
				</div>
				{/* ------------- SEARCH THEME AREA --------------- */}
				<div class="px-5 col-span bg-blue-400 overflow-n w-fit rounded-2xl">
					<div className="">
						<h3 class="pt-5 pb-4 text font-small text-2xl border-solid border-blue-700 border-b- w-f">
							Search Theme
						</h3>
						{/* className="bg-gradient-to-l from-blue-900 to-blue-600 border- border-
						 pb-2 rounded-xl" */}
						<div>
							<SearchBar />
						</div>
					</div>
					<p className="py-10">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
						doloribus dignissimos corporis nihil voluptatum nulla autem eius
						fuga eveniet architecto enim ea unde natus molestiae nemo velit sed
						debitis fugit iure earum minus. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Cupiditate ratione eius quos quae
						obcaecati, corporis nisi quam iste alias labore possimus illo
						doloremque doloribus tempore voluptas rem veniam? Vero assumenda
						nesciunt tempora magnam ab et, commodi omnis cum sint corporis sunt?
						Tenetur pariatur impedit officia sapiente totam, deleniti laborum
						magnam ipsam a ea, commodi hic. Ut cum debitis velit? Architecto
						expedita, quibusdam pariatur magnam deserunt distinctio labore ullam
						repellat dolorem facilis, quasi atque ab voluptatum? Expedita culpa
						omnis officiis enim. Lorem ipsum corporis suscipit maxime accusamus?
						Voluptas cupiditate sequi ducimus quas dicta possimus voluptatem,
						est illum! Sed distinctio in placeat molestiae ipsa voluptas totam
						eveniet excepturi repellendus maiores recusandae, velit adipisci
						corporis
					</p>
				</div>
				{/* <div class="col-span  bg-green-500">Box 3</div> */}
			</div>
		</div>
	);
}

export default Layout;
