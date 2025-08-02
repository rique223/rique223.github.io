import { fileSystem } from "./fs";

export const formatDirectoryTree = (dir: string, indent = 0): string => {
    const spaces = "  ".repeat(indent);
    let result = `${spaces}📁 ${dir}/\n`;

    if (fileSystem[dir]) {
        Object.keys(fileSystem[dir]).forEach((key) => {
            if (key !== "info") {
                result += `${spaces}  📄 ${key}\n`;
            }
        });
    }
    return result;
};

export const validateDirectory = (dirPath: string): boolean => {
    return fileSystem[dirPath] !== undefined;
};

export const getDirectoryContents = (dirPath: string): string[] => {
    const targetFS = fileSystem[dirPath];
    if (!targetFS) return [];
    return Object.keys(targetFS).filter((key) => key !== "..");
};

export const getFileContent = (dirPath: string, fileName: string): string | null => {
    const currentFS = fileSystem[dirPath];
    if (currentFS && currentFS[fileName]) {
        return currentFS[fileName];
    }
    return null;
};

export const normalizeDirectoryPath = (dirArg: string, currentDirectory: string): string => {
    if (dirArg === "/" || dirArg === "~") {
        return "/";
    }
    if (dirArg === ".." || dirArg === "../") {
        return "";
    }
    if (dirArg === "." || dirArg === "./") {
        return currentDirectory || "/";
    }
    return dirArg;
};