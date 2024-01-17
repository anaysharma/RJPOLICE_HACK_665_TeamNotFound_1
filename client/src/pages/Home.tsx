import { motion } from "framer-motion";
import CreatePostForm from "../components/CreatePostForm";
import Header from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Header />
      <section className="px-6 py-10">
        <h2 className="pb-6 text-center text-lg font-bold text-sky-600">
          Tell us your opinion about the services we have provided you
        </h2>
        <CreatePostForm />
      </section>
    </motion.main>
  );
}
