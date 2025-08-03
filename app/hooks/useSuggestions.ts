import { useEffect, useState } from "react";

import { getIntelligentSuggestions, AVAILABLE_COMMANDS } from "../Utils/commands";
import { getRecentCommands } from "../Utils/terminalHelpers";

export const useSuggestions = (
    input: string,
    currentDirectory: string,
    commandHistory: string[]
) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        if (input.length > 0) {
            const intelligentSuggestions = getIntelligentSuggestions(
                input,
                currentDirectory,
                AVAILABLE_COMMANDS
            );
            setSuggestions(intelligentSuggestions);
            setShowSuggestions(intelligentSuggestions.length > 0);
            setSelectedIndex(-1);
        } else {
            setShowSuggestions(false);
            setSelectedIndex(-1);
        }
    }, [input, currentDirectory]);

    const showCommandHistory = () => {
        const recentCommands = getRecentCommands(commandHistory, 10);
        setSuggestions(recentCommands);
        setShowSuggestions(true);
        setSelectedIndex(recentCommands.length - 1);
    };

    const hideSuggestions = () => {
        setShowSuggestions(false);
        setSelectedIndex(-1);
    };

    const selectSuggestion = (index: number) => {
        setSelectedIndex(index);
    };

    const navigateUp = () => {
        if (selectedIndex <= 0) {
            setSelectedIndex(suggestions.length - 1);
        } else {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    const navigateDown = () => {
        if (selectedIndex >= suggestions.length - 1) {
            setSelectedIndex(-1);
        } else {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    return {
        suggestions,
        showSuggestions,
        selectedIndex,
        showCommandHistory,
        hideSuggestions,
        selectSuggestion,
        navigateUp,
        navigateDown,
    };
};