import { EditorContent, useEditor } from '@tiptap/react';
import {
	FaBold,
	FaCode,
	FaHeading,
	FaItalic,
	FaListUl,
	FaRedo,
	FaStrikethrough,
	FaUnderline,
	FaUndo,
} from 'react-icons/fa';

import { GoListOrdered } from 'react-icons/Go';
import { GrBlockQuote } from 'react-icons/Gr';
import React from 'react';
import { RiFileCodeLine } from 'react-icons/Ri';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

const MenuBar = ({ editor }) => {
	// const isActive = editor.isActive('undo');
	if (!editor) {
		return null;
	}

	return (
		<div className="sticky xl:max-w-screen-xl lg:max-w-screen-xl top-0 flex z-10 mt- justify-between border-solid content-center p-4 border-2 border-b-[var(--primary)] border-t-white border-x-white bg-white">
			{/* bg-gradient-to-r from-gray-700 via-gray-900 to-black */}
			{/* items-center justify-center w-2/2 */}
			{/* xl:max-w-screen-xl lg:max-w-screen-xl */}
			{/* <div className="bg-[var(--primary)] h-10 flex flex-wrap mt-10 gap-x-4 gap-y-8 bl"></div> */}
			{/*  mt-10 pt-2 / w-[100%] xl:h-[60px] lg:h[60px] py-[10px] pl-[2px] pr-[10px] items-center    */}
			{/* <div className="justify-between flex items-start"> */}

			{/* flex flex-wrap */}
			{/* lg:block */}
			{/* <div className="flex"> */}
			<div className="flex flex-wrap">
				{/*text-sm lg:text-sm lg:text-lg xl:text-2xl lg:text-xl md:text-3xl lg:text-4xl */}
				{/* className="" */}
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						className={
							editor.isActive('bold') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaBold className="text-sm xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						className={
							editor.isActive('italic') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaItalic className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						disabled={!editor.can().chain().focus().toggleStrike().run()}
						className={
							editor.isActive('strike') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaStrikethrough className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCode().run()}
						disabled={!editor.can().chain().focus().toggleCode().run()}
						className={
							editor.isActive('code') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaCode className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>

				<div className="editor-icons">
					<button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						className={
							editor.isActive('heading', { level: 1 })
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<FaHeading className="text-sm xl:text-2xl lg:text-xl" />
					</button>
				</div>

				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={
							editor.isActive('bulletList')
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<FaListUl className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={
							editor.isActive('orderedList')
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<GoListOrdered className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={
							editor.isActive('codeBlock')
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<RiFileCodeLine className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						className={
							editor.isActive('blockquote')
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<GrBlockQuote className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={
							editor.isActive('underline')
								? 'is-active'
								: 'text-[var(--primary)]'
						}>
						<FaUnderline className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
			</div>
			{/* UNDO - REDO */}
			<div className=" ">
				{/* flex justify-between */}
				{/* flex  p-2 mt-10 bg-gray-4 oline-debug bg-debug */}
				<div className="flex text-[var(--primary)]">
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().undo().run()}
							disabled={!editor.can().chain().focus().undo().run()}>
							<FaUndo className="text-sm  xl:text-2xl lg:text-xl" />
						</button>
					</div>
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().redo().run()}
							disabled={!editor.can().chain().focus().redo().run()}>
							<FaRedo className="text-sm   xl:text-2xl lg:text-xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Tiptap = ({ setDescription }) => {
	const editor = useEditor({
		extensions: [StarterKit, Underline],
		content: ``,

		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			setDescription(html);
		},
	});

	return (
		<div className="bg-white h-[30rem] border-2 border-[var(--primary)] text-[var(--secondary)] focus:border-none overflow-auto ">
			{/* focus:outline-none focus:ring-none focus:ring-blue-500 */}
			<MenuBar editor={editor} />
			<EditorContent editor={editor} className="p-5 text-black z-0" />

			<p className="px-5 text-black">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
				quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
				arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
				Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
				dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
				tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
				enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
				Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
				imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
				ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
				eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
				sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
				hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
				vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
				amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
				sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
				bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
				libero. Fusce vulputate eleifend sapien. Vestibulum purus quam,
				scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in
				dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
				ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
				In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
				arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
				aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer
				eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper
				ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium
				libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam
				nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed
				lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo
				pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.
				Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
				Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
				imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed
				cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus
				accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci
				luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis
				porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis
				orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus,
				bibendum sed, posuere ac, mattis non, vulputate lorem. Morbi nec metus.
				Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat
				feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.
				Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor
				lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo
				mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce fermentum.
				Nullam cursus lacinia erat. Praesent blandit laoreet nibh. Fusce
				convallis metus id felis luctus adipiscing. Pellentesque egestas, neque
				sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci
				leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat
				lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum
				aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea
				dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam.
				Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum
				vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec,
				vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus
				nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna
				in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in
				odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec
				elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel
				mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget
				egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut
				lacus. Fusce vel dui. Sed
			</p>

			<style>
				{`.ProseMirror {
              background-color: none;
              border: none;
              outline: none; 
              resize: none;}`}
			</style>
		</div>
	);
};
