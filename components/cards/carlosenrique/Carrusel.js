import React from "react";
import styles from "../../../styles/scss/carlosenrique.module.scss";

const Carrusel = () => {
	return (
		<>
			<section className={styles.contenedor__carrusel}>
				<div className={styles.contenedor__carrusel__grid}>
					<div className={styles.horizontal__scroll}>
						<a className={styles.item} href="https://tumascotaesarte.vercel.app/" target="_blank">
							<div >
								<img
									src="https://res.cloudinary.com/petportrait/image/upload/v1613667102/carlosenriquedev/PetGalerryApp_mpp932.png"
									alt="WebApp de Mascotas"
								/>
								<p>WebApp de Mascotas</p>
							</div>
						</a>
            <a className={styles.item} href="https://panamapayroll.vercel.app/" target="_blank">
              <div>
                <img src="https://res.cloudinary.com/petportrait/image/upload/v1613755839/carlosenriquedev/ppm_rorptb.jpg" alt="Web Corporativa"/>
                <p>Web Corporativa</p>
              </div>
            </a>
            <a className={styles.item} href="https://www.luxwatchstraps.com/" target="_blank">
              <div>
                <img src="https://res.cloudinary.com/petportrait/image/upload/v1614016564/carlosenriquedev/lux_psthzn.jpg" alt="Tienda en linea" />
                <p>Tienda en Línea</p>
              </div>
            </a>
            <a className={styles.item} href="https://rutaspanama.vercel.app/" target="_blank">
              <div>
                <img src="https://res.cloudinary.com/petportrait/image/upload/v1614796824/carlosenriquedev/rutas_blxyzd.jpg" alt="Web Corporativa" />
                <p>Web Corporativa</p>
              </div>
            </a>
            <a className={styles.item} href="https://brevi.site/crearcuenta" target="_blank">
              <div>
                <img src="https://res.cloudinary.com/petportrait/image/upload/v1613752904/carlosenriquedev/brevi_n1m3r8.jpg" alt="WebApp de Tarjetas"/>
                <p>WebApp de Tarjetas</p>
              </div>
            </a>
						<div className={styles.item}></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Carrusel;
