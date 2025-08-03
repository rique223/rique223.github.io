import { useState } from "react";

import { findCommonPrefix } from "../Utils/terminalHelpers";

interface UseKeyboardNavigationProps {
    input: string;
    setInput: (input: string) => void;
    commandHistory: string[];
    setCommandHistory: (history: string[]) => void;
    handleCommand: (command: string) => void;
    suggestions: string[];
    showSuggestions: boolean;
    selectedIndex: number;
    showCommandHistory: () => void;
    hideSuggestions: () => void;
    navigateUp: () => void;
    navigateDown: () => void;
}

export const useKeyboardNavigation = ({
    input,
    setInput,
    commandHistory,
    setCommandHistory,
    handleCommand,
    suggestions,
    showSuggestions,
    selectedIndex,
    showCommandHistory,
    hideSuggestions,
    navigateUp,
    navigateDown,
}: UseKeyboardNavigationProps) => {
    const [historyIndex, setHistoryIndex] = useState(-1);

    const resetHistory = () => {
        setHistoryIndex(-1);
    };

    const selectCurrentSuggestion = () => {
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
            setInput(suggestions[selectedIndex]);
            hideSuggestions();
            return true;
        }
        return false;
    };

    const submitCommand = () => {
        if (input.trim()) {
            setCommandHistory([...commandHistory, input]);
            handleCommand(input);
            setInput("");
            resetHistory();
            hideSuggestions();
        }
    };

    const handleArrowUp = (e: React.KeyboardEvent) => {
        e.preventDefault();
        
        if (!input.trim() && commandHistory.length > 0) {
            if (!showSuggestions) {
                showCommandHistory();
            } else {
                navigateUp();
            }
        } else if (showSuggestions && suggestions.length > 0) {
            navigateUp();
        } else {
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        }
    };

    const handleArrowDown = (e: React.KeyboardEvent) => {
        e.preventDefault();
        
        if (showSuggestions && suggestions.length > 0) {
            navigateDown();
        } else {
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        }
    };

    const handleEnter = (e: React.KeyboardEvent) => {
        if (selectCurrentSuggestion()) {
            e.preventDefault();
        }
    };

    const handleEscape = (e: React.KeyboardEvent) => {
        if (showSuggestions) {
            e.preventDefault();
            hideSuggestions();
        }
    };

    const handleTab = (e: React.KeyboardEvent) => {
        e.preventDefault();
        
        if (selectCurrentSuggestion()) {
            return;
        }
        
        if (suggestions.length === 1) {
            setInput(suggestions[0]);
            hideSuggestions();
        } else if (suggestions.length > 1) {
            const commonPrefix = findCommonPrefix(suggestions);
            if (commonPrefix.length > input.length) {
                setInput(commonPrefix);
            }
        }
    };

    const handleTyping = (e: React.KeyboardEvent) => {
        if (showSuggestions && input.length === 0 && e.key.length === 1) {
            hideSuggestions();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowUp":
                handleArrowUp(e);
                break;
            case "ArrowDown":
                handleArrowDown(e);
                break;
            case "Enter":
                handleEnter(e);
                break;
            case "Escape":
                handleEscape(e);
                break;
            case "Tab":
                handleTab(e);
                break;
            default:
                handleTyping(e);
        }
    };

    return {
        handleKeyDown,
        selectCurrentSuggestion,
        submitCommand,
        resetHistory,
    };
};