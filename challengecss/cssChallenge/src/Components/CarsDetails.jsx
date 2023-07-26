/* eslint-disable react/prop-types */
import styles from "./CarsDetails.module.css";

const CarsDetails = ({ car }) => {
  return (
    <div className={styles.card}>
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.color}</p>
      <p>{car.age}</p>
      <p>{car.km}</p>
      <p>{car.carValue}</p>
      {car.newCar === true ? <p>Carro 0 km!</p> : <p>Bem conservado!</p>}
    </div>
  );
};

export default CarsDetails;
