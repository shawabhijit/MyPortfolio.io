import {
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    homeSmile,
    instagram,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    instafollower1,
    instafollower2,
    instafollower3,
    instafollower4,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "About Me",
        url: "#aboutme",
    },
    {
        id: "1",
        title: "Projects",
        url: "#projects",
    },
    {
        id: "2",
        title: "Experince",
        url: "#experince",
    },
    {
        id: "3",
        title: "Contact Me",
        url: "#contact",
    },
    {
        id: "4",
        title: "Download CV",
        url: "#cv",
        onlyMobile: true,
    },
];

export const heroIcons = [
    { icon: homeSmile, url: "https://github.com/shawabhijit" },
    { icon: file02, url: "https://www.linkedin.com/in/abhijit-sahoo-354b03253/" },
    { icon: searchMd, url: "https://x.com/Abhijit79958967" },
    { icon: plusSquare, url: "https://www.facebook.com/abhijith.sahoo.2003/" }];

export const instafollowers = [instafollower1, instafollower2, instafollower3, instafollower4];


export const EcommersFeatures = [
    "Advanced Searching System",
    "Cart Management",
    "Secure Payment Integration",
];



export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        // icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently building a Animated NIKE Site",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];


export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];