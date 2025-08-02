import Image from "next/image";

import { useResponsive } from "../contexts/ResponsiveContext";

import { SuggestionList } from "./SuggestionList";

interface TerminalInputProps {
    input: string;
    setInput: (input: string) => void;
    currentDirectory: string;
    onSubmit: (e: React.FormEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    suggestions: string[];
    showSuggestions: boolean;
    selectedIndex: number;
    onSelectSuggestion: (suggestion: string) => void;
    onHoverSuggestion: (index: number) => void;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
    input,
    setInput,
    currentDirectory,
    onSubmit,
    onKeyDown,
    suggestions,
    showSuggestions,
    selectedIndex,
    onSelectSuggestion,
    onHoverSuggestion,
}) => {
    const { isMobile } = useResponsive();

    return (
        <div className="relative">
            {showSuggestions && suggestions.length > 0 && (
                <SuggestionList
                    suggestions={suggestions}
                    selectedIndex={selectedIndex}
                    onSelect={onSelectSuggestion}
                    onHover={onHoverSuggestion}
                />
            )}

            <form
                onSubmit={onSubmit}
                className="flex items-center p-4 border-t terminal-input-area"
            >
                <div className="flex items-center space-x-3 flex-1">
                    <Image
                        src="/ubuntu.svg"
                        alt="Ubuntu logo"
                        width={16}
                        height={16}
                        className="opacity-80"
                    />
                    <span className="font-bold text-sm text-success">➜</span>
                    <span className="font-medium text-sm text-accent-blue">
                        {currentDirectory ? `~/${currentDirectory}` : "~"}
                    </span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="flex-grow outline-none bg-transparent text-sm font-mono text-content-primary placeholder-text-muted"
                        placeholder="Type a command..."
                        autoFocus={!isMobile}
                    />
                </div>
            </form>
        </div>
    );
};