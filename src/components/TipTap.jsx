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
		<div className="sticky top-0 flex z-10 mt- justify-between content-center bg-gradient-to-r from-gray-700 via-gray-900 to-black p-4 rounded-xl">
			{/* items-center justify-center w-2/2 */}
			{/* xl:max-w-screen-xl lg:max-w-screen-xl */}
			{/* <div className="bg-gray-400 h-10 flex flex-wrap mt-10 gap-x-4 gap-y-8 bl"></div> */}
			{/*  mt-10 pt-2 / w-[100%] xl:h-[60px] lg:h[60px] py-[10px] pl-[2px] pr-[10px] items-center    */}
			{/* <div className="justify-between flex items-start"> */}

			{/* flex flex-wrap */}
			{/* lg:block */}
			{/* <div className="flex"> */}
			<div className="flex">
				{/*text-sm lg:text-sm lg:text-lg xl:text-2xl lg:text-xl md:text-3xl lg:text-4xl */}
				{/* className="" */}
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : 'text-gray-400'}>
						<FaBold className="text-sm xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						className={
							editor.isActive('italic') ? 'is-active' : 'text-gray-400'
						}>
						<FaItalic className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						disabled={!editor.can().chain().focus().toggleStrike().run()}
						className={
							editor.isActive('strike') ? 'is-active' : 'text-gray-400'
						}>
						<FaStrikethrough className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCode().run()}
						disabled={!editor.can().chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'is-active' : 'text-gray-400'}>
						<FaCode className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>

				<div className="editor-icons">
					<button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						// disabled={!editor.can().chain().focus().toggleCode().run()}
						className={
							editor.isActive('heading', { level: 1 })
								? 'is-active'
								: 'text-gray-400'
						}>
						<FaHeading className="text-sm xl:text-2xl lg:text-xl" />
					</button>
				</div>

				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={
							editor.isActive('bulletList') ? 'is-active' : 'text-gray-400'
						}>
						<FaListUl className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={
							editor.isActive('orderedList') ? 'is-active' : 'text-gray-400'
						}>
						<GoListOrdered className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={
							editor.isActive('codeBlock') ? 'is-active' : 'text-gray-400'
						}>
						<RiFileCodeLine className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						className={
							editor.isActive('blockquote') ? 'is-active' : 'text-gray-400'
						}>
						<GrBlockQuote className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={
							editor.isActive('underline') ? 'is-active' : 'text-gray-400'
						}>
						<FaUnderline className="text-sm  xl:text-2xl lg:text-xl" />
					</button>
				</div>
			</div>
			{/* UNDO - REDO */}
			<div className=" ">
				{/* flex justify-between */}
				{/* flex  p-2 mt-10 bg-gray-4 oline-debug bg-debug */}
				<div className="flex bg-gray-4">
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
			{/* </div> */}

			{/* <div className="ml-auto flex"> */}
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
		<div className="bg-gray-600 h-[30rem] rounded-xl focus:border-none overflow-auto">
			{/* focus:outline-none focus:ring-none focus:ring-blue-500 */}
			<MenuBar editor={editor} />
			<EditorContent editor={editor} className="p-5 text-white z-0" />

			<style>
				{`.ProseMirror {
              background-color: transparent;
              border: none;
              outline: none; 
              resize: none;}`}
			</style>
		</div>
	);
};
