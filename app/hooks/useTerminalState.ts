import { useEffect, useRef, useState } from "react";

import { getDefaultOutput } from "../constants/asciiArt";
import { useResponsive } from "../contexts/ResponsiveContext";
import { createCommandHandler } from "../handlers/commandHandler";
import { AVAILABLE_COMMANDS, findSimilarCommand } from "../Utils/commands";

export const useTerminalState = () => {
    const { isMobile, isTablet } = useResponsive();
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [currentDirectory, setCurrentDirectory] = useState("");
    const prevOutputLength = useRef(0);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOutput((currentOutput) => {
            const defaultOutput = getDefaultOutput(isMobile, isTablet);
            if (
                currentOutput.length === 0 ||
                (currentOutput.length === 1 && 
                 (currentOutput[0].includes("██╗  ██╗███████╗") || 
                  currentOutput[0].includes("██╗  ██╗ ██████╗")))
            ) {
                return [defaultOutput];
            }
            return currentOutput;
        });
    }, [isMobile, isTablet]);

    useEffect(() => {
        if (terminalRef.current && output.length > prevOutputLength.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        prevOutputLength.current = output.length;
    }, [output]);

    const handleCommand = (command: string) => {
        const [cmd, ...args] = command.trim().split(" ");

        if (!cmd) {
            setOutput([...output, `➜ ~/${currentDirectory} `]);
            return;
        }

        if (cmd === "clear") {
            setOutput([getDefaultOutput(isMobile, isTablet)]);
            return;
        }

        const commands = createCommandHandler(currentDirectory, setCurrentDirectory, commandHistory);
        const cmdFunction = commands[cmd];
        const prompt = `➜ ~/${currentDirectory} ${command}`;

        let newOutput: string;
        if (cmdFunction) {
            newOutput = cmdFunction(args);
        } else {
            const similarCommand = findSimilarCommand(cmd, AVAILABLE_COMMANDS);
            if (similarCommand) {
                newOutput = `${cmd}: No such command, did you mean ${similarCommand}?`;
            } else {
                newOutput = `zsh: command not found: ${cmd}`;
            }
        }

        setOutput([...output, prompt, newOutput]);
    };

    return {
        input,
        setInput,
        output,
        commandHistory,
        setCommandHistory,
        currentDirectory,
        terminalRef,
        handleCommand,
    };
};