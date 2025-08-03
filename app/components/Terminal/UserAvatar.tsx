import Image from "next/image";

export const UserAvatar: React.FC = () => {
    return (
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400/50 hover:border-emerald-400 transition-colors">
            <Image
                src="/avatar.jpg"
                alt="Henrique avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
            />
        </div>
    );
};