import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightedTitle,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
        {title}{' '}
        {highlightedTitle && <span className="gradient-text">{highlightedTitle}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}