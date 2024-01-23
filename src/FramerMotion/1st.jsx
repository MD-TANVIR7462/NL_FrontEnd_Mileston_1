import React from "react";
import { DragControls, motion, stagger } from "framer-motion";

const First = () => {
  const motionData = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      delay: stagger(0.5),
      transition: { duration: 1, staggerChildren: 0.5, delayChildren: 0.5, },
    },
    hover: {
      scale: 1.4,
      transition: {
        duration: 1.5,
      },
    },
    Tap:{
        scale: 0.2,
        rotate: 45,
      }
  };
  const children = {
    initial: { opacity: 0, scale: 0.2 },
    animate: { opacity: 1, scale: 1, delay: stagger(0.5) },
  };
  return (
  <div className="w-[50%] mx-auto border border-red-500 h-[70vh] mt-20">
      <motion.div
      variants={motionData}
      initial="initial"
      animate="animate"
    //   whileHover="hover"
    //   whileTap="Tap"
      drag
      dragConstraints={{top:-200,left:-200,button:220,right:220}}
      dragSnapToOrigin



      className="bg-red-500 rounded-md w-48 h-48 mx-auto my-[25vh] grid grid-cols-2 justify-items-center  items-center "
    >
      <motion.div
        className="w-20 h-20 bg-green-400 z-10 rounded-lg  "
        variants={children}
      >
        <img
          src="https://i.ibb.co/VDSNfQT/black-and-white-office-desk-desktop-i5qgtxi9v4hw81fv.jpg"
          className="object-cover w-full h-full "
          alt=""
        />
      </motion.div>
      <motion.div
        className="w-20 h-20 bg-green-400 z-10 rounded-md  "
        variants={children}
      >
        <img
          src="https://i.ibb.co/VDSNfQT/black-and-white-office-desk-desktop-i5qgtxi9v4hw81fv.jpg"
          className="object-cover w-full h-full "
          alt=""
        />
      </motion.div>
      <motion.div
        className="w-20 h-20 bg-green-400 z-10 rounded-md  "
        variants={children}
      >
        <img
          src="https://i.ibb.co/VDSNfQT/black-and-white-office-desk-desktop-i5qgtxi9v4hw81fv.jpg"
          className="object-cover w-full h-full "
          alt=""
        />
      </motion.div>
      <motion.div
        className="w-20 h-20 bg-green-400 z-10 rounded-md  "
        variants={children}
      >
        <img
          src="https://i.ibb.co/VDSNfQT/black-and-white-office-desk-desktop-i5qgtxi9v4hw81fv.jpg"
          className="object-cover w-full h-full "
          alt=""
        />
      </motion.div>
    </motion.div>
  </div>
  );
};

export default First;
