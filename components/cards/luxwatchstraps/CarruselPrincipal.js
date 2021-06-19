import React from "react";
import styles from "../../../styles/scss/luxwatchstraps.module.scss";

const Carrusel = () => {
	return (
		<>
			<section className={styles.contenedor__carrusel}>
				<div className={styles.contenedor__carrusel__grid}>
					<div className={styles.horizontal__scroll}>
						<a
							className={styles.item}
							href="https://isofranestyle.luxwatchstraps.com/"
							target="_blank"
						>
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1619623385/carlosenriquedev/lux_isofrane_style_watch_band-orange-text_ymsase.jpg"
                alt="Isofrane style watch straps"
                width="143"
                height="273"
              />
						</a>
						<a
							className={styles.item}
							href="https://isofranestyle.luxwatchstraps.com/"
							target="_blank"
						>
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1619623676/carlosenriquedev/lux_isofrane_style_watch_band-blue-text_kjdoxf.jpg"
                alt="Isofrane style watch straps"
                width="143"
                height="273"
              />
						</a>
						<a
							className={styles.item}
							href="https://isofranestyle.luxwatchstraps.com/"
							target="_blank"
						>
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1619623119/carlosenriquedev/lux_isofrane_style_watch_band-black-texto3_n2gmr2.jpg"
                alt="Isofrane style watch straps"
                width="143"
                height="273"
              />
						</a>
						<a
							className={styles.item}
							href="https://isofranestyle.luxwatchstraps.com/"
							target="_blank"
						>
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1619624275/carlosenriquedev/lux_isofrane_style_watch_band-yellow-text2_vmtzw5.jpg"
                alt="Isofrane style watch straps"
                width="143"
                height="273"
              />
						</a>
						<div className={styles.item}></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Carrusel;
