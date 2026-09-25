import { BookOpen, Code2, Laptop, MessageCircle, Rocket, Shield, Trophy, Users, Zap, type LucideIcon } from "lucide-react";


// hero data
export const codeLines:{
    
    indent: number;
    text: string;
    keyword: boolean;
    rest?: string;
    value?: undefined |string;
}[]
 = [
  { indent: 0, text: "const", keyword: true, rest: " developer = {" },
  { indent: 1, text: "name:", keyword: false, value: "'You'" },
  {
    indent: 1,
    text: "skills:",
    keyword: false,
    value: "['React', 'Node.js', 'TypeScript']",
  },
  { indent: 1, text: "level:", keyword: false, value: "'Expert'" },
  { indent: 1, text: "ready:", keyword: false, value: "true" },
  { indent: 0, text: "};", keyword: false, rest: "" },
  { indent: 0, text: "", keyword: false, rest: "" },
  { indent: 0, text: "developer", keyword: false, rest: ".startJourney();" },
];



// features data

type TFeatures = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bg: string;
    borderColor: string;
}
export const featuresData: TFeatures[] = [
    {
        icon: Code2,
        title: "Interactive Coding Labs",
        description:
            "Practice coding in real-time with our browser-based IDE. Get instant feedback and learn by doing.",
        color: "text-primary-light",
        bg: "bg-primary/10",
        borderColor: "hover:border-primary/40",
    },
    {
        icon: Users,
        title: "Expert Instructors",
        description:
            "Learn from senior developers at top tech companies who bring real-world experience to every lesson.",
        color: "text-accent-cyan",
        bg: "bg-accent-cyan/10",
        borderColor: "hover:border-accent-cyan/40",
    },
    {
        icon: BookOpen,
        title: "Structured Curriculum",
        description:
            "Follow a carefully designed learning path from fundamentals to advanced topics with clear milestones.",
        color: "text-accent-green",
        bg: "bg-accent-green/10",
        borderColor: "hover:border-accent-green/40",
    },
    {
        icon: Trophy,
        title: "Certificates & Badges",
        description:
            "Earn industry-recognized certificates and badges to showcase your skills to employers.",
        color: "text-accent-orange",
        bg: "bg-accent-orange/10",
        borderColor: "hover:border-accent-orange/40",
    },
    {
        icon: Zap,
        title: "AI-Powered Learning",
        description:
            "Get personalized learning recommendations and AI-assisted code reviews for faster progress.",
        color: "text-accent-pink",
        bg: "bg-accent-pink/10",
        borderColor: "hover:border-accent-pink/40",
    },
    {
        icon: Shield,
        title: "Job Guarantee",
        description:
            "Complete our career track programs and land a job within 6 months, or get your money back.",
        color: "text-accent-blue",
        bg: "bg-accent-blue/10",
        borderColor: "hover:border-accent-blue/40",
    },
    {
        icon: Laptop,
        title: "Real-World Projects",
        description:
            "Build portfolio-ready projects that solve actual problems. Stand out to employers with practical skills.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        borderColor: "hover:border-purple-500/40",
    },
    {
        icon: Rocket,
        title: "Career Support",
        description:
            "Resume reviews, interview prep, and direct connections to hiring partners at top companies.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        borderColor: "hover:border-cyan-500/40",
    },
    {
        icon: MessageCircle,
        title: "Community Access",
        description:
            "Join a thriving community of 50K+ developers. Collaborate, network, and grow together.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        borderColor: "hover:border-emerald-500/40",
    },
];


// curses data

type TCursesData={
     title: string;
    description: string;
    icon: string;
    level: string;
    duration: string;
    students: string;
    rating: number;
    price: string;
    originalPrice: string;
    tags: string[];
    gradient: string;
    borderColor: string;
    popular: boolean;
}
export const coursesData:TCursesData[] = [
  {
    title: "React & Next.js Mastery",
    description:
      "Build modern web applications with React 18, Next.js 14, Server Components, and the latest patterns.",
    icon: "⚛️",
    level: "Intermediate",
    duration: "12 weeks",
    students: "8,500+",
    rating: 4.9,
    price: "$99",
    originalPrice: "$199",
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/40",
    popular: true,
  },
  {
    title: "Full-Stack JavaScript",
    description:
      "Master both frontend and backend development with Node.js, Express, MongoDB, and React.",
    icon: "🚀",
    level: "Beginner",
    duration: "16 weeks",
    students: "12,300+",
    rating: 4.8,
    price: "$129",
    originalPrice: "$249",
    tags: ["Node.js", "Express", "MongoDB"],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/40",
    popular: false,
  },
  {
    title: "TypeScript Deep Dive",
    description:
      "Go from TypeScript beginner to expert. Learn advanced types, generics, and enterprise patterns.",
    icon: "📘",
    level: "Intermediate",
    duration: "8 weeks",
    students: "5,200+",
    rating: 4.9,
    price: "$79",
    originalPrice: "$159",
    tags: ["TypeScript", "Generics", "Patterns"],
    gradient: "from-blue-600/20 to-indigo-500/20",
    borderColor: "hover:border-indigo-500/40",
    popular: false,
  },
  {
    title: "Python & AI Fundamentals",
    description:
      "Learn Python programming and dive into machine learning, data science, and AI with hands-on projects.",
    icon: "🐍",
    level: "Beginner",
    duration: "14 weeks",
    students: "15,800+",
    rating: 4.7,
    price: "$109",
    originalPrice: "$219",
    tags: ["Python", "ML", "Data Science"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "hover:border-yellow-500/40",
    popular: false,
  },
  {
    title: "DevOps & Cloud Engineering",
    description:
      "Master Docker, Kubernetes, AWS, CI/CD pipelines, and infrastructure as code for modern deployment.",
    icon: "☁️",
    level: "Advanced",
    duration: "10 weeks",
    students: "3,900+",
    rating: 4.8,
    price: "$149",
    originalPrice: "$299",
    tags: ["Docker", "AWS", "Kubernetes"],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/40",
    popular: false,
  },
  {
    title: "UI/UX Design for Developers",
    description:
      "Learn design thinking, Figma, user research, and create beautiful interfaces as a developer.",
    icon: "🎨",
    level: "Beginner",
    duration: "6 weeks",
    students: "6,700+",
    rating: 4.9,
    price: "$69",
    originalPrice: "$139",
    tags: ["Figma", "Design", "UX"],
    gradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "hover:border-pink-500/40",
    popular: false,
  },
];


// stats data
import { GraduationCap, Award, Globe } from "lucide-react";

type  TStas={
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
    description: string;
    color: string;
    bg: string;
};


export const statsData:TStas[] = [
  {
    icon: GraduationCap,
    value: 50000,
    suffix: "+",
    label: "Students Enrolled",
    description: "Active learners worldwide",
    color: "text-primary-light",
    bg: "bg-primary/10",
  },
  {
    icon: BookOpen,
    value: 200,
    suffix: "+",
    label: "Expert Courses",
    description: "Across 15+ technologies",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Completion Rate",
    description: "Industry-leading engagement",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Globe,
    value: 120,
    suffix: "+",
    label: "Countries Reached",
    description: "Global learning community",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
];



// testomonial data
type TTestimonials={
    name: string;
    role: string;
    avatar: string;
    avatarBg: string;
    quote: string;
    rating: number;
}
export const testimonialsData:TTestimonials[] = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Google",
    avatar: "SC",
    avatarBg: "from-violet-500 to-purple-600",
    quote:
      "CodeMaster Academy transformed my career. I went from knowing basic HTML to landing a job at Google in just 8 months. The curriculum is incredible and the instructors are world-class.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Full-Stack Engineer at Stripe",
    avatar: "MJ",
    avatarBg: "from-cyan-500 to-blue-600",
    quote:
      "The hands-on projects and real-world focus set CodeMaster apart from every other platform I've tried. The community support is amazing — I never felt stuck.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer at Netflix",
    avatar: "ER",
    avatarBg: "from-pink-500 to-rose-600",
    quote:
      "I tried multiple online platforms before finding CodeMaster. The structured learning paths and AI-powered feedback made all the difference. Worth every penny!",
    rating: 5,
  },
  {
    name: "Alex Kim",
    role: "DevOps Lead at Amazon",
    avatar: "AK",
    avatarBg: "from-green-500 to-emerald-600",
    quote:
      "The DevOps and Cloud Engineering course was exactly what I needed to level up. Within 3 months, I got promoted to a lead role. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "React Developer at Shopify",
    avatar: "PP",
    avatarBg: "from-amber-500 to-orange-600",
    quote:
      "The React & Next.js Mastery course is by far the best React course I've ever taken. The projects are genuinely challenging and prepared me for real work.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Tech Lead at Microsoft",
    avatar: "DT",
    avatarBg: "from-blue-500 to-indigo-600",
    quote:
      "As someone who's been coding for years, I was impressed by the depth of the TypeScript Deep Dive course. It filled gaps I didn't even know I had.",
    rating: 5,
  },
];




