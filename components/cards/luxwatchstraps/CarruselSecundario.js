import React from "react";
import styles from "../../../styles/scss/luxwatchstraps.module.scss";

const CarruselSecundario = () => {
	return (
		<>
			<section className={styles.carrusel_secundario}>
				<div className={styles.grid}>
					<div className={styles.scroll}>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/collections/lux-silicone-dive-flat-watch-bands-rubber-straps"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624089887/carlosenriquedev/collections2_luqewa.jpg"
									alt="Rubber Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>RUBBER</p>
								</div>
							</div>
						</a>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/collections/lux-genuine-leather-watch-bands-straps"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624031567/carlosenriquedev/collections1_ll8pkc.jpg"
									alt="Leather Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>LEATHER</p>
								</div>
							</div>
						</a>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/collections/nylon-nato-straps"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624089887/carlosenriquedev/collections3_il8m65.jpg"
									alt="Nylon Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>NYLON</p>
								</div>
							</div>
						</a>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/collections/lux-grand-prix-rally-watch-straps"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624089887/carlosenriquedev/collections4_dg9ltd.jpg"
									alt="Rally Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>RALLY</p>
								</div>
							</div>
						</a>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/collections/lux-exotic-skins-watch-straps"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624089887/carlosenriquedev/collections5_ajsbiu.jpg"
									alt="Exotic Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>EXOTIC</p>
								</div>
							</div>
						</a>
						<a
							className={styles.item}
							href="https://www.luxwatchstraps.com/products/20mm-vegan-leather-watch-bands-strap?variant=32290039300149"
						>
							<div className={styles.collection_box}>
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1624089887/carlosenriquedev/collections6_fqkmid.jpg"
									alt="Vegan Watch Straps"
									width="122"
									height="122"
								/>
								<div className={styles.text_box}>
									<p>VEGAN</p>
								</div>
							</div>
						</a>
						<div className={styles.item}></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CarruselSecundario;
