import React, { useMemo, useState } from "react";
import styles from "./MasterServices.module.css";
import ServiceCard from "../../ui/serviceCard/ServiceCard";
import Services from "../../../services.json";
import Service from "../../../types/Service";
import CreateServiceCard from "../../ui/createService/CreateServiceCard"

const MasterServices = () => {
  const [Services, setServices] = useState('')
  const services = useMemo(() => Services, [])
  console.log("render");

  return (
    <div className={styles.silence}>
      <h1>Добро пожаловать!</h1>
      <p>Здесь вы можете посмотреть все услуги, предоставляемые мастерами</p>
      <CreateServiceCard />
      
      {services.map((service: Service) => (
        <ServiceCard key={service.idAccount} service={service} />
      ))}
    </div>
  );
};

export default MasterServices;
