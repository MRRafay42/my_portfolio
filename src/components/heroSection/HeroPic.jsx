import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import HEImage from "../../assets/HE.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img src={HEImage} alt="M rafay" className="max-h-[350px] w-auto" />

      <div className=" absolute flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-sm animate-[spin_10s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
