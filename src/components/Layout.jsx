import React, { useState } from 'react';

import Menu from './Menu';
import SearchBar from './Search';
import { Tiptap } from './TipTap';

// import EditorOutput from './EditorOutput';

// outline-debug background-debug
function Layout() {
	const [description, setDescription] = useState('');

	return (
		// CONTAINER ---
		// min-h-screen
		<div className="mx-auto min-h-screen lg:max-w-screen-xl">
			{/* overflow-hidden */}
			{/* lg:max-w-screen-xl - lg:max-w-screen-xl  */}
			{/*   xl:mt-16  */}
			<div class="mx-a h-[700px]">
				{/* mb-20 */}
				{/* ---------- MENU ---------- */}
				<div class="p-5 text-[var(--primary)] flex justify-between items-center my-4 border-4 border-[var(--primary)] min-w-full ">
					<h1 class="text-4xl ">😂</h1>

					<div class="hidden md:block">Lorem ipsum dolor sit amad.</div>

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

				<div class="grid  grid-rows-3 gap-4 md:grid-cols-3">
					{/* md:grid-rows */}
					{/* xl:max-w-screen-xl lg:max-w-screen-xl h-[620px]*/}
					<div class="px-5 pt-5 md:col-span-2 border-4 border-[var(--primary)]  h-[600px] min-w-full ">
						{/*  */}
						<div>
							{/* ------- EDITOR --------- */}
							<Tiptap setDescription={setDescription} />
							{/* ------- OUTPUT --------- */}
							{/* <div className="mt-20 bg-gray-500 h-[30rem] rounded-xl focus:border-none overflow">
								<EditorOutput description={description} />
							</div> */}
							{/* ---------- BUTTONS ---------- */}
							<div className="flex justify-between mt-5">
								<div className="bg-[var(--secondary)] py-2 px-5 cursor-pointer">
									hi
								</div>
								<div className="flex gap-3">
									<div className="bg-[var(--secondary)] py-2 px-5 cursor-pointer">
										hey
									</div>
									<div className="bg-[var(--secondary)] py-2 px-5 cursor-pointer">
										hello
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ------------- SEARCH THEME AREA --------------- */}
					{/* h-[620px] */}
					<div class="col-span bg-[var(--secondary)] h-[600px] border-4 border-[var(--primary)]">
						<div className="px-5 py-6 bg-[var(--primary)]">
							<h3 class="pt-  border-[var(--primary)] text-white">
								{/* Search Theme */}
							</h3>
							{/* className="bg-gradient-to-l from-blue-900 to-blue-600 border- border-
						 pb-2 rounded-xl" */}
							<div className="">
								<SearchBar />
							</div>
						</div>
						<p className="pl-5 pt-4 pb-4 w- pr-5 h-[472px] overflow-auto mt-5 bg-white border-y-4 border-[var(--primary)]">
							{/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa. Cum sociis natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
							sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
							vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
							imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
							mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
							semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
							porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
							ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
							viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
							imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
							ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
							tellus eget condimentum rhoncus, sem quam semper libero, sit amet
							adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
							pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
							tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
							quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
							leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
							magna. Sed consequat, leo eget bibendum sodales, augue velit
							cursus nunc, quis gravida magna mi a libero. Fusce vulputate
							eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis
							sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras
							ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
							primis in faucibus orci luctus et ultrices posuere cubilia Curae;
							In ac dui quis mi consectetuer lacinia. Nam pretium turpis et
							arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
							iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu,
							accumsan a, consectetuer eget, posuere ut, mauris. Praesent
							adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy
							metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut
							eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit
							amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec
							mollis hendrerit risus. Phasellus nec sem in justo pellentesque
							facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.
							Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
							Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
							imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
							Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.
							Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
							faucibus orci luctus et ultrices posuere cubilia Curae; Sed
							aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
							placerat dolor lectus quis orci. Phasellus consectetuer vestibulum
							elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
							vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio.
							Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
							nisi, condimentum viverra felis nunc et lorem. Sed magna purus,
							fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis
							lacus. Quisque libero metus, condimentum nec, tempor a, commodo
							mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce
							fermentum. Nullam cursus lacinia erat. Praesent blandit laoreet
							nibh. Fusce convallis metus id felis luctus adipiscing.
							Pellentesque egestas, neque sit amet convallis pulvinar, justo
							nulla eleifend augue, ac auctor orci leo non est. Quisque id mi.
							Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus.
							Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam
							leo. Praesent egestas neque eu enim. In hac habitasse platea
							dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales
							aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam
							ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed
							augue ipsum, egestas nec, vestibulum et, malesuada adipiscing,
							dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi
							congue nunc, vitae euismod ligula urna in dolor. Mauris
							sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc
							interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum
							vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.
							Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget
							egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut
							lacus. Fusce vel dui. Sed */}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;
