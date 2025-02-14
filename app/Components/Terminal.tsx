import type React from 'react';

interface TerminalProps {
	input: string;
	setInput: (input: string) => void;
	output: string[];
	handleCommand: (command: string) => void;
	currentDirectory: string;
	darkMode: boolean;
	terminalRef: React.RefObject<HTMLDivElement | null>;
}

const Terminal: React.FC<TerminalProps> = ({ input, setInput, output, handleCommand, currentDirectory, darkMode, terminalRef }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleCommand(input);
		setInput('');
	};

	return (
		<div className={`h-[87vh] container mx-auto p-4 font-mono ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-white text-gray-900'} flex flex-col rounded`}>
			<div ref={terminalRef} className='flex-1 overflow-y-auto mb-4 p-2'>
				{output.map((line, index) => (
					<div key={index} className='whitespace-pre-wrap'>
						{line}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className='flex'>
				<span className='mr-2'>{currentDirectory}$</span>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className={`flex-grow outline-none ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-white text-gray-900'}`}
					autoFocus
				/>
			</form>
		</div>
	);
};

export default Terminal;
