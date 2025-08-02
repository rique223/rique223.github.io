import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";


interface TerminalProps {
    input: string;
    setInput: (input: string) => void;
    output: string[];
    handleCommand: (command: string) => void;
    currentDirectory: string;
    darkMode: boolean;
    terminalRef: React.RefObject<HTMLDivElement | null>;
    commandHistory: string[];
    setCommandHistory: (history: string[]) => void;
    toggleDarkMode: () => void;
}

const Terminal: React.FC<TerminalProps> = ({
    input,
    setInput,
    output,
    handleCommand,
    currentDirectory,
    darkMode,
    terminalRef,
    commandHistory,
    setCommandHistory,
    toggleDarkMode,
}) => {
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (input.length > 0) {
            const filtered = [
                "ls",
                "cd",
                "cat",
                "help",
                "clear",
                "history",
                "browse",
                "tree",
            ].filter((cmd) => cmd.startsWith(input.toLowerCase()));
            setSuggestions(filtered);
            setShowSuggestions(filtered.length > 0 && input.length > 0);
        } else {
            setShowSuggestions(false);
        }
    }, [input]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setCommandHistory([...commandHistory, input]);
            handleCommand(input);
            setInput("");
            setHistoryIndex(-1);
            setShowSuggestions(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (suggestions.length === 1) {
                setInput(suggestions[0]);
                setShowSuggestions(false);
            }
        }
    };

    const formatOutput = (line: string) => {
        if (line.includes("➜") || line.startsWith("/")) {
            return (
                <span className={darkMode ? "text-emerald-400" : "text-emerald-600"}>{line}</span>
            );
        }
        if (line.includes("Error:") || line.includes("not found")) {
            return <span className={darkMode ? "text-red-400" : "text-red-600"}>{line}</span>;
        }
        if (line.includes("📧") || line.includes("📱") || line.includes("🔗")) {
            return <span className={darkMode ? "text-blue-300" : "text-blue-600"}>{line}</span>;
        }
        return line;
    };

    return (
        <div className="w-full max-w-7xl">
            <div
                className={`h-[80vh] font-mono ${
                    darkMode ? "bg-[#0a0a0a] text-gray-100" : "bg-white text-gray-800"
                } flex flex-col rounded-xl shadow-2xl ${
                    darkMode ? "border border-gray-700/30" : "border border-gray-300/60"
                } overflow-hidden backdrop-blur-sm`}
            >
                <div
                    className={`relative px-4 py-3 ${
                        darkMode
                            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-b border-gray-600/50"
                            : "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 border-b border-gray-300/60"
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-3">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors" />
                                </div>
                                <div className="h-4 w-px bg-gray-600 mx-2" />
                            </div>

                            <div className="flex items-center space-x-1">
                                <div
                                    className={`flex items-center rounded-lg px-6 py-1.5 border space-x-3 max-w-[250px] overflow-hidden ${
                                        darkMode
                                            ? "bg-gray-800/80 border-gray-600/30"
                                            : "bg-gray-50 border-gray-300/50"
                                    }`}
                                >
                                    <Image
                                        src="/ubuntu.svg"
                                        alt="Ubuntu logo"
                                        width={14}
                                        height={14}
                                        className="opacity-80"
                                    />
                                    <span
                                        className={`text-xs font-medium cursor-default ${darkMode ? "text-gray-200" : "text-gray-700"}`}
                                        style={{
                                            direction: "rtl",
                                            textAlign: "left",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {currentDirectory
                                            ? `henrique@HAL-9000:~/${currentDirectory}`
                                            : "~:henrique@HAL-9000"}
                                    </span>
                                </div>

                                <button
                                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200 group ${
                                        darkMode
                                            ? "bg-gray-700/50 hover:bg-gray-600/70 border-gray-600/30 hover:border-gray-500/50"
                                            : "bg-gray-100 hover:bg-gray-200 border-gray-300/50 hover:border-gray-400/60"
                                    }`}
                                >
                                    <svg
                                        className={`w-3 h-3 transition-colors ${
                                            darkMode
                                                ? "text-gray-400 group-hover:text-gray-200"
                                                : "text-gray-600 group-hover:text-gray-800"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400/50 hover:border-emerald-400 transition-colors">
                                <Image
                                    src="/avatar.jpg"
                                    alt="Henrique avatar"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button
                                onClick={toggleDarkMode}
                                className="p-1.5 rounded-md hover:bg-gray-600/50 transition-colors group"
                                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {darkMode ? (
                                    <svg
                                        className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={terminalRef}
                    className={`flex-1 overflow-y-auto p-6 backdrop-blur-sm ${
                        darkMode
                            ? "bg-gradient-to-b from-gray-900/50 to-gray-900/80"
                            : "bg-gradient-to-b from-gray-50/30 to-gray-100/50"
                    }`}
                >
                    {output.map((line, index) => (
                        <div
                            key={index}
                            className="whitespace-pre-wrap leading-relaxed mb-1 font-mono text-sm"
                        >
                            {formatOutput(line)}
                        </div>
                    ))}
                </div>

                <div className="relative">
                    {showSuggestions && suggestions.length > 0 && (
                        <div
                            className={`absolute bottom-full left-6 right-6 border rounded-lg mb-2 backdrop-blur-sm shadow-xl ${
                                darkMode
                                    ? "bg-gray-800/95 border-gray-600/50"
                                    : "bg-white/95 border-gray-300/60"
                            }`}
                        >
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className={`px-4 py-2 text-sm cursor-pointer first:rounded-t-lg last:rounded-b-lg ${
                                        darkMode
                                            ? "text-gray-300 hover:bg-gray-700/50"
                                            : "text-gray-700 hover:bg-gray-100/60"
                                    }`}
                                    onClick={() => {
                                        setInput(suggestion);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className={`flex items-center p-4 border-t ${
                            darkMode
                                ? "bg-gray-800/50 border-gray-600/30"
                                : "bg-gray-100/40 border-gray-300/50"
                        }`}
                    >
                        <div className="flex items-center space-x-3 flex-1">
                            <Image
                                src="/ubuntu.svg"
                                alt="Ubuntu logo"
                                width={16}
                                height={16}
                                className="opacity-80"
                            />
                            <span
                                className={`font-bold text-sm ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                            >
                                ➜
                            </span>
                            <span
                                className={`font-medium text-sm ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                            >
                                {currentDirectory ? `~/${currentDirectory}` : "~"}
                            </span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className={`flex-grow outline-none bg-transparent text-sm font-mono ${
                                    darkMode
                                        ? "text-gray-100 placeholder-gray-500"
                                        : "text-gray-800 placeholder-gray-400"
                                }`}
                                placeholder="Type a command..."
                                autoFocus
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-8 animate-bounce">
                <div className="flex flex-col items-center space-y-2 text-gray-400">
                    <span className="text-sm font-medium">Scroll down for website view</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
