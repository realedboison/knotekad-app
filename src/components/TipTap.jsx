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
		<div className="tiptap-navbar">
			<div className="flex flex-wrap">
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						className={
							editor.isActive('bold') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaBold className="text-sm lg:text-xl xl:text-2xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						className={
							editor.isActive('italic') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaItalic className="text-sm lg:text-xl xl:text-2xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						disabled={!editor.can().chain().focus().toggleStrike().run()}
						className={
							editor.isActive('strike') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaStrikethrough className="text-sm lg:text-xl xl:text-2xl" />
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().toggleCode().run()}
						disabled={!editor.can().chain().focus().toggleCode().run()}
						className={
							editor.isActive('code') ? 'is-active' : 'text-[var(--primary)]'
						}>
						<FaCode className="text-sm lg:text-xl xl:text-2xl" />
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
						<FaHeading className="text-sm lg:text-xl xl:text-2xl" />
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
						<FaListUl className="text-sm lg:text-xl xl:text-2xl" />
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
						<GoListOrdered className="text-sm lg:text-xl xl:text-2xl" />
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
						<RiFileCodeLine className="text-sm lg:text-xl xl:text-2xl" />
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
						<GrBlockQuote className="text-sm lg:text-xl xl:text-2xl" />
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
						<FaUnderline className="text-sm lg:text-xl xl:text-2xl" />
					</button>
				</div>
			</div>
			{/* UNDO - REDO */}
			<div className=" ">
				<div className="flex text-[var(--primary)]">
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().undo().run()}
							disabled={!editor.can().chain().focus().undo().run()}>
							<FaUndo className="text-sm lg:text-xl xl:text-2xl" />
						</button>
					</div>
					<div className="editor-icons">
						<button
							onClick={() => editor.chain().focus().redo().run()}
							disabled={!editor.can().chain().focus().redo().run()}>
							<FaRedo className="text-sm lg:text-xl xl:text-2xl" />
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
		<div className="h-[30rem] overflow-auto border-2 border-[var(--primary)] bg-white text-[var(--secondary)] focus:border-none ">
			<MenuBar editor={editor} />
			<EditorContent
				editor={editor}
				className="text-medium z-0 p-5 text-gray-800 xl:text-xl"
			/>

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
