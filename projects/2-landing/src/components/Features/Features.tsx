import type { ReactNode } from "react"
import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading/SectionHeading";
import { featuresData } from "../../constants/data";


 const Features = ():ReactNode => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* background */}
     <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800 to-dark-900"/>
     {/* container */}
     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* heading-component */}
          <SectionHeading
          badge="Why Choose Us"
          title="Everything You Need to"
          highlightedTitle="Succeed"
          description="Our platform combines cutting-edge technology with expert instruction to provide the most comprehensive learning experience."
        />

        {/* cards */}
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative p-7 rounded-2xl bg-surface border border-surface-border ${feature.borderColor} transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:shadow-dark-900/50 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`}/>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
     </div>
    </section>
  );
}

export default Features;
