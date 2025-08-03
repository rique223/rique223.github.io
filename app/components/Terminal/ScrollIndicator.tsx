export const ScrollIndicator: React.FC = () => {
    return (
        <div className="flex justify-center mt-8 animate-bounce">
            <div className="flex flex-col items-center space-y-2 text-gray-400">
                <span className="text-sm font-medium">Scroll down for website view</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
    );
};