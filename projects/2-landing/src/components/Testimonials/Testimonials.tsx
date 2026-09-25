import { type ReactNode } from "react";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";


import { testimonialsData } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading/SectionHeading";


const Testimonials = ():ReactNode => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Reviews"
          title="Loved by Developers"
          highlightedTitle="Worldwide"
          description="Join thousands of successful graduates who transformed their careers with CodeMaster Academy."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-surface border border-surface-border hover:border-primary/30 transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:shadow-dark-900/50 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-text-secondary leading-relaxed mb-6">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-surface-border">
                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold`}>{t.avatar}</div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;