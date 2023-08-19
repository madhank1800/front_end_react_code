import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './SingleMobile.module.css';
import Navbar from "../Navbar/Navbar";

import axios from "axios";
const SingleMobile = () => {
  
    let mobileId = useParams();


    console.log("mobileId", mobileId);

    async function particularMobileDetails(id) {
      

        let ID = parseInt(id.mobileId);
      try {
        const particularMobileDetails = await axios.get(
          `http://localhost:3001/routes/getMobilesDetailsApi/${ID}`
        );
        console.log("particularMobileDetails", particularMobileDetails);
      } catch (error) {
        console.error(error);
      }
    //   console.log("particularMobileDetails", particularMobileDetails);
  }

    useEffect(() => {
      particularMobileDetails(mobileId);
    }, [mobileId]);







  return (
    <>
      <Navbar />
      <div>
        <p className={styles.tututclass}>tutuututuututuutu</p>
        <p>tutuututuututuutu</p>
        <p>tutuututuututuutu</p>
        <p>tutuututuututuutu</p> <p>tutuututuututuutu</p>
        <p>tutuututuututuutu</p> <p>tutuututuututuutu</p>
        <p>tutuututuututuutu</p>
      </div>
    </>
  );
}

export default SingleMobile;