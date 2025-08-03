import type React from "react";

import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { useSuggestions } from "../../hooks/useSuggestions";
import { ScrollIndicator } from "./ScrollIndicator";

import { TerminalContent } from "./TerminalContent";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalInput } from "./TerminalInput";



interface TerminalProps {
    input: string;
    setInput: (input: string) => void;
    output: string[];
    handleCommand: (command: string) => void;
    currentDirectory: string;
    terminalRef: React.RefObject<HTMLDivElement | null>;
    commandHistory: string[];
    setCommandHistory: (history: string[]) => void;
}

const Terminal: React.FC<TerminalProps> = ({
    input,
    setInput,
    output,
    handleCommand,
    currentDirectory,
    terminalRef,
    commandHistory,
    setCommandHistory,
}) => {
    const suggestionHook = useSuggestions(input, currentDirectory, commandHistory);
    
    const keyboardHook = useKeyboardNavigation({
        input,
        setInput,
        commandHistory,
        setCommandHistory,
        handleCommand,
        suggestions: suggestionHook.suggestions,
        showSuggestions: suggestionHook.showSuggestions,
        selectedIndex: suggestionHook.selectedIndex,
        showCommandHistory: suggestionHook.showCommandHistory,
        hideSuggestions: suggestionHook.hideSuggestions,
        navigateUp: suggestionHook.navigateUp,
        navigateDown: suggestionHook.navigateDown,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (keyboardHook.selectCurrentSuggestion()) {
            return;
        }
        
        keyboardHook.submitCommand();
    };

    const handleSuggestionSelect = (suggestion: string) => {
        setInput(suggestion);
        suggestionHook.hideSuggestions();
    };

    return (
        <div className="w-full max-w-[1536px]">
            <div className="h-[70vh] md:h-[80vh] font-mono flex flex-col rounded-xl shadow-2xl overflow-hidden terminal-bg terminal-border">
                <TerminalHeader currentDirectory={currentDirectory} />
                
                <TerminalContent output={output} terminalRef={terminalRef} />
                
                <TerminalInput
                    input={input}
                    setInput={setInput}
                    currentDirectory={currentDirectory}
                    onSubmit={handleSubmit}
                    onKeyDown={keyboardHook.handleKeyDown}
                    suggestions={suggestionHook.suggestions}
                    showSuggestions={suggestionHook.showSuggestions}
                    selectedIndex={suggestionHook.selectedIndex}
                    onSelectSuggestion={handleSuggestionSelect}
                    onHoverSuggestion={suggestionHook.selectSuggestion}
                />
            </div>
            
            <ScrollIndicator />
        </div>
    );
};

export default Terminal;
