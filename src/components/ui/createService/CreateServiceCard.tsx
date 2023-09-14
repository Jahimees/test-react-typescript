import React, { useState } from "react";
import styles from "./createServiceCard.module.css";
import Service from "../../../types/Service";

const CreateServiceCard = () => {
  
  const [data, setData] = useState({
    name: '',
    price: '',
    time: '',
    idAccount: '',
    idServiceSubtype: ''
  })

  const createService = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(data);
  };

  console.log(data);

  return (
    <form>
      <input
        className={styles.field}
        onChange={(e) => setData(prev => ({
          ...prev, name: e.target.value
        }))}
        value={data.name}
        placeholder="Имя услуги"
      />
      <input
        className={styles.field}
        onChange={(e) => setData(prev => ({
          ...prev, price: e.target.value
        }))}
        value={data.price}
        placeholder="Цена услуги"
      />
      <input
        className={styles.field}
        onChange={(e) => setData(prev => ({
          ...prev, time: e.target.value
        }))}
        value={data.time}
        placeholder="Время на услугу"
      />
      <input
        className={styles.field}
        onChange={(e) => setData(prev => ({
          ...prev, idAccount: e.target.value
        }))}
        value={data.idAccount}
        placeholder="id Аккаунта"
      />
      <input
        className={styles.field}
        onChange={(e) => setData(prev => ({
          ...prev, idServiceSubtype: e.target.value
        }))}
        value={data.idServiceSubtype}
        placeholder="id подтипа услуги"
      />
      <button onClick={e => createService(e)}>Confirm</button>
    </form>
  );
};

export default CreateServiceCard;
