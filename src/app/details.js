

const aboutme = {
    name: "Vaibhav Aggarwal",
    dob: "17th March 2005",
    age: Math.floor((new Date(2026,2,17,12,12) - new Date(2005,2,17,12,12))/(1000*60*60*24*365.2422)),
    desc:`Hi, I am Vaibhav, an engineer driven by the discipline of building things that work and the curiosity to make them better. For me, it's not just about solving a problem, it's about the dedication to the craft and the satisfaction of a clean, functional result. I thrive in the space where technical logic meets a creative eye. When I'm not developing software, I'm usually refining my perspective through photography and editing, always focusing on the small details that bring a project to life.`,
    location: "Sri Gangnagar, Rajasthan",
    social: {
        instagram: "https://www.instagram.com/vaibhav.agg17/",
        github: "https://github.com/Vaibhav-2005",
        linkedIn: "https://www.linkedin.com/in/vaibhavagg2005/",
    }
};

const experience = [{
    companyName: "IndianOil Corporation Limited",
    role: "Information Systems Intern",
    desc: "Built a Flask web app with a MySQL database to help track fuel inventory on the company's internal network. Used APScheduler to automatically generate reports on a schedule, removing the need for manual work.Implemented data retrieval from SAP using SQLAlchemy, enabling seamless database integration. Performed data cleaning and analysis, followed by end-to-end design and development of the software solution.Added row highlighting to dashboards using Pandas & OpenPyXL.",
    duration: "June 24 - Aug 24",
    location: "Noida",
    certificateLink: "Link to Certificate",
}];

const projects = [
    {
        projectName: "PindScript",
        techStack: "React, Node.js",
        duration: "July 25 - Dec 25",
        desc: "Engineered a custom interpreted programming language using Node.js, building a complete compiler stack (Lexer, Parser, and Interpreter) to process and execute Punjabi-based syntax. Developed a full-stack web IDE with React.js and Express, featuring a custom code editor, real-time output console, and a unique 'Roast Error' system for engaging feedback.Constructed a recursive interpreter to handle variable scoping, memory management, and custom standard library execution.",
        githubLink: "https://github.com/Vaibhav-2005/PindScript",
        deployedLink: "https://pindscript.netlify.app/",
        linkedInPostLink: "https://www.linkedin.com/posts/vaibhavagg2005_pindscript-programminglanguage-sideproject-activity-7401683347397419008-D8ZG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaADc8Bjst1RJq_CZnQs9ml6SuxVjL1n2s",
    },
    {
        projectName: "NexLance",
        techStack: "MERN Stack",
        duration: "Jan 25 - June 25",
        desc: "Deployed and developed a full-stack job platform with over 15+ functional components. UsedMongoDBtostore resume metadata and user details securely. AddedJWT-based authentication and authorization to protect all platform routes and manage access control effectively.",
        githubLink: "https://github.com/Vaibhav-2005/NexLance",
        deployedLink: "https://nexlance.netlify.app/",
    },
    {
        projectName: "Other Minor Projects",
        desc: "This includes various smaller projects like a code editor for HTML/CSS/JavaScript, Tic-Tac-Toe and Amazon-Clone. These projects helped me hone my skills in full-stack development and provided practical experience in building and deploying web applications.",
        githubLink: "Link to GitHub Repository",
    }
];

const education =[
    {
        institutionName: "Chandigarh Engineering College",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "2022 - 2026",
        location: "Mohali, Punjab",
        cgpa: "8.06",
    },
    {
        institutionName: "Floradale Public School, Sri Ganganagar",
        duration: "2022",
        location: "Sri Ganganagar, Rajasthan",
        percentage: "80.4%",
    },
    {
        institutionName: "Bihani Children's Academy, Sri Ganganagar",
        duration: "2020",
        location: "Sri Ganganagar, Rajasthan",
        percentage: "82.4%",
    }
];

const achievements = [
    "Contributed LeetCode Question #3602",
    "WonTechTitans Contest among 70+ participants",
    "Secured 2nd Position in Hackathon at Aaveg Tech Fest 2025",
    "Stood 2nd in Tech Tribe Contest",
    "Acquired 2nd Position among 50+ teams at Zest o-Fiesta 2024",
    "Secured 2nd Position among 150 teams in Coding Competition Fusing Bytes 2024",
    "Attained Top 7 at RBI90 Quiz State Round Punjab",
    "Placed in top 90 out of 5,500 teams in the RBI90 Quiz",
];

const extracurriculars = [
    "Coordinator in Fusion-X Departmental Event.",
    "Coordinated in Tech Talk 2K25 ft. Love Babbar & Lakshay Kumar.",
    "Upcoming Microsoft Learn Student Ambassador.",
    "Student Ambassador of LetsUpgrade.",
    "Lead Coordinator in Zest-o-Fiesta 2024.",
    "Contributor at GirlScript Summer Of Code'24.",
    "Student Ambassador at Kotlin Conf'24.",
];

const skills = {
    programmingLanguages: ["JavaScript", "Core Java"],
    frameworks: ["React", "Node.js", "Next.js"],
    courseWorks: ["Data Structures and Algorithms", "Database Management Systems", "Object-Oriented Programming"],
    databases: ["MySQL"],
};

const certifications = [
    "3XAWSAcademyGraduate Certified.",
    "Postman API Fundamentals Student Expert.",
    "3XMongoDBAtlas Certified.",
    "Celonis Academic Process Mining Fundamentals.",
    "Oracle Cloud Infrastructure GenAI",
];

const hobbies = [
    "Playing Chess",
    "Listening to Music",
    "Puzzle Solving",
];

export { experience, projects, education, achievements, extracurriculars, skills, certifications, hobbies, aboutme };