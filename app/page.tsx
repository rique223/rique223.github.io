'use client';

import { useState, useEffect, useRef } from 'react';
import Terminal from './Components/Terminal';
import { fileSystem } from './Utils/fs';

export default function Home() {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState<string[]>([
		'Welcome to Henrique Guimarães Ribeiro\'s portfolio. Type "help" for available commands.',
	]);
	const [currentDirectory, setCurrentDirectory] = useState('/');
	const [darkMode, setDarkMode] = useState(true);

	const terminalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [output]);

	const handleCommand = (command: string) => {
		const [cmd, ...args] = command.trim().split(' ');
		let newOutput = '';

		switch (cmd.toLowerCase()) {
			case 'cd':
				const newDir = args[0] ? (currentDirectory === '/' ? `/${args[0]}` : `${currentDirectory}/${args[0]}`) : '/';
				if (fileSystem[newDir]) {
					setCurrentDirectory(newDir);
					newOutput = `Changed directory to ${newDir}`;
				} else {
					newOutput = `Directory not found: ${newDir}`;
				}
				break;
			case 'ls':
				if (currentDirectory === '/') {
					newOutput = Object.keys(fileSystem[currentDirectory]).join('\n');
				} else {
					newOutput = Object.keys(fileSystem[currentDirectory]).includes('info') ? 'info' : 'No files found';
				}
				break;
			case 'man':
				const topic = args[0] || 'info';
				if (fileSystem[currentDirectory] && fileSystem[currentDirectory][topic]) {
					newOutput = fileSystem[currentDirectory][topic];
				} else {
					newOutput = `No manual entry for ${topic}`;
				}
				break;
			case 'curl':
				const url = args[0];
				if (url) {
					window.open(url, '_blank');
					newOutput = `Opening ${url} in a new tab`;
				} else {
					newOutput = 'Usage: curl <url>';
				}
				break;
			case 'help':
				newOutput = 'Available commands: cd, ls, man, curl, help, clear, toggle-theme';
				break;
			case 'clear':
				setOutput([]);
				return;
			case 'toggle-theme':
				setDarkMode(!darkMode);
				newOutput = `Switched to ${darkMode ? 'light' : 'dark'} mode`;
				break;
			default:
				newOutput = `Command not found: ${cmd}`;
		}

		setOutput([...output, `$ ${command}`, newOutput]);
	};

	return (
		<div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-gray-900'} flex justify-center items-center`}>
			<Terminal
				input={input}
				setInput={setInput}
				output={output}
				handleCommand={handleCommand}
				currentDirectory={currentDirectory}
				darkMode={darkMode}
				terminalRef={terminalRef}
			/>
		</div>
	);
}
