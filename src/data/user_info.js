const user_info = {
    main: {
        name: "Rushyendra Guntupalli",
        role: "Software Developer",
        description: "I am a proactive software developer specializing in web development, Java programming, and API development. I contribute to creative projects within dynamic and collaborative teams.",
        photo: "https://avatars.githubusercontent.com/u/74148058?v=4", // Replace with your actual photo URL if different
        email: "rushyendra.7004@gmail.com"
    },
    socials: {
        github: "https://github.com/dog-broad",
        linkedin: "https://www.linkedin.com/in/rushyendra-guntupalli-6a39252b3/",
        discord: "https://discordapp.com/users/_rushi__",
    },
    about: "I am a dedicated software developer with a strong interest in using Java, Python, Django, and web development technologies to create impactful projects. My focus is on delivering solutions that enhance user experiences and optimize workflows effectively.",
    experience: [
        {
            position: "Full-Stack Developer Intern",
            company: "Swecha, Hyderabad",
            duration: "May 2022 - June 2022 (1 Month)",
            image: "https://i.ytimg.com/vi/vB6GLt0_mKs/hq720_live.jpg?sqp=CLSJsa8G-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvPRdzRi_VsMQ_bof_zhF3xa5tNA",
            descriptions: [
                "Completed a four-week civic dashboard internship, becoming proficient in full-stack development.",
                "Gained skills in web scraping, web design, and created user-friendly web applications."
            ]
        }
    ],
    education: [
        {
            school: "CMR Institute of Technology, Hyderabad",
            degree: "B.Tech. - CSE - Data Science",
            duration: "2021 - 2025",
            image: "https://i.imgur.com/hECs5NL.png", // Replace with the actual image if available
            cgpa: "8.50 / 10"
        },
        {
            school: "Narayana Junior College",
            degree: "12th Grade - MPC",
            duration: "2019 - 2021",
            image: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/b0ec704a3bd57a66d2ce0c98e1d35e1a", // Replace with the actual image if available
            percentage: "91.20 / 100"
        },
        {
            school: "Narayana Concept School",
            degree: "10th Grade - SSC",
            duration: "2018",
            image: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/b0ec704a3bd57a66d2ce0c98e1d35e1a", // Replace with the actual image if available
            percentage: "98 / 100"
        }
    ],
    projects: [
        {
            title: "Virtual Keyboard App",
            description: "A mobile-to-PC text transmission app that allows users to type on their PC using their Android device via a TCP connection. The app is built using Java for Android, while a server built on Python handles incoming messages over TCP.",
            technologies: "Android (Java), Python, TCP",
            image: "https://i.imgur.com/08uK8CG.png",
            link: "https://dog-broad.github.io/Virtual-Keyboard-App/",
            github: "https://github.com/dog-broad/VirtualKeyboardApp"
        },        
        {
            title: "CodeProfileValidator",
            description: "Built on Django, this web application supports seamless profile checks on platforms like HackerRank, CodeChef, Codeforces, and GeeksforGeeks. Users can confirm profile existence by entering a username and platform name through a user-friendly API endpoint.",
            technologies: "Django, RESTful API, Python",
            image: "https://blueshelltech.com/media/2021/05/python-django-1024x576.jpg",
            link: "https://codeprofilevalidator.onrender.com/",
            github: "https://github.com/dog-broad/CodeProfileValidator"
        },
        {
            title: "CMRIT2025Leaderboard",
            description: "A collaborative project aimed at creating an automated platform to track and display coding performance of participants from CMRIT. I contributed to data scraping, processing, and web interface development.",
            technologies: "Java, Python, SQLite, HTML/CSS/JavaScript",
            image: "https://i.imgur.com/jFxwqe1.png",
            link: "https://gabyah92.github.io/CMRIT2025Leaderboard/",
            github: "https://github.com/gabyah92/CMRIT2025Leaderboard"
        },
        {
            title: "Morse Code Translator",
            description: "A Java-based project to translate text communications between English and Morse code with a user-friendly GUI. I implemented data structures, graphical features, and translation algorithms, and integrated external libraries to enhance functionality.",
            technologies: "Java, Maven, Swing, FlatDarkLaf",
            image: "https://i.imgur.com/t6NBT3f.png",
            link: "https://github.com/dog-broad/MorseCodeTranslator",
            github: "https://github.com/dog-broad/MorseCodeTranslator"
        },
        {
            title: "Rain Bucket Game",
            description: "This arcade-style game developed using Python's pygame library challenges players to catch raindrops using a bucket controlled by either the player or an AI. Features include dynamic raindrop generation, score tracking, and adjustable game speed.",
            technologies: "Python, Pygame, Artificial Intelligence",
            image: "https://i.imgur.com/LXkBYu2.png",
            link: "https://github.com/dog-broad/RainDropGameAI",
            github: "https://github.com/dog-broad/RainDropGameAI"
        },
        {
            title: "Currency Converter App",
            description: "As lead developer, I oversaw its development encompassing Java programming, Swing GUI design, API integration, and currency conversion logic. The app features intuitive elements like currency selection dropdowns, flag symbols for visual identification, and a switch option for swift currency conversion.",
            technologies: "Java, Swing, API Integration",
            image: "https://i.imgur.com/WgwCFL2.png",
            link: "https://github.com/dog-broad/CurrencyConverterApp",
            github: "https://github.com/dog-broad/CurrencyConverterApp"
        }
    ],
    certificates: [
        {
            title: "C Programming for Beginners",
            description: "Provided by Udemy",
            icon: "udemy",
            link: "https://www.udemy.com/certificate/UC-7243834b-07ad-48aa-9188-79a118d20540/"
        },
        {
            title: "Advanced C Programming Course",
            description: "Provided by Udemy",
            icon: "udemy",
            link: "https://www.udemy.com/certificate/UC-ecae58a5-18d1-4284-9d92-64443b0938f3/"
        }
    ],
    contact: {
        description: "Feel free to reach out to me on any of my social media platforms or via email."
    }
};

export default user_info;
