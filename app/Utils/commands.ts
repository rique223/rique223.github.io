import { fileSystem } from './fs';

function levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];
    const len1 = str1.length;
    const len2 = str2.length;

    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[len1][len2];
}

export function findSimilarCommand(input: string, commands: string[]): string | null {
    const lowercaseInput = input.toLowerCase();
    let bestMatch: string | null = null;
    let bestDistance = Infinity;
    const maxDistance = Math.min(3, Math.ceil(input.length * 0.6));

    for (const command of commands) {
        const distance = levenshteinDistance(lowercaseInput, command.toLowerCase());

        if (distance < bestDistance && distance <= maxDistance) {
            bestDistance = distance;
            bestMatch = command;
        }
    }

    return bestMatch;
}

export function getAvailableItems(currentDirectory: string, command: string): string[] {
    const currentFS = fileSystem[currentDirectory || "/"];
    if (!currentFS) return [];

    const items = Object.keys(currentFS).filter(key => key !== ".." && key !== "info");
    
    switch (command) {
        case "cd":
            return items.filter(item => fileSystem[item] !== undefined);
        case "cat":
            return items.filter(item => fileSystem[item] === undefined);
        case "ls":
            return items.filter(item => fileSystem[item] !== undefined);
        case "browse":
            return ["github.com", "linkedin.com", "google.com"];
        default:
            return items;
    }
}

export function getCommandFlags(command: string): string[] {
    switch (command) {
        case "ls":
            return ["-a", "-la", "-l"];
        case "cat":
            return [];
        case "cd":
            return ["..", "/"];
        case "help":
            return [];
        case "clear":
            return [];
        case "history":
            return [];
        case "browse":
            return [];
        case "tree":
            return [];
        default:
            return [];
    }
}

export function parseInput(input: string): { command: string; args: string[]; currentArg: string } {
    const parts = input.trim().split(/\s+/);
    const command = parts[0] || "";
    const _args = parts.slice(1, -1);
    const currentArg = parts.length > 1 ? parts[parts.length - 1] : "";
    
    return { command, args: _args, currentArg };
}

export function getIntelligentSuggestions(
    input: string, 
    currentDirectory: string, 
    availableCommands: string[]
): string[] {
    if (!input.trim()) return [];

    const { command, args: _args, currentArg } = parseInput(input);

    if (!input.includes(" ")) {
        return availableCommands.filter(cmd => 
            cmd.toLowerCase().startsWith(input.toLowerCase())
        );
    }

    if (availableCommands.includes(command.toLowerCase())) {
        const suggestions: string[] = [];

        if (currentArg.startsWith("-")) {
            const flags = getCommandFlags(command.toLowerCase());
            suggestions.push(...flags.filter(flag => 
                flag.toLowerCase().startsWith(currentArg.toLowerCase())
            ));
        } else {
            const items = getAvailableItems(currentDirectory, command.toLowerCase());
            suggestions.push(...items.filter(item => 
                item.toLowerCase().startsWith(currentArg.toLowerCase())
            ));

            if (!currentArg) {
                suggestions.push(...getCommandFlags(command.toLowerCase()));
            }
        }

        return suggestions.map(suggestion => {
            const baseCommand = input.substring(0, input.lastIndexOf(" ") + 1);
            return baseCommand + suggestion;
        });
    }
    
    return [];
}

export const AVAILABLE_COMMANDS = [
    "ls", "cd", "cat", "help", "clear", "history", "browse", "tree"
];