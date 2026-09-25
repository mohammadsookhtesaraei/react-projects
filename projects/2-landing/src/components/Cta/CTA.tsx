import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[200px]" />

{/* container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-surface to-accent-cyan/10
            border border-surface-border p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Glow Effects */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-cyan/20 rounded-full blur-[100px]" />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary-light border border-primary/20 mb-6"
            >
              <Send className="w-3.5 h-3.5" />
              Newsletter
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Start Your Coding{" "}
              <span className="gradient-text">Journey Today</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Join 50,000+ developers who are building the future. Get free
              resources, course updates, and exclusive tips delivered to your
              inbox.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-dark-700 border border-surface-border text-text-primary placeholder-text-muted text-sm  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="shrink-0"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-4 text-xs text-text-muted">
              No spam, ever. Unsubscribe at any time. By subscribing you agree
              to our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
