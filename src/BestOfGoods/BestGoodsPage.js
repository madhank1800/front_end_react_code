import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import './BestGoodsPage.css';
const BestGoodsPage = () => {

    const [success, setSuccess] = useState(false);
  
    const [mobileArray, setMobileArray] = useState();

    const [scrollX, SetScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
     const [scrollStart, setScrollStart] = useState(true);



    console.log("scrollX", scrollX);
const scrl = useRef(null);

 const slide = (shift) => {
     scrl.current.scrollLeft += shift;
     
   SetScrollX(scrollX + shift); // Updates the latest scrolled postion
   console.log("scroll", scrl.current.scrollLeft);
   console.log("scroll width", scrl.current.scrollWidth);
  console.log("scroll offset width", scrl.current.offsetWidth);
   //For checking if the scroll has ended
   if (
     Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
     scrl.current.offsetWidth
   ) {
       setScrollEnd(true);
        setScrollStart(false);
   } else {
       setScrollEnd(false);
       setScrollStart(true);
        
   }
 };

    const data = { productName: "oppo" }
    // let list =[];
    // console.log("list", list);
    async function BestmobileDetails() {
        const BestmobileDetails = await axios.post(
            "http://localhost:3001/routes/getMobilesDetailsApi", data
        );
        
 
                console.log(
                  "bestOf mobile details data",
                  BestmobileDetails
                );
        console.log("bestOf mobile details data", BestmobileDetails.data);
       const list=BestmobileDetails.data;
        console.log("list1", list);
        setMobileArray(list)
         setSuccess(true);
      
    }


    
    useEffect(() => {
        BestmobileDetails();

       
    }, []);
//   console.log("list", list);

  
    return (
      <>
        {success && (
          <div className="wholeBox">
            <div className="withinBox">
              <div className="titleName">
                <span className="titleClass">Best of electronics</span>
              </div>
              <div className="withinRow" ref={scrl}>
                {mobileArray.map((lists, index) => {
                  console.log("lists", lists);
                  return (
                    <>
                      <div className=" withinCard " key={index}>
                        <div className=" imageClass ">
                          <img
                            src={`data:image/jpeg;base64,${lists.generalDetails.images.firstImage}`}
                            alt="tutut"
                          />
                        </div>
                        <div className="PriceClassCard ">
                          <span className="priceclass">
                            Rs.
                            {lists.generalDetails.price}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
                {!scrollEnd && (
                  <>
                    <button
                      className="chevronRightClasss"
                      onClick={() => {
                        slide(+50);
                      }}
                    >
                      <i className="bi bi-chevron-right arrowIconRight"></i>
                    </button>
                  </>
                )}
                {!scrollStart && (
                  <>
                    <button
                      className="chevronLeftClasss"
                      onClick={() => {
                        slide(-350);
                        //  setScrollEnd(true);
                      }}
                    >
                      <i className="bi bi-chevron-left arrowIconLeft"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="ImageSideClass">
              <img
                src="../../laptopHeadset.jpg"
                alt="tt"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        )}
      </>
    );
}

export default BestGoodsPage;