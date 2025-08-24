// =============================================
// Portfolio Configuration File
// =============================================
// Edit this file to customize your portfolio content

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Fullstack ASP.NET Developer",
        description: "Passionate about creating robust, scalable web applications using modern technologies. Specializing in .NET ecosystem, cloud solutions, and full-stack development.",
        profileImage: "images/profile.jpg",
        resume: "documents/resume.pdf"
    },

    // Contact Information
    contact: {
        email: "your.email@example.com",
        phone: "+1 (234) 567-890",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        portfolio: "https://yourportfolio.com",
        location: "Your City, Country"
    },

    // Projects Configuration
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.",
            image: "images/project1.jpg",
            technologies: ["ASP.NET Core", "Entity Framework", "React", "SQL Server"],
            demoUrl: "https://demo-link.com",
            githubUrl: "https://github.com/yourusername/project1",
            featured: true
        },
        {
            id: 2,
            title: "Task Management API",
            description: "RESTful API with JWT authentication, real-time notifications, and cloud deployment.",
            image: "images/project2.jpg",
            technologies: ["ASP.NET Web API", "JWT Auth", "Azure", "Docker"],
            demoUrl: "https://demo-link.com",
            githubUrl: "https://github.com/yourusername/project2",
            featured: true
        },
        {
            id: 3,
            title: "Real-time Chat Application",
            description: "Real-time messaging app with group chats, file sharing, and online presence indicators.",
            image: "images/project3.jpg",
            technologies: ["SignalR", "ASP.NET Core", "JavaScript", "Redis"],
            demoUrl: "https://demo-link.com",
            githubUrl: "https://github.com/yourusername/project3",
            featured: true
        },
        {
            id: 4,
            title: "Analytics Dashboard",
            description: "Interactive data visualization dashboard with real-time metrics and advanced filtering.",
            image: "images/project4.jpg",
            technologies: ["Blazor", "Chart.js", "Azure SQL", "Power BI"],
            demoUrl: "https://demo-link.com",
            githubUrl: "https://github.com/yourusername/project4",
            featured: true
        }
    ],

    // Skills Configuration
    skills: {
        backend: [
            { name: "ASP.NET Core", level: 95 },
            { name: "C#", level: 90 },
            { name: "Entity Framework", level: 88 },
            { name: "Web API", level: 92 },
            { name: "SignalR", level: 85 },
            { name: "Blazor", level: 80 }
        ],
        frontend: [
            { name: "JavaScript", level: 85 },
            { name: "React", level: 80 },
            { name: "HTML/CSS", level: 90 },
            { name: "TypeScript", level: 75 },
            { name: "Bootstrap", level: 85 },
            { name: "jQuery", level: 80 }
        ],
        database: [
            { name: "SQL Server", level: 88 },
            { name: "Azure SQL", level: 82 },
            { name: "MongoDB", level: 70 },
            { name: "Redis", level: 65 },
            { name: "Entity Framework", level: 90 },
            { name: "LINQ", level: 85 }
        ],
        cloud: [
            { name: "Azure", level: 82 },
            { name: "Docker", level: 75 },
            { name: "Azure DevOps", level: 80 },
            { name: "GitHub Actions", level: 70 },
            { name: "Azure Functions", level: 75 },
            { name: "Application Insights", level: 70 }
        ]
    },

    // Social Media Links
    social: {
        github: {
            url: "https://github.com/yourusername",
            icon: "fab fa-github",
            label: "GitHub Profile"
        },
        linkedin: {
            url: "https://linkedin.com/in/yourprofile",
            icon: "fab fa-linkedin",
            label: "LinkedIn Profile"
        },
        twitter: {
            url: "https://twitter.com/yourusername",
            icon: "fab fa-twitter",
            label: "Twitter Profile"
        },
        stackoverflow: {
            url: "https://stackoverflow.com/users/your-id",
            icon: "fab fa-stack-overflow",
            label: "Stack Overflow"
        }
    },

    // Theme Configuration
    theme: {
        primaryColor: "#6b46c1",
        secondaryColor: "#a855f7",
        accentColor: "#c084fc",
        backgroundColor: "#0f0f23",
        fontFamily: "Roboto"
    },

    // Animation Settings
    animations: {
        particleCount: 50,
        typingSpeed: 150,
        scrollAnimationDelay: 200,
        hoverAnimationDuration: 300
    },

    // SEO Configuration
    seo: {
        title: "Your Name - Fullstack ASP.NET Developer",
        description: "Experienced Fullstack ASP.NET Developer specializing in modern web applications, cloud solutions, and scalable architectures.",
        keywords: "ASP.NET, C#, Fullstack Developer, Web Development, Azure, React, .NET Core",
        author: "Your Name",
        ogImage: "images/og-image.jpg"
    },

    // Navigation Configuration
    navigation: [
        { label: "Home", href: "#home", icon: "fas fa-home" },
        { label: "About", href: "#about", icon: "fas fa-user" },
        { label: "Projects", href: "#projects", icon: "fas fa-code" },
        { label: "Skills", href: "#skills", icon: "fas fa-cogs" },
        { label: "Contact", href: "#contact", icon: "fas fa-envelope" }
    ],

    // Hero Section Configuration
    hero: {
        backgroundVideo: null, // Path to background video (optional)
        typingTexts: [
            "Fullstack ASP.NET Developer",
            "Problem Solver", 
            "Tech Enthusiast",
            "Cloud Architect"
        ],
        ctaButtons: [
            {
                text: "View Projects",
                href: "#projects",
                type: "primary"
            },
            {
                text: "Contact Me",
                href: "#contact",
                type: "secondary"
            }
        ]
    },

    // Services/Experience (Optional)
    services: [
        {
            title: "Web Development",
            description: "Building responsive, scalable web applications using ASP.NET Core and modern JavaScript frameworks.",
            icon: "fas fa-code"
        },
        {
            title: "API Development",
            description: "Creating robust RESTful APIs with proper authentication, documentation, and error handling.",
            icon: "fas fa-server"
        },
        {
            title: "Cloud Solutions",
            description: "Deploying and managing applications on Azure with CI/CD pipelines and monitoring.",
            icon: "fas fa-cloud"
        },
        {
            title: "Database Design",
            description: "Designing efficient database schemas and optimizing queries for performance.",
            icon: "fas fa-database"
        }
    ],

    // Testimonials (Optional)
    testimonials: [
        {
            name: "Client Name",
            position: "Position at Company",
            message: "Excellent work on our web application. Professional, timely, and exceeded expectations.",
            avatar: "images/testimonial1.jpg",
            rating: 5
        },
        {
            name: "Another Client",
            position: "CTO at Tech Company", 
            message: "Outstanding technical skills and great communication throughout the project.",
            avatar: "images/testimonial2.jpg",
            rating: 5
        }
    ],

    // Blog Posts (Optional)
    blog: [
        {
            title: "Building Scalable APIs with ASP.NET Core",
            excerpt: "Learn best practices for creating maintainable and performant APIs...",
            publishDate: "2024-01-15",
            readTime: "5 min read",
            url: "https://yourblog.com/post1",
            image: "images/blog1.jpg"
        },
        {
            title: "Deploying .NET Applications to Azure",
            excerpt: "Step-by-step guide to deploying your applications to Azure App Service...",
            publishDate: "2024-01-10",
            readTime: "8 min read", 
            url: "https://yourblog.com/post2",
            image: "images/blog2.jpg"
        }
    ],

    // Footer Configuration
    footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
        builtWith: "Built with ❤️ using HTML, CSS & JavaScript"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
