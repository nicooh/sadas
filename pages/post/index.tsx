import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";

export default function PostsPage(){
    const [loading, setLoading] = useState(false);

    useEffect(() => setLoading(true), []);
    return (
        <motion.div>
            {loading && (
                <motion.div className={styles.container}>
                    <section>
                        <motion.div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Articoli</h1>
                            <PostList  />
                        </motion.div>

                    </section>
                </motion.div>)}
        </motion.div>
    );
}