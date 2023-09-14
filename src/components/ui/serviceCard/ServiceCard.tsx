import React from "react";
import styles from "./ServiceCard.module.css";
import "../../../assets/general.css";
import Service from "../../../types/Service";

const ServiceCard = ({ service}: {service: Service }) => {
  {
    return (
      <div className={styles.serviceCard}>
        <div className={styles.cardField}>Наименование услуги: {service.name}</div>
        <div className={styles.cardField}>Стоимость услуги: {service.price} р.</div>
        <div className={styles.cardField}>Время на услугу: {service.time}</div>
        <div className={styles.cardField}>Подтип услуги: {service.idServiceSubtype}</div>
        <div className={styles.cardField}>Мастер: {service.idAccount}</div>
        <button className="btn">Открыть</button>
      </div>
    );
  }
};

export default ServiceCard;
