import '../App.css';

import { EditorContent, useEditor } from '@tiptap/react';
import {
	FaBold,
	FaCode,
	FaHeading,
	FaItalic,
	FaListUl,
	FaStrikethrough,
} from 'react-icons/fa';

import { GoListOrdered } from 'react-icons/Go';
import React from 'react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="bg-gray-400 my-10 p-2 flex flex-wrap justify-center items-center">
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? 'is-active' : 'text-gray-400'}>
					<FaBold size={30} />
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : 'text-gray-400'}>
					<FaItalic size={30} />
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : 'text-gray-400'}>
					<FaStrikethrough size={30} />
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleCode().run()}
					disabled={!editor.can().chain().focus().toggleCode().run()}
					className={editor.isActive('code') ? 'is-active' : 'text-gray-400'}>
					<FaCode size={30} />
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
					<FaHeading size={30} />
				</button>
			</div>

			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={
						editor.isActive('bulletList') ? 'is-active' : 'text-gray-400'
					}>
					<FaListUl size={30} />
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={
						editor.isActive('orderedList') ? 'is-active' : 'text-gray-400'
					}>
					<GoListOrdered size={30} />
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					className={editor.isActive('codeBlock') ? 'is-active' : ''}>
					code block
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					className={editor.isActive('blockquote') ? 'is-active' : ''}>
					blockquote
				</button>
			</div>
			<div className="editor-icons">
				<button
					onClick={() => editor.chain().focus().setHorizontalRule().run()}>
					horizontal rule
				</button>
			</div>
			<div className="editor-icons">
				<button onClick={() => editor.chain().focus().setHardBreak().run()}>
					hard break
				</button>
			</div>
			<div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().undo().run()}
						disabled={!editor.can().chain().focus().undo().run()}>
						undo
					</button>
				</div>
				<div className="editor-icons">
					<button
						onClick={() => editor.chain().focus().undo().run()}
						disabled={!editor.can().chain().focus().undo().run()}>
						undo
					</button>
				</div>
			</div>

			{/* ------------------------------------------------------------------ */}
			<div className="not needed">
				<button
					onClick={() => editor.chain().focus().setColor('#958DF1').run()}
					className={
						editor.isActive('textStyle', { color: '#958DF1' })
							? 'is-active'
							: ''
					}>
					purple
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
					className={
						editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
					}>
					h6
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={
						editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
					}>
					h4
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
					}
					className={
						editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
					}>
					h5
				</button>
				<button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
					clear marks
				</button>
				<button onClick={() => editor.chain().focus().clearNodes().run()}>
					clear nodes
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={editor.isActive('paragraph') ? 'is-active' : ''}>
					paragraph
				</button>
			</div>
			{/* ------------------------------------------------------------------ */}
		</div>
	);
};

const TipTap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
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
