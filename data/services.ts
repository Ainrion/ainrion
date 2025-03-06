import { 
    RefreshCw,
    Database,
    Cloud,
    Brain,
    ShieldCheck,
    Users,
    BarChart,
    icons
  } from 'lucide-react';

const services = [
  {
    id: 'digital-transformation',
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Transform your business with end-to-end digital solutions.",
    longDescription: "Transform your business with our end-to-end digital transformation solutions. We integrate modern technologies to streamline processes, enhance customer experiences, and drive sustainable growth. Our digital transformation services help you modernize legacy systems, automate processes, and create a more agile business model.",

    benefits: [
      "Process automation and optimization",
      "Enhanced customer experience",
      "Improved operational efficiency",
      "Data-driven decision making"
    ],

    features: [
      "Legacy system modernization",
      "Digital workflow implementation",
      "Change management support",
      "Technology integration services"
    ],

    whyChooseUs: [
      {
        icon: ShieldCheck,
        title: "Expert Solutions",
        description: "Industry-leading expertise for maximum efficiency and scalability."
      },


      {
        icon: Users,
        title: "Tailored Approach",
        description: "Customized solutions to fit your unique business needs."
      },

      {
        icon: RefreshCw,
        title: "24/7 Support",
        description: "Dedicated support for seamless operations."
      }
    ],

    images: {
      main: "/images/digital-transformation.jpeg",
      features: [
        "/images/digital-transformation_feature_1.jpeg",
        "/images/digital-transformation_feature_2.jpeg",
        "/images/digital-transformation_feature_3.jpeg",
        "/images/digital-transformation_feature_4.jpeg"
      ]
    },
    color: "from-blue-500/20 to-purple-500/20"
  },

  {
    id: 'data-analytics',
    icon: Database,
    title: "Data Analytics",
    description: "Turn raw data into valuable business insights.",
    longDescription: "Turn raw data into your most valuable asset. Our analytics services provide deep insights that help you make informed decisions, optimize operations, and stay ahead of the competition. Leverage cutting-edge data analytics to optimize business performance, improve decision-making, and gain a competitive edge.",
    
    benefits: [
      "Actionable business insights",
      "Predictive analytics",
      "Performance optimization",
      "Competitive advantage"
    ],

    features: [
      "Custom dashboard development",
      "Real-time analytics",
      "Machine learning integration",
      "Data visualization"
    ],

    whyChooseUs: [
      { 
        icon: BarChart,
        title: "Data-Driven Insights", 
        description: "Make smarter decisions with AI-powered analytics." 
      },

      { 
        icon: ShieldCheck, 
        title: "Custom Solutions", 
        description: "Tailored analytics for your specific industry and goals." 
      },

      { 
        icon: Cloud,
        title: "Scalability", 
        description: "Solutions designed to grow with your business."
       }

    ],

    images: {
      main: "/images/data-analytics.jpeg",
      features: [
        "/images/data-analytics_feature_1.jpeg",
        "/images/data-analytics_feature_2.jpeg",
        "/images/data-analytics_feature_3.jpeg",
        "/images/data-analytics_feature_4.jpeg"
      ]
    },
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 'cloud-solutions',
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services for your business.",
    longDescription: "Experience secure, scalable, and flexible cloud services that grow with your business. Our cloud solutions are designed to enhance performance while ensuring data security and compliance. Migrate to the cloud with ease and enjoy cost-effective, high-performance cloud solutions tailored to your business needs.",
    
    benefits: [
      "Cost optimization",
      "Enhanced security",
      "Improved scalability",
      "Increased flexibility",
    ],

    features: [
      "Cloud migration services",
      "Multi-cloud management",
      "Security implementation",
      "Performance optimization"
    ],

    whyChooseUs: [
      { 
        icon: ShieldCheck,
        title: "Security First", 
        description: "Top-tier security to protect your data in the cloud." 
      },
      
      { 
        icon: RefreshCw,
        title: "Optimized Performance", 
        description: "Ensure seamless operations with high availability." 
      },
      
      { 
        icon: Users,
        title: "Expert Guidance", 
        description: "End-to-end cloud strategy from certified professionals."
       
      }
    ],

    images: {
      main: "/images/cloud.jpeg",
      features: [
        "/images/cloud_feature_1.jpeg",
        "/images/cloud_feature_2.jpeg",
        "/images/cloud_feature_3.jpeg",
        "/images/cloud_feature_4.jpeg"
      ]
    },
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 'ai-automation',
    icon: Brain,
    title: "AI & Automation",
    description: "Leverage AI for efficiency and intelligent automation.",
    longDescription: "Leverage the power of artificial intelligence to automate routine tasks and boost efficiency. Our AI-driven solutions not only reduce costs but also improve accuracy across your operations. Use AI-driven automation to minimize errors, boost efficiency, and enhance productivity across your business processes.",
    
    benefits: [
      "Increased productivity",
      "Cost reduction",
      "Error minimization",
      "Faster processing"
    ],

    features: [
      "Process automation",
      "AI model development",
      "Natural language processing",
      "Computer vision solutions"
    ],

    whyChooseUs: [
      { 
        icon: Brain,
        title: "Intelligent Systems", 
        description: "AI-powered automation for smarter workflows." 
      },
      
      { 
        icon: ShieldCheck,
        title: "Cost Efficiency", 
        description: "Reduce operational costs with advanced automation." 
      },
      
      { 
        icon: RefreshCw,
        title: "Innovative Solutions", 
        description: "Stay ahead with cutting-edge AI applications."
       }
    ],


    images: {
      main: "/images/ai-automation.jpeg",
      features: [
        "/images/ai-automation_feature_1.jpeg",
        "/images/ai-automation_feature_2.jpeg",
        "/images/ai-automation_feature_3.jpeg",
        "/images/ai-automation_feature_4.jpeg"
      ]
    },
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export default services;
