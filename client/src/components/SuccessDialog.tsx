import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessDialog({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(5);
  useEffect(() => {
    if (count <= 0) return;
    setTimeout(() => setToggle(false), 5000);
    const id2 = setTimeout(() => setCount((prev) => prev - 1), 1000);

    return () => {
      clearTimeout(id2);
    };
  }, [count, setToggle]);
  return (
    <div className="fixed inset-0 bottom-auto z-50 flex h-svh items-center justify-center bg-black/40 max-sm:items-end">
      <motion.div
        className="m-4 flex flex-col items-center gap-4 rounded-md border bg-white p-4 shadow-md max-sm:flex-1"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <img src="/check.gif" alt="" />
        <span className="text-base">Post submitted successfuly</span>
        <button
          className="w-full rounded border-2 border-sky-600 bg-sky-600 px-10 py-2 text-white hover:border-sky-500 hover:bg-sky-500"
          onClick={() => {
            navigate("/");
            setToggle(false);
          }}
        >
          Ok ({count}s)
        </button>
      </motion.div>
    </div>
  );
}
