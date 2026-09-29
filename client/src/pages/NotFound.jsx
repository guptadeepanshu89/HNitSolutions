import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-24 text-center">
      <SEO title="404 | HNitSolutions" description="This page does not exist." path="/404" />
      <div className="blob left-10 top-20 h-64 w-64 bg-brand-purple/30" />
      <div className="blob bottom-10 right-10 h-64 w-64 bg-brand-cyan/20" />
      <div>
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-8xl font-semibold gradient-text"
        >
          404
        </motion.p>
        <h1 className="mt-6 text-3xl font-semibold">Looks like you've taken a wrong turn.</h1>
        <p className="mt-3 text-muted">This route does not exist in the HNitSolutions system.</p>
        <Button to="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
