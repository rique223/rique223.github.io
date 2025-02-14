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
		<div
			className={`h-[65vh] container mx-auto font-mono ${
				darkMode ? 'bg-black text-green-400' : 'bg-white text-gray-900'
			} flex flex-col rounded-lg border border-[#3E3E3E]`}
		>
			<div ref={terminalRef} className='flex-1 overflow-y-auto p-4'>
				{output.map((line, index) => (
					<div key={index} className='whitespace-pre-wrap'>
						{line}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className='flex border-t border-[#191919] p-4'>
				<span className='mr-2 text-[#FF8FFD]'>{currentDirectory}</span>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className={`flex-grow outline-none ${darkMode ? 'bg-black text-[#E5E5E5]' : 'bg-white text-gray-900'} text-[13px]`}
					autoFocus
				/>
			</form>
		</div>
	);
};

export default Terminal;
