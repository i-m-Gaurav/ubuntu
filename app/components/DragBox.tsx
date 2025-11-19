import { motion } from "framer-motion";

export default function DragBox() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="w-32 h-32 bg-gray-800 rounded-md cursor-move resize"
    >

        <div className="h-6 bg-red-500 w-full rounded-t-md">hello</div>


     
    </motion.div>
  );
}
