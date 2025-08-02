export const formatOutputLine = (line: string) => {
    if (line.includes("➜") || line.startsWith("/")) {
        return { type: "success", text: line };
    }
    if (line.includes("Error:") || line.includes("not found")) {
        return { type: "error", text: line };
    }
    if (line.includes("📧") || line.includes("📱") || line.includes("🔗")) {
        return { type: "accent", text: line };
    }
    return { type: "default", text: line };
};

export const getRecentCommands = (commandHistory: string[], limit = 10) => {
    return commandHistory.slice(-limit);
};

export const findCommonPrefix = (suggestions: string[]) => {
    return suggestions.reduce((prefix, suggestion) => {
        let i = 0;
        while (i < prefix.length && i < suggestion.length && 
               prefix[i].toLowerCase() === suggestion[i].toLowerCase()) {
            i++;
        }
        return prefix.substring(0, i);
    });
};

export const scrollElementIntoView = (element: HTMLElement) => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
    });
};