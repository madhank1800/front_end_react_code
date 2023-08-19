import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { mobileProducts }  from "../REDUX/actions/MobileProductActions";
import TopStories from "../TOP_STORIES/TopStories";
import Navbar from "../Navbar/Navbar";
import './MobilePage.css';
import { Link } from "react-router-dom";

// import { UseSelector } from "react-redux/es/hooks/useSelector";


const MobilePage = () => {


  let ProductDetailsButtons = [
    { id: 1, name: "oppo" },
    { id: 2, name: "realme8" },
    { id: 3, name: "nokia" },
    { id: 4, name: "Apple" },
  ];
  const dispatch = useDispatch();
  const mobilesRendered = useSelector((state) => state.mobileDeatailsOfReducer.products);
  console.log("mobileRendered", mobilesRendered);
  const data={productName:"oppo"}

  async function mobileDetails(id) {
    data.productName = id;
    console.log("data pppp", data);
       const mobileDetails = await axios.post(
         "http://localhost:3001/routes/getMobilesDetailsApi",data
       );
      console.log("mobileDetails", mobileDetails);
            dispatch(mobileProducts(mobileDetails.data));
  }
  



//   async function particularMobileDetails(id) {
  
//     try {
//       const particularMobileDetails = await axios.get(
//         `http://localhost:3001/routes/getMobilesDetailsApi/${id}`
//       );
//       console.log("particularMobileDetails", particularMobileDetails);
//     } catch (error) {
//       console.error(error);
//     }
//     console.log("particularMobileDetails", particularMobileDetails);
// }






    return (
      <>
        <div className="WholeMobilePage">
          <Navbar />
        </div>

        {/* <div className="container"> */}
        <div className="TotalPageWhole">
          <div className="totalPageInside">
            <div className="FilterInsideWhole">
              <div className="FilterInsideWholeCol"></div>
            </div>

            <div className="MobileListWholePart">
              <div className="MobileListWhole">
                <div
                  className="upperPartButtons"
                  style={{ backgroundColor: "white" }}
                >
                  {ProductDetailsButtons.map((listbuttons) => {
                    // console.log("index", index);
                    const { name } = listbuttons;
                    return (
                      <div className="buttonStyles" key={listbuttons.id}>
                        <div className="productDetailsStylesButtons">
                          <button
                            onClick={() => {
                              mobileDetails(name);
                            }}
                            id="oppoButton"
                          >
                            {listbuttons.name}
                          </button>
                          <span
                            className="MobileStylecss"
                            style={{ backgroundColor: "white" }}
                          >
                            {listbuttons.name}
                          </span>
                          <span
                            className="MobileStylecss"
                            style={{ backgroundColor: "white" }}
                          >
                            shop now
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="buttonStyles">
                    <div className="productDetailsStylesButtons">
                      <button onClick={mobileDetails} id="oppoButton">
                        oppo
                      </button>
                      <span
                        className="MobileStylecss"
                        style={{ backgroundColor: "white" }}
                      >
                        oppo
                      </span>
                      <span
                        className="MobileStylecss"
                        style={{ backgroundColor: "white" }}
                      >
                        shop now
                      </span>
                    </div>
                  </div> */}

                  {/* <div className="buttonStyles">
                    <div className="productDetailsStylesButtons">
                      <button onClick={mobileDetails} id="oppoButton">
                        oppo
                      </button>
                      <span
                        className="MobileStylecss"
                        style={{ backgroundColor: "white" }}
                      >
                        oppo
                      </span>
                      <span
                        className="MobileStylecss"
                        style={{ backgroundColor: "white" }}
                      >
                        shop now
                      </span>
                    </div>
                  </div>  */}
                </div>
                <hr />
                <div
                  className="secondPartMobileList"
                  style={{ backgroundColor: "white" }}
                >
                  {mobilesRendered.map((products,index) => {
                    console.log("products", products);

                    const {
                      productName,
                      modelName,
                      images: { firstImage},
                      processors,
                      ram,
                      battery,
                      rom,
                      price,
                      discount,
                      deliveryDate,
                      warranty,id
                    } = products.generalDetails;

                    const { displaySize, DisplayType, ResolutionType } =
                      products.DisplayFeautres;
                    
                    
                    const { PrimaryCamera, PrimaryCameraFeautres } =
                      products.CameraFeautres;
                    
                    const {
                      ProcessorCore,
                      operatingSystem,
                      PrimaryClockSpeed,
                    } = products.OsAndProcessorsFeautres;
;
                    return (
                      <>
                        <Link
                          to={`${id}`}
                          target="_blank"
                          style={{ textDecoration: "none",color:"black" }}
                        >
                          <div
                            id="MobileListRowDisplay"
                            key={index}
                            // onClick={() => {
                            //   particularMobileDetails(id);
                            // }
                            
                            // }
                            
                            // target="_blank"
                          >
                            <div className="MobileImageColumnDisplay1">
                              <div className="MobileImageColumnDisplay1Row">
                                <img
                                  src={`data:image/jpeg;base64,${firstImage}`}
                                  alt="mad"
                                  height="250px"
                                  width="90%"
                                  className="MobileImageColumnDisplay1Image"
                                />
                              </div>
                              <div className="MobileImageColumnDisplay1Row">
                                <input type="checkbox" />
                                <span>Add to compare</span>
                              </div>
                            </div>
                            <div className="MobileImageColumnDisplay2">
                              <div className="MobileImageColumnDisplay2Row">
                                <h3>
                                  {productName}
                                  {modelName}
                                  {processors}
                                  {ram}
                                </h3>
                              </div>
                              <div className="MobileImageColumnDisplay2Row2">
                                <ul>
                                  <li>
                                    {ram}| {rom}
                                  </li>
                                  <li>
                                    {displaySize} {DisplayType}{" "}
                                    {+ResolutionType}
                                  </li>
                                  <li>
                                    {PrimaryCamera}+{PrimaryCameraFeautres}
                                    {rom}
                                  </li>
                                  <li>{battery}</li>
                                  <li>
                                    {operatingSystem}| {ProcessorCore}
                                  </li>
                                  <li>{PrimaryClockSpeed}</li>
                                </ul>
                              </div>
                            </div>

                            <div className="MobileImageColumnDisplay3">
                              <h3>RS.{price}</h3>
                              <p>discount {discount}</p>
                              <p>free delivery by {deliveryDate}</p>
                              <p>waranty{warranty}</p>
                            </div>
                          </div>
                          <hr />
                        </Link>
                      </>
                    );
                  })}
                  {/* <hr /> */}

                  {/* <div className="MobileListRow">
                    <div className="MobileImageColumn"></div>
                    <div className="MobileImageColumn"></div>
                    <div className="MobileImageColumn"></div>
                  </div>
                  <hr /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <TopStories />
      </>
    );
}
export default MobilePage;