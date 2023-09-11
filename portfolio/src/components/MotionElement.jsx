import {motion} from "framer-motion";

 import {useInView} from 'react-intersection-observer'; 
// eslint-disable-next-line react/prop-types
export const AnimatedElement = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
  
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  };
  