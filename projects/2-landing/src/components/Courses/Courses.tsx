import type { ReactNode } from "react"
import { motion } from "framer-motion";
import { Clock, BarChart3, Users, Star, ArrowRight } from "lucide-react";
import SectionHeading from "./../ui/SectionHeading/SectionHeading";
import Badge from "../ui/Badge/Badge";
import Button from "../ui/Button";

import { coursesData } from "../../constants/data";



function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400': ' text-text-muted'}`}/>
      ))}
      <span className="text-sm font-medium text-text-primary ml-1">{rating}</span>
    </div>
  );
};




const Courses = () => {
  return (
    <section id="courses" className="relative py-24 lg:py-32">
      {/* background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <SectionHeading
          badge="Popular Courses"
          title="Learn In-Demand"
          highlightedTitle="Skills"
          description="Industry-aligned courses designed by experts to help you build real-world skills and advance your career."
        />
          {/*cards  */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* map-data for each card */}
          {coursesData.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col rounded-2xl bg-surface  border-surface-border ${course.borderColor} transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:shadow-dark-900/50 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="primary">🔥 Most Popular</Badge>
                </div>
              )}

              {/* Card Header with Gradient */}
              <div className={`relative h-40 bg-linear-to-br ${course.gradient} flex items-center justify-center `}>
                <span className="text-5xl">{course.icon}</span>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-dark-700 text-text-secondary">{tag}</span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-light transition-colors">{course.title}</h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{course.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5" />
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students}
                  </span>
                </div>

                <StarRating rating={course.rating} />

                {/* Price & CTA */}
                <div className="mt-5 pt-5 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-text-primary">{course.price}</span>
                    <span className="text-sm text-text-muted line-through">{course.originalPrice}</span>
                  </div>
                  <Button variant="primary" size="sm">
                    Enroll
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
