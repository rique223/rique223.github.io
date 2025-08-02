import { 
    formatDirectoryTree, 
    validateDirectory, 
    getDirectoryContents, 
    getFileContent, 
    normalizeDirectoryPath 
} from "../Utils/fileSystemHelpers";
import { fileSystem } from "../Utils/fs";

export type CommandFunction = (args: string[]) => string;

export const createCommandHandler = (
    currentDirectory: string,
    setCurrentDirectory: (dir: string) => void,
    commandHistory: string[]
) => {
    const commands: Record<string, CommandFunction> = {
        cd: (args: string[]) => {
            if (!args[0] || args[0] === ".." || args[0] === "/") {
                setCurrentDirectory("");
                return `➜ Changed directory to ~`;
            }
            const newDir = args[0];
            if (validateDirectory(newDir)) {
                setCurrentDirectory(newDir);
                return `➜ Changed directory to ~/${newDir}`;
            }
            return `cd: no such file or directory: ${newDir}`;
        },

        ls: (args: string[]) => {
            const showAll = args.includes("-la") || args.includes("-a");
            const dirArg = args.find((arg) => !arg.startsWith("-"));
            let targetDirectory = currentDirectory || "/";

            if (dirArg) {
                const normalizedPath = normalizeDirectoryPath(dirArg, currentDirectory);
                if (normalizedPath !== dirArg && !validateDirectory(dirArg)) {
                    targetDirectory = normalizedPath;
                } else if (validateDirectory(dirArg)) {
                    targetDirectory = dirArg;
                } else {
                    return `ls: cannot access '${dirArg}': No such file or directory`;
                }
            }

            const targetFS = fileSystem[targetDirectory];
            if (!targetFS) {
                return `ls: cannot access '${dirArg || targetDirectory}': No such file or directory`;
            }

            const items = getDirectoryContents(targetDirectory);

            if (showAll) {
                return items.map((item) => `📁 ${item}`).join("  ");
            }
            return items.join("  ");
        },

        cat: (args: string[]) => {
            const fileName = args[0];
            if (!fileName) return "cat: missing file operand";

            const content = getFileContent(currentDirectory || "/", fileName);
            if (content) {
                return content;
            }
            return `cat: ${fileName}: No such file or directory`;
        },

        tree: () => {
            let result = ".\n";
            Object.keys(fileSystem).forEach((dir) => {
                if (dir !== "/") {
                    result += formatDirectoryTree(dir, 1);
                }
            });
            return result;
        },

        history: () => {
            return commandHistory.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n");
        },

        browse: (args: string[]) => {
            const url = args[0];
            if (!url) return "Usage: browse <url>";

            try {
                window.open(url.startsWith("http") ? url : `https://${url}`, "_blank");
                return `➜ Opening ${url} in new tab`;
            } catch {
                return `Error: Could not open ${url}`;
            }
        },

        help: () => {
            return `Available commands:
			
Navigation:
  ls [dir] [-la]  List directory contents
  cd <dir>        Change directory
  tree            Show directory tree

File Operations:
  cat <file>      Display file contents

Utilities:
  history         Show command history
  browse <url>    Open URL in browser
  clear           Clear terminal
  help            Show this help message

Tip: Use tab completion and arrow keys for navigation!`;
        },

        clear: () => "",
    };

    return commands;
};