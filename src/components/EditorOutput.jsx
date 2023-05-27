import parser from 'html-react-parser';

const EditorOutput = ({ description }) => {
	return (
		<>
			<div className="">{parser(description)}</div>
		</>
	);
};

export default EditorOutput;
