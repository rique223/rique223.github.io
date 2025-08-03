export const DESKTOP_ASCII = `
██╗  ██╗███████╗███╗   ██╗██████╗ ██╗ ██████╗ ██╗   ██╗███████╗     ██████╗        ██████╗ ██╗██████╗ ███████╗██╗██████╗  ██████╗ 
██║  ██║██╔════╝████╗  ██║██╔══██╗██║██╔═══██╗██║   ██║██╔════╝    ██╔════╝        ██╔══██╗██║██╔══██╗██╔════╝██║██╔══██╗██╔═══██╗
███████║█████╗  ██╔██╗ ██║██████╔╝██║██║   ██║██║   ██║█████╗      ██║  ███╗       ██████╔╝██║██████╔╝█████╗  ██║██████╔╝██║   ██║
██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗██║██║▄▄ ██║██║   ██║██╔══╝      ██║   ██║       ██╔══██╗██║██╔══██╗██╔══╝  ██║██╔══██╗██║   ██║
██║  ██║███████╗██║ ╚████║██║  ██║██║╚██████╔╝╚██████╔╝███████╗    ╚██████╔╝██╗    ██║  ██║██║██████╔╝███████╗██║██║  ██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝     ╚═════╝ ╚═╝    ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ ©

Welcome to my portfolio. Feel free to explore my projects and learn more about me 🙂.
Type "help" for available commands or scroll down for the website version.`;

export const MOBILE_ASCII = `
██╗  ██╗ ██████╗ ██████╗ 
██║  ██║██╔════╝ ██╔══██╗
███████║██║  ███╗██████╔╝
██╔══██║██║   ██║██╔══██╗
██║  ██║╚██████╔╝██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝

👋 Henrique G. Ribeiro
Software Engineer

Welcome to my portfolio! 
Type "help" for commands or 
scroll down for the full site.`;

export const TABLET_ASCII = `
██╗  ██╗███████╗███╗   ██╗██████╗ ██╗ ██████╗ ██╗   ██╗███████╗     ██████╗        ██████╗ 
██║  ██║██╔════╝████╗  ██║██╔══██╗██║██╔═══██╗██║   ██║██╔════╝    ██╔════╝        ██╔══██╗
███████║█████╗  ██╔██╗ ██║██████╔╝██║██║   ██║██║   ██║█████╗      ██║  ███╗       ██████╔╝
██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗██║██║▄▄ ██║██║   ██║██╔══╝      ██║   ██║       ██╔══██╗
██║  ██║███████╗██║ ╚████║██║  ██║██║╚██████╔╝╚██████╔╝███████╗    ╚██████╔╝██╗    ██║  ██║██╗ 
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝     ╚═════╝ ╚═╝    ╚═╝  ╚═╝╚═╝

Welcome to my portfolio. Feel free to explore my projects and learn more about me 🙂.
Type "help" for available commands or scroll down for the website version.`;

export const getDefaultOutput = (isMobile: boolean, isTablet: boolean): string => {
    if (isMobile) return MOBILE_ASCII;
    if (isTablet) return TABLET_ASCII;
    return DESKTOP_ASCII;
};