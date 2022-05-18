import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'


const Home = () => {

    // const container = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    // }

    const item = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                type: "spring"
            }
        },
    }

    const boxContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1, transition: {
                duration: 1, staggerChildren: .1,
            }
        },
    }

    const boxVariants = {
        hidden: { opacity: 0, scale: 1.2, x: 50 },
        visible: { opacity: 1, scale: 1, x: 0 }
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Home Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Home Page</h1>

            <div className={styles.flex}>
                <Link href='/about'>
                    <a>About</a>
                </Link>

                <Link href='/mission'>
                    <a>Mission Statement</a>
                </Link>
            </div>

            <section

                className={styles.homeTextContainer}>
                <h2>Fade in Onscroll</h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellat quas doloremque veniam non alias, perspiciatis quaerat ab deserunt vel illo! Harum incidunt, provident minus earum dolore recusandae cum assumenda? Nihil accusantium facere aspernatur dolorem in sint, ex voluptatem alias magni quis explicabo a excepturi minus, consequuntur, saepe nobis eum quasi voluptatum veniam repellat vitae consequatur culpa? Animi qui quam illum, adipisci amet sit doloremque quos ea illo natus.
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas repellendus hic incidunt dolores explicabo odit sunt? Neque, obcaecati hic sed accusantium officiis quos ipsa quasi laudantium itaque facilis. Perferendis possimus pariatur officia distinctio, commodi soluta explicabo quidem sapiente ipsum, sequi, eius quaerat laborum. Vel, eaque. Repellendus quis consectetur qui saepe ratione libero recusandae soluta delectus obcaecati officia corporis facere, nihil, laboriosam magnam. Dolore, corporis! Voluptatum quisquam provident illum error, cumque explicabo atque aliquid deserunt. Quasi alias ad eos deserunt quidem culpa cupiditate ipsum fugiat recusandae. Vel nulla, incidunt repudiandae praesentium, repellendus enim, omnis accusantium rem pariatur rerum officia non aut hic! Inventore beatae mollitia, fuga quidem repellendus fugiat laboriosam dolor ipsam voluptas minus vel quia, molestias explicabo eos accusamus voluptate velit vitae in nisi ipsum repudiandae officiis. Fuga autem voluptatem sunt exercitationem adipisci libero voluptates laborum quia unde neque? Quis reprehenderit non suscipit omnis enim sapiente, magnam, amet quos, at nam in distinctio aliquam iste dolores corporis repellendus. A reprehenderit, ex nam in assumenda iste debitis voluptatem provident aspernatur?
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut alias inventore, repellendus totam architecto blanditiis rem. Nobis, odit quidem?
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum exercitationem dignissimos quibusdam, ipsa tenetur beatae itaque optio quas velit sapiente voluptatum. Quibusdam nam ad culpa facilis animi iure qui nostrum placeat veritatis maxime dolorem alias omnis vel, voluptatibus obcaecati quia debitis quo laborum? Nisi commodi eum inventore fugit libero maiores.
                </motion.p>

                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet.</motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam repellendus, earum et dolorum accusantium. Eaque minus tenetur voluptate labore vel ducimus adipisci veniam blanditiis corrupti, officiis, deleniti in dolores provident magni sequi quos. Amet nisi, libero enim alias repudiandae harum eaque voluptatibus, doloribus voluptatem laborum fugit exercitationem accusantium iusto vel illo quaerat hic molestiae adipisci ipsa culpa? Vero odit sit odio officia maxime quae aliquam nulla illo aspernatur sunt voluptatem necessitatibus ipsam, nam nisi, omnis eos? Iste, est dolores!
                </motion.p>
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>Lorem, ipsum dolor.</motion.h3>
                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae.</li>
                    <li>Lorem, ipsum dolor.</li>
                </motion.ul>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum minima debitis incidunt accusantium officia nobis aut distinctio iusto, provident voluptate ipsam recusandae vitae iste ipsa non commodi voluptates, mollitia in, corrupti omnis beatae? Dolore, repellat! Reprehenderit, nisi! Dolorem maxime praesentium et? Magnam, officiis in eius voluptates, vero nemo dolore incidunt qui deserunt modi dicta minima. Quo illo unde modi veniam fugit in quae, nihil qui, dignissimos incidunt dolor neque alias doloribus reprehenderit suscipit recusandae! Nam possimus eum maxime, atque praesentium consequatur dolore minima suscipit voluptatibus quasi velit et delectus quam provident nostrum perspiciatis eveniet itaque repellat. Dignissimos, sunt minus! Iusto officiis tenetur laboriosam deleniti modi accusamus facere repellendus aspernatur repellat harum voluptates, quasi quibusdam veniam id, repudiandae recusandae fugiat laudantium ducimus reiciendis soluta non, quaerat corrupti! Eius esse debitis, incidunt doloribus omnis facere cumque magni exercitationem accusantium pariatur, beatae qui. Voluptatem fugiat excepturi illo sapiente est cumque, a aliquam delectus, reiciendis distinctio aliquid placeat assumenda unde, quisquam quae nobis esse quasi sint voluptates itaque laborum ab? Quam obcaecati, voluptas aliquid quae deleniti possimus libero excepturi suscipit aperiam assumenda sequi id perspiciatis accusamus doloremque voluptatum reprehenderit accusantium fuga eos fugiat odio molestiae enim porro. Ab iusto minima placeat id ipsam.
                </motion.p>


                <h2>Fade in Staggered</h2>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={boxContainerVariants}
                    className={styles.staggerBoxContainer}>

                    <motion.div
                        variants={boxVariants}>1</motion.div>
                    <motion.div
                        variants={boxVariants}>2</motion.div>
                    <motion.div
                        variants={boxVariants}>3</motion.div>
                    <motion.div
                        variants={boxVariants}>4</motion.div>
                    <motion.div
                        variants={boxVariants}>5</motion.div>
                    <motion.div
                        variants={boxVariants}>6</motion.div>
                    <motion.div
                        variants={boxVariants}>7</motion.div>
                    <motion.div
                        variants={boxVariants}>8</motion.div>
                    <motion.div
                        variants={boxVariants}>9</motion.div>
                    <motion.div
                        variants={boxVariants}>10</motion.div>

                </motion.div>

            </section>
        </div>
    )
}

export default Home
