import styles from './styles.module.css'
import { Servicio } from './servicio/Servicio'
import { Bathroom, GeoFonia, Humidity, PipeGas, Repair, WaterCamera } from '../../Icons/Icons'

export function Services () {
  return (
    <div className={styles.services_container} id='services'>
      <h2>Nuestros Servicios</h2>
      <div className={styles.services}>
        <Servicio
          title='Reparamos tu baño'
          content='Reparamos cualquier taponamiento o avería que imposibilite el suministro o evacuación de las aguas.'
          Icon={Bathroom}
        />
        <Servicio
          title='Camara de Inspeccion'
          content='Diagnósticamos en tiempo real, evitando las molestias de la apertura de zanja.'
          Icon={WaterCamera}
        />
        <Servicio
          title='Geofonia'
          content='Verificamos daños de fugas usando la tecnología de los geófonos.'
          Icon={GeoFonia}
        />
        <Servicio
          title='Reparamos sin romper'
          content='Destaqueamos las tuberías sin llevar a cabo ningún tipo de daño, sin romper.'
          Icon={Repair}
        />
        <Servicio
          title='Tuberias de Gas'
          content='Reparamos y hacemos mantenimiento de tuberías de gas con medidas de seguridad.'
          Icon={PipeGas}
        />
        <Servicio
          title='Humedades'
          content='Reparamos y detectamos humedades que pueden poner en riesgo su salud.'
          Icon={Humidity}
        />
      </div>
    </div>
  )
}
