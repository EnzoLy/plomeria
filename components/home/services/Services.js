import styles from './styles.module.css'
import { Servicio } from './servicio/Servicio'
import { Bathroom, Drywall, GeoFonia, Humidity, PipeGas, Repair, WaterCamera, Painter, Roof, Veneer, Fuga, Destello } from '../../Icons/Icons'

export function Services () {
  return (
    <arcticle className={styles.services_container} id='services'>
      <h2>Nuestros Servicios</h2>
      <div className={styles.services}>
        <Servicio
          title='Drywall'
          content='Hacemos contrucciones rapidas gracias al sistema de construccion Drywall'
          Icon={Drywall}
        />
        <Servicio
          title='Obra blanca'
          content='Hacemos fontanería, la carpintería interior y exterior, acabados, soldaduras, revestimientos, pintura, cocina, baños y más'
          Icon={Painter}
        />
        <Servicio
          title='Techos'
          content='Instalamos y reparamos techos de todo tipo, de acuerdo a las necesidades de cada cliente'
          Icon={Roof}
        />
        <Servicio
          title='Enchape'
          content='Hacemos recubrimientos y revestimientos en muros, escaleras, columnas vigas, etc'
          Icon={Veneer}
        />
        <Servicio
          title='Localizaciones de fugas'
          content='Localizamos y reparamos fugas de gas y agua, asi evitamos que se produzcan accidentes'
          Icon={Fuga}
        />
        <Servicio
          title='Reparamos tu baño'
          content='Reparamos cualquier taponamiento o avería que imposibilite el suministro o evacuación de las aguas'
          Icon={Bathroom}
        />
        <Servicio
          title='Camara de inspeccion'
          content='Diagnósticamos en tiempo real, evitando las molestias de la apertura de zanja'
          Icon={WaterCamera}
        />
        <Servicio
          title='Geofonia'
          content='Verificamos daños de fugas usando la tecnología de los geófonos'
          Icon={GeoFonia}
        />
        <Servicio
          title='Reparamos sin romper'
          content='Destaqueamos las tuberías sin llevar a cabo ningún tipo de daño, sin romper'
          Icon={Repair}
        />
        <Servicio
          title='Tuberias de gas'
          content='Reparamos y hacemos mantenimiento de tuberías de gas con medidas de seguridad'
          Icon={PipeGas}
        />
        <Servicio
          title='Humedades'
          content='Reparamos y detectamos humedades que pueden poner en riesgo su salud'
          Icon={Humidity}
        />
        <Servicio
          title='Electricidad'
          content='Reparamos y detectamos humedades que pueden poner en riesgo su salud'
          Icon={Destello}
        />
      </div>
    </arcticle>
  )
}
