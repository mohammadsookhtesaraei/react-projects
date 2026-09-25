import { BookOpen, Code2, Laptop, MessageCircle, Rocket, Shield, Trophy, Users, Zap, type LucideIcon } from "lucide-react";



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



