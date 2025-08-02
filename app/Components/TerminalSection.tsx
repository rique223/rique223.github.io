import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import LoadingSpinner from "../components/LoadingSpinner";

const Terminal = dynamic(() => import("./Terminal"), {
    loading: () => <LoadingSpinner size="lg" />,
});

interface TerminalSectionProps {
    input: string;
    setInput: (input: string) => void;
    output: string[];
    handleCommand: (command: string) => void;
    currentDirectory: string;
    terminalRef: React.RefObject<HTMLDivElement | null>;
    commandHistory: string[];
    setCommandHistory: (history: string[]) => void;
    terminalOpacity: any;
    terminalScale: any;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({
    input,
    setInput,
    output,
    handleCommand,
    currentDirectory,
    terminalRef,
    commandHistory,
    setCommandHistory,
    terminalOpacity,
    terminalScale,
}) => {
    return (
        <motion.section
            className="min-h-screen flex justify-center items-start md:items-center px-4 pt-4 md:pt-0"
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
                terminalRef={terminalRef}
                commandHistory={commandHistory}
                setCommandHistory={setCommandHistory}
            />
        </motion.section>
    );
};