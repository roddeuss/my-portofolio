// components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
      <motion.div
        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
