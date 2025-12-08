import portfolioImg01 from "../images/portfolio-images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-images/portfolio-05.png";
import portfolioImg06 from "../images/portfolio-images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-images/portfolio-07.png";
import portfolioImg08 from "../images/portfolio-images/portfolio-08.png";
import portfolioImg09 from "../images/portfolio-images/portfolio-09.png";
import portfolioImg10 from "../images/portfolio-images/portfolio-10.png";
import portfolioImg11 from "../images/portfolio-images/uplift-screenshot.png";
import portfolioImg12 from "../images/portfolio-images/tyc-screenshot.png";
import portfolioImg13 from "../images/portfolio-images/dm-portfolio-screenshot.png";
import portfolioImg14 from "../images/portfolio-images/airquality-screenshot.png";
import portfolioImg15 from "../images/portfolio-images/image-gallery-screenshot.png";

const portfolios = [
    {
        id: "15",
        imgUrl: portfolioImg14,
        category: "Capstone",
        title: "Airquality Portal",
        description: "The Nairobi Air Quality Portal is a real-time, open-access platform managed by Nairobi City County. It tracks air pollution levels across the city using a network of sensors, displaying current air-quality index (AQI) readings — from “Good” to “Hazardous” — by location. The portal offers interactive maps, historical air-quality trends, health advisories, and timely alerts so residents, researchers and policymakers can monitor air pollution, protect public health, and make informed decisions.",
        technologies: ["Next.Js", "Node.Js","Express.Js", "Firebase","Prisma", "Axios", "PostgreSQL"],
        siteUrl: " https://airquality.nairobi.go.ke",
    },{
        id: "14",
        imgUrl: portfolioImg13,
        category: "Capstone",
        title: "Digital Marketer Portfolio",
        description: "Advetour is an application that provides travel-related information to customers acting like an easy access tour guide that tells you where to go, what to see and where to eat. It offers the user a chance to plan their trips at moments notice without having to access too maney materials for the perfect site within Nairobi.",
        technologies: ["Vite"],
        siteUrl: " https://patriciasportfolio.netlify.app/",
    },{
        id: "13",
        imgUrl: portfolioImg12,
        category: "Capstone",
        title: "TYC Africa Trust",
        description: "TYC AFRICA Trust is dedicated to supporting youth development through various programs and initiatives. This website serves as a platform to share information about the organization's mission, upcoming events, programs, and provides a way for individuals to get involved and contact the organization.",
        technologies: ["NextJs"],
        siteUrl: "https://tycafricatrust.org/",
    },{
        id: "12",
        imgUrl: portfolioImg15,
        category: "Intermediate",
        title: "Image Gallery App",
        description: "This is a simple, responsive Image Gallery web application built with React. It fetches a list of images from a remote API and displays them in a flexible gallery layout. The app dynamically loads images and presents them in a grid, making it easy for users to view multiple photos at once.",
        technologies: ["React.Js","Axios"],
        siteUrl: "https://image-gallery-app-tau-weld.vercel.app/",
    },{
        id: "11",
        imgUrl: portfolioImg11,
        category: "Capstone",
        title: "Uplift",
        description: "Uplift is a dynamic and user-centric platform that brings together individuals, charities and donors to create a positive impact on society. Our platform provides a seamless way for users to contribute to causes they care about, whether it's supporting local charities, making donations, or assisting beneficiaries in need.",
        technologies: ["React", "Flask","SQLite"],
        siteUrl: " https://up-lift-kappa.vercel.app/",
    },
    {
        id: "10",
        imgUrl: portfolioImg10,
        category: "Capstone",
        title: "Adventour",
        description: "Adventour is an application that provides travel-related information to customers acting like an easy access tour guide that tells you where to go, what to see and where to eat. It offers the user a chance to plan their trips at moments notice without having to access too maney materials for the perfect site within Nairobi.",
        technologies: ["React"],
        siteUrl: " https://project-adventour.vercel.app/",
    },
    {
        id: "09",
        imgUrl: portfolioImg09,
        category: "Intermediate",
        title: "Find a Farmer",
        description: "A platform that seeks to bridge the gap between the famrer and his customer by cutting down the need for middlemen.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: " https://babamboga.github.io/Find-a-Farmer/",
    },
    {
        id: "08",
        imgUrl: portfolioImg08,
        category: "Elementary",
        title: "Toy Tale",
        description: "Simple site that utilises an api for showcasing a catalog of toy story characters.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: " https://babamboga.github.io/phase-1-practice-toy-tale/",
    },{
        id: "07",
        imgUrl: portfolioImg07,
        category: "Elementary",
        title: "Woof Woof Dog App",
        description: "Simple site that utilises an api for updating dogs based on their behavior.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: "https://babamboga.github.io/phase-1-woof-woof-js-practice/",
    },
    {
        id: "06",
        imgUrl: portfolioImg06,
        category: "Elementary",
        title: "Practcie Dog Show",
        description: "Simple site that utilises an api for updating dogs in a dog show.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: "https://babamboga.github.io/phase-1-practice-dog-show/",
    },
    {
        id: "05",
        imgUrl: portfolioImg05,
        category: "Elementary",
        title: "Fandango Movie Tickets",
        description: "Simple site that utilises an api for updating movie tickets and access to movie details.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: "https://babamboga.github.io/Weekly-code-challenge/",
    },
    {
        id: "04",
        imgUrl: portfolioImg04,
        category: "Elementary",
        title: "Simple Server Responses",
        description:"Server reponses have been mirrored.",
        technologies: ["HTML","CSS","Javascript"],
        siteUrl: "https://babamboga.github.io/phase-1-stitching-together-the-three-pillars/",
    }, 
    {
        id: "03",
        imgUrl: portfolioImg03 ,
        category: "Elementary",
        title: "Moving Block",
        description:"Using the arrow keys one is able to move the block within the specified space on screen and change colour per corresponding direction.",
        technologies: ["HTML","CSS","Javascript"],
        siteUrl: "https://babamboga.github.io/phase-0-javascript-events-acting-on-events-lab/",
    },
    {
        id: "02",
        imgUrl: portfolioImg02,
        category: "Elementary",
        title: "Riyadh Blog",
        description:"It is a mockup of a potential blog webpage",
        technologies: ["HTML","CSS"],
        siteUrl: "https://babamboga.github.io/phase-0-html-riyadh-blog-lab/",
    },
    {
        id: "01",
        imgUrl: portfolioImg01,
        category: "Elementary",
        title:"Album Cover",
        description:"It is a simple album cover design based on the requirements and resources provided by the client. It showcases typical industry standard workflow.",
        technologies: ["HTML","CSS"],
        siteUrl: "https://babamboga.github.io/phase-0-html-album-cover-lab/",
    },
];

export default portfolios;