// import '../App.css';

import MainEditor from './MainEditor';
import Menu from './Menu';
import React from 'react';
import SearchBar from './Search';

function Layout() {
	return (
		<div class="xl:max-w-screen-xl lg:max-w-screen-xl mx-auto bg-red-500">
			<div class="p-10 flex justify-between items-center">
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
			{/* grid-rows-3   */}
			<div class="grid w-full md:grid-cols-3 md:grid-rows bg-gray-500 mx-auto xl:max-w-screen-xl lg:max-w-screen-xl h-screen">
				<div class="px-10 md:col-span-2 col-span-1 bg-gray-200">
					<p>
						<MainEditor />
					</p>
				</div>
				<div class="px-10 col-span bg-blue-400 overflow-au">
					<div>
						<h3 class="pt-10 pb-4 text font-small text-2xl border-solid border-blue-700 border-b- ">
							Search Theme
						</h3>
						<div
							className="bg-gradient-to-l from-blue-900 to-blue-600 border- border-
						 pb-2 rounded-xl">
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
