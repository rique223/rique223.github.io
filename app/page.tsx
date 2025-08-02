"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Portfolio from "./Components/Portfolio";
import Terminal from "./Components/Terminal";
import { fileSystem } from "./Utils/fs";

const DEFAULT_OUTPUT = `
██╗  ██╗███████╗███╗   ██╗██████╗ ██╗ ██████╗ ██╗   ██╗███████╗     ██████╗        ██████╗ ██╗██████╗ ███████╗██╗██████╗  ██████╗ 
██║  ██║██╔════╝████╗  ██║██╔══██╗██║██╔═══██╗██║   ██║██╔════╝    ██╔════╝        ██╔══██╗██║██╔══██╗██╔════╝██║██╔══██╗██╔═══██╗
███████║█████╗  ██╔██╗ ██║██████╔╝██║██║   ██║██║   ██║█████╗      ██║  ███╗       ██████╔╝██║██████╔╝█████╗  ██║██████╔╝██║   ██║
██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗██║██║▄▄ ██║██║   ██║██╔══╝      ██║   ██║       ██╔══██╗██║██╔══██╗██╔══╝  ██║██╔══██╗██║   ██║
██║  ██║███████╗██║ ╚████║██║  ██║██║╚██████╔╝╚██████╔╝███████╗    ╚██████╔╝██╗    ██║  ██║██║██████╔╝███████╗██║██║  ██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝     ╚═════╝ ╚═╝    ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ ©

Welcome to my portfolio. Feel free to explore my projects and learn more about me 🙂.
Type "help" for available commands or scroll down for the website version.`;

export default function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([DEFAULT_OUTPUT]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [currentDirectory, setCurrentDirectory] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const terminalRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const terminalOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const terminalScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    type CommandFunction = (args: string[]) => string;

    const formatDirectoryTree = (dir: string, indent = 0): string => {
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

    const commands: Record<string, CommandFunction> = {
        cd: (args: string[]) => {
            if (!args[0] || args[0] === ".." || args[0] === "/") {
                setCurrentDirectory("");
                return `➜ Changed directory to ~`;
            }
            const newDir = args[0];
            if (fileSystem[newDir]) {
                setCurrentDirectory(newDir);
                return `➜ Changed directory to ~/${newDir}`;
            }
            return `cd: no such file or directory: ${newDir}`;
        },
        ls: (args: string[]) => {
            const showAll = args.includes("-la") || args.includes("-a");
            const currentFS = fileSystem[currentDirectory || "/"];
            const items = Object.keys(currentFS).filter((key) => key !== "..");

            if (showAll) {
                return items.map((item) => `📁 ${item}`).join("  ");
            }
            return items.join("  ");
        },
        cat: (args: string[]) => {
            const fileName = args[0];
            if (!fileName) return "cat: missing file operand";

            const currentFS = fileSystem[currentDirectory || "/"];
            if (currentFS && currentFS[fileName]) {
                return currentFS[fileName];
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
  ls [-la]        List directory contents
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

    const handleCommand = (command: string) => {
        const [cmd, ...args] = command.trim().split(" ");

        if (!cmd) {
            setOutput([...output, `➜ ~/${currentDirectory} `]);
            return;
        }

        if (cmd === "clear") {
            setOutput([DEFAULT_OUTPUT]);
            return;
        }

        const cmdFunction = commands[cmd];
        const prompt = `➜ ~/${currentDirectory} ${command}`;
        const newOutput = cmdFunction ? cmdFunction(args) : `zsh: command not found: ${cmd}`;

        setOutput([...output, prompt, newOutput]);
    };

    return (
        <div
            ref={containerRef}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
            <motion.section
                className="min-h-screen flex justify-center items-center px-4"
                style={{
                    opacity: terminalOpacity,
                    scale: terminalScale,
                }}
            >
                <Terminal
                    input={input}
                    setInput={setInput}
                    output={output}
                    handleCommand={handleCommand}
                    currentDirectory={currentDirectory}
                    darkMode={darkMode}
                    terminalRef={terminalRef}
                    commandHistory={commandHistory}
                    setCommandHistory={setCommandHistory}
                    toggleDarkMode={toggleDarkMode}
                />
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Portfolio darkMode={darkMode} />
            </motion.section>
        </div>
    );
}
