"use client";

import ErrorBoundary from "./components/ErrorBoundary";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { TerminalSection } from "./components/sections/TerminalSection";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useTerminalState } from "./hooks/useTerminalState";

export default function Home() {
    const terminalState = useTerminalState();
    const scrollAnimation = useScrollAnimation();

    return (
        <ErrorBoundary>
            <div ref={scrollAnimation.containerRef} className="min-h-screen">
                <TerminalSection
                    input={terminalState.input}
                    setInput={terminalState.setInput}
                    output={terminalState.output}
                    handleCommand={terminalState.handleCommand}
                    currentDirectory={terminalState.currentDirectory}
                    terminalRef={terminalState.terminalRef}
                    commandHistory={terminalState.commandHistory}
                    setCommandHistory={terminalState.setCommandHistory}
                    terminalOpacity={scrollAnimation.terminalOpacity}
                    terminalScale={scrollAnimation.terminalScale}
                />

                <PortfolioSection />
            </div>
        </ErrorBoundary>
    );
}
