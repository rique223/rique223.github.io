import { useEffect, useRef } from "react";
import { scrollElementIntoView } from "../Utils/terminalHelpers";

interface SuggestionListProps {
    suggestions: string[];
    selectedIndex: number;
    onSelect: (suggestion: string) => void;
    onHover: (index: number) => void;
}

export const SuggestionList: React.FC<SuggestionListProps> = ({
    suggestions,
    selectedIndex,
    onSelect,
    onHover,
}) => {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (listRef.current && selectedIndex >= 0) {
            const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                scrollElementIntoView(selectedElement);
            }
        }
    }, [selectedIndex]);

    return (
        <div 
            ref={listRef}
            className="absolute bottom-full left-6 right-6 border rounded-lg mb-2 backdrop-blur-sm shadow-xl bg-surface border-border-primary overflow-y-auto"
            style={{ maxHeight: '20rem' }}
        >
            {suggestions.map((suggestion, index) => (
                <div
                    key={index}
                    className={`px-4 py-2 text-sm cursor-pointer first:rounded-t-lg last:rounded-b-lg ${
                        index === selectedIndex
                            ? "bg-surface-tertiary text-content-primary"
                            : "text-content-secondary hover:bg-surface-secondary"
                    }`}
                    onClick={() => onSelect(suggestion)}
                    onMouseEnter={() => onHover(index)}
                >
                    {suggestion}
                </div>
            ))}
        </div>
    );
};