import '../App.css';

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
		<div className="flex w-2/2 p-2 mt-10 items-center justify-center bg-gray-400 outline-debug">
			{/* xl:max-w-screen-xl lg:max-w-screen-xl */}
			{/* <div className="bg-gray-400 h-10 flex flex-wrap mt-10 gap-x-4 gap-y-8 bl"></div> */}
			{/*  mt-10 pt-2 / w-[100%] xl:h-[60px] lg:h[60px] py-[10px] pl-[2px] pr-[10px] items-center  border-solid border-black border-2 rounded-md  */}
			{/* <div className="justify-between flex items-start"> */}

			{/* flex flex-wrap */}
			{/* lg:block */}
			<div className="flex justify-center">
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : 'text-gray-400'}>
						<FaBold size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						className={
							editor.isActive('italic') ? 'is-active' : 'text-gray-400'
						}>
						<FaItalic size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						disabled={!editor.can().chain().focus().toggleStrike().run()}
						className={
							editor.isActive('strike') ? 'is-active' : 'text-gray-400'
						}>
						<FaStrikethrough size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCode().run()}
						disabled={!editor.can().chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'is-active' : 'text-gray-400'}>
						<FaCode size={22} />
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
						<FaHeading size={22} />
					</button>
				</div>

				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={
							editor.isActive('bulletList') ? 'is-active' : 'text-gray-400'
						}>
						<FaListUl size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={
							editor.isActive('orderedList') ? 'is-active' : 'text-gray-400'
						}>
						<GoListOrdered size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={
							editor.isActive('codeBlock') ? 'is-active' : 'text-gray-400'
						}>
						<RiFileCodeLine size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						className={
							editor.isActive('blockquote') ? 'is-active' : 'text-gray-400'
						}>
						<GrBlockQuote size={22} />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={
							editor.isActive('underline') ? 'is-active' : 'text-gray-400'
						}>
						<FaUnderline size={22} />
					</button>
				</div>
				<div className="flex ml-10">
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().undo().run()}
							disabled={!editor.can().chain().focus().undo().run()}>
							<FaUndo size={22} />
						</button>
					</div>
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().redo().run()}
							disabled={!editor.can().chain().focus().redo().run()}>
							<FaRedo size={22} />
						</button>
					</div>
				</div>
			</div>

			{/* <div className="ml-auto flex"> */}
		</div>
	);
};

const TipTap = () => {
	const editor = useEditor({
		extensions: [StarterKit, Underline],
		content: ` `,
	});

	return (
		<div>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default TipTap;
