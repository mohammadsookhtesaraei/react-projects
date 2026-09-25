import type { ReactNode } from "react";
import { easeInOut, motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Terminal,
  Braces,
  Globe,
} from "lucide-react";
import Button from "../ui/Button";

const codeLines = [
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

const Hero = (): ReactNode => {
  return (
    <section>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[128px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[200px]" />

      {/* hero container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* left-side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-medium text-primary-light">
                #1 Coding Academy in 2025
              </span>
            </motion.div>

            {/* heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Master Modern{" "}
              <span className="gradient-text">Web Development</span>
            </h1>
            {/* description */}
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              Learn to code from industry experts. Build real-world projects
              with React, Node.js, TypeScript, and more. Launch your tech career
              today.
            </p>

            {/* cta buuton */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "50K+", label: "Students" },
                { value: "200+", label: "Courses" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right-side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            {/* floating- element */}
            {/* float-right-div */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
              className="absolute -top-6 -right-4 z-10 flex items-center gap-2 px-4 py-2.5 rounded-xl glass shadow-xl"
            >
              <Terminal className="w-5 h-5 text-accent-green" />
              <span className="text-sm text-text-primary font-medium">
                Build Ready
              </span>
            </motion.div>
           {/* float-left-div */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
              className="absolute  -bottom-4 -left-4 z-10  flex items-center gap-2 px-4 py-2.5 rounded-xl glass shadow-xl"
            >
              <Globe className="w-5 h-5 text-accent-blue" />
              <span className="text-sm font-medium text-text-primary">
                Deploy Live
              </span>
            </motion.div>



            {/* code editor card */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-surface bg-dark-800">
              {/* header-bar */}
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                <div className="flex-1 text-center">
                  <span className="text-xs text-text-muted font-medium">
                    developer.js
                  </span>
                </div>

                <Braces className="w-4 h-4 text-text-muted" />
              </div>


              {/* code-content */}
              <div className="p-6 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex"
                    key={i}
                  >
                    <span className="w-8 text-right mr-6 text-text-muted/40 select-none">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                      {line.keyword && (
                        <span className="text-purple-400">{line.text}</span>
                      )}
                      {!line.keyword && line.value && (
                        <>
                          <span className="text-sky-300">{line.text}</span>
                          <span className="text-amber-300">{line.value}</span>
                          {i < 5 && <span className="text-text-muted">,</span>}
                        </>
                      )}
                      {line.rest !== undefined && (
                        <span className="text-text-secondary">{line.rest}</span>
                      )}
                      {!line.keyword && !line.value && !line.rest && (
                        <span className="text-text-secondary">{line.text}</span>
                      )}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.8 }}
                  className="inline-block w-2.5 h-5 bg-primary-light ml-8 mt-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
