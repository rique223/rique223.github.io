import Image from "next/image";
import { TrafficLights } from "./TrafficLights";
import { ThemeToggle } from "./ThemeToggle";
import { UserAvatar } from "./UserAvatar";

interface TerminalHeaderProps {
    currentDirectory: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
    currentDirectory,
}) => {
    return (
        <div className="relative px-4 py-3 terminal-header">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-3">
                        <TrafficLights />
                        <div className="h-4 w-px bg-gray-600 mx-2" />
                    </div>

                    <div className="flex items-center space-x-1">
                        <div className="flex items-center rounded-lg px-6 py-1.5 border space-x-3 max-w-[250px] overflow-hidden bg-surface-secondary border-border-primary">
                            <Image
                                src="/ubuntu.svg"
                                alt="Ubuntu logo"
                                width={14}
                                height={14}
                                className="opacity-80"
                            />
                            <span
                                className="text-xs font-medium cursor-default text-content-secondary hidden md:block"
                                style={{
                                    direction: "rtl",
                                    textAlign: "left",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {currentDirectory
                                    ? `henrique@HAL-9000:~/${currentDirectory}`
                                    : "~:henrique@HAL-9000"}
                            </span>
                        </div>

                        <button className="w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200 group bg-surface-secondary hover:bg-surface-tertiary border-border-primary hover:border-border-secondary">
                            <svg
                                className="w-3 h-3 transition-colors text-content-muted group-hover:text-content-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <UserAvatar />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};