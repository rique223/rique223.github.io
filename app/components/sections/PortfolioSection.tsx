import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import LoadingSpinner from "../LoadingSpinner";

const Portfolio = dynamic(() => import("../Portfolio/Portfolio"), {
    loading: () => <LoadingSpinner size="lg" />,
});

export const PortfolioSection: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Portfolio />
        </motion.section>
    );
};