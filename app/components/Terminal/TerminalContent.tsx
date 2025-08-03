import React from "react";

import { formatOutputLine } from "../../Utils/terminalHelpers";

interface TerminalContentProps {
    output: string[];
    terminalRef: React.RefObject<HTMLDivElement | null>;
}

export const TerminalContent: React.FC<TerminalContentProps> = ({
    output,
    terminalRef,
}) => {
    const renderLine = (line: string) => {
        const formatted = formatOutputLine(line);
        
        switch (formatted.type) {
            case "success":
                return <span className="text-success">{formatted.text}</span>;
            case "error":
                return <span className="text-error">{formatted.text}</span>;
            case "accent":
                return <span className="text-accent-blue">{formatted.text}</span>;
            default:
                return formatted.text;
        }
    };

    return (
        <div ref={terminalRef} className="flex-1 overflow-y-auto p-6 terminal-content">
            {output.map((line, index) => (
                <div
                    key={index}
                    className="whitespace-pre-wrap leading-relaxed mb-1 font-mono text-sm"
                >
                    {renderLine(line)}
                </div>
            ))}
        </div>
    );
};