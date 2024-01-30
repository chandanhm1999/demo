import React from "react";
import styles from "../styles/MapCard.module.css";
import Image from "next/image";

const MapCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h1>Venue Location</h1>
        <p>Join us at this wonderful location for a special celebration!</p>
        <button className={styles.mapButton}>Locate on Map</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/img/photo/maps.jpg" alt="Map" width={750} height={750} />
      </div>
      
    </div>
  );
};

export default MapCard;
