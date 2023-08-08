import React from "react";
import './home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SLIDESHOW from "../SLIDESHOW/SlideShow";
import BestGoodsPage from "../BestOfGoods/BestGoodsPage";
import TopStories from "../TOP_STORIES/TopStories";
const Home = () => {
    
  const [AccountToggleSucess, setAccountToggleSuccess] = useState(false);
  const [FashionToggleSuccess, setFashionToggleSuccess] = useState(false);
  const [ElectronicsToggleSuccess, setElectronicsToggleSuccess] = useState(false);
  const [FurnitureToggleSuccess, setFurnitureToggleSuccess] = useState(false);
    const [ToysToggleSuccess, setToysToggleSuccess] =useState(false);
   const [BikeToggleSuccess, setBikeToggleSuccess] = useState(false);

  const [chevron, setchevron] = useState(false);
  const [chevrondown, setchevrondown] = useState(true);
  

  const [fashionChevrondown, setFashionChevrondown] = useState(true);
  const [fashionChevronOn, setFashionChevronOn] = useState(false);
  const [FashionChevronRight, setFashionChevronRight] = useState(false);


  const [electronicsChevrondown, setElectronicsChevrondown] = useState(true);
  const [electronicsChevronOn, setElectronicsChevronOn] = useState(false);
  const [ElectronicsChevronRight, setElectronicsChevronRight] = useState(false);


    const [furnitureChevrondown, setFurnitureChevrondown] = useState(true);
    const [furnitureeChevronOn, setFurnitureChevronOn] = useState(false);
    const [FurnitureChevronRight, setFurnitureChevronRight] =useState(false);


  
    const [ToysChevrondown, setToysChevrondown] = useState(true);
    const [ToysChevronOn, setToysChevronOn] = useState(false);
    const [ToysChevronRight, setToysChevronRight] = useState(false);
  
  
    const [BikeChevrondown, setBikeChevrondown] = useState(true);
    const [BikeChevronOn, setBikeChevronOn] = useState(false);
  

  const arrayOfAccountDetails = [
    {
      icon: "bi bi-person",

      iconName: "myProfile",
      iconLink: "/login",
    },
    {
      icon: "bi bi-coin",
      iconName: "super coin zone",
      iconLink: "/superCoinZone",
    },
    {
      icon: "bi bi-heart",
      iconName: "wish list",
      iconLink: "/wishlist",
    },
    {
      icon: "bi bi-gift",
      iconName: "gift Cards",
      iconLink: "/giftCard",
    },
    {
      icon: "bi bi-tags",
      iconName: "Coupons",
      iconLink: "/Coupons",
    },
    {
      icon: "bi bi-minecart",
      iconName: "Orders",
      iconLink: "/order",
    },
    {
      icon: "bi bi-box-arrow-right",
      iconName: "logOut",
      iconLink: "/logout",
    },
  ];
  

  const [threeDotsSuccess, setThreeDotsSuccess] = useState(false);


  const arrayOfAppDetails = [
    {
      icon: "bi bi-bell",

      iconName: "notification preference",
      iconLink: "/notification",
    },
    {
      icon: "bi bi-headset",
      iconName: "customer care",
      iconLink: "/customerCare",
    },
    {
      icon: "bi bi-graph-up-arrow",
      iconName: "Advertise",
      iconLink: "/advertise",
    },
    {
      icon: "bi bi-download",
      iconName: "download App",
      iconLink: "/downloadApp",
    },
    
  
  ];


  const arrayOfFashionDetails = [
    {
      id: 1,
      categoryType: "Men's Top wear",
      Icon: "bi bi-chevron-right",
      IconLink: "/fashion",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "Men's T-shirts",
        },
        {
          product: "Men's Casual shirts",
        },
        {
          product: "Men's Formal Shirts",
        },
        {
          product: "Men's Kurtas",
        },
        {
          product: "Men's Ethnic Wear",
        },
        {
          product: "Men's Blazers",
        },
        {
          product: "Men's Coat",
        },
        {
          product: "Men's Suits",
        },
        {
          product: "Men's Fabrics",
        },
      ],
    },
    {
      id: 2,
      categoryType: "Men's Bottom wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "Men's jeans Pants",
        },
        {
          product: "Men's formal pants",
        },
        {
          product: "Men's cotton pant",
        },
        {
          product: "Men's Shorts",
        },
        {
          product: "Men's Trousers",
        },
        {
          product: "Men's Three Fourths",
        },
        {
          product: "Men's Dothis",
        },
        {
          product: "Men's Track Pants",
        },
        {
          product: "Men's Cargos",
        },
      ],
    },
    {
      id: 3,
      categoryType: "womens Ethnic wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "women's sarees",
        },
        {
          product: "women's kurtas",
        },
        {
          product: "women's dresses",
        },
        {
          product: "women's salwar kameez",
        },
        {
          product: "women's gowns",
        },
        {
          product: "women's lehanas",
        },
        {
          product: "women's pattu pavada",
        },
        {
          product: "women's silk saree",
        },
        {
          product: "women's oonis",
        },
      ],
    },
    {
      id: 4,
      categoryType: "womens Modern wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "women's punjabi dress",
        },
        {
          product: "women's jeans pants",
        },
        {
          product: "women's t-shirts",
        },
        {
          product: "women's nighties",
        },
        {
          product: "women's track pants",
        },
        {
          product: "women's trousers",
        },
        {
          product: "women's polo tshirts",
        },
        {
          product: "women's swim suit",
        },
        {
          product: "women's jump wear",
        },
      ],
    },
    {
      id: 5,
      categoryType: "Men's Foot wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "Men's  cheppals",
        },
        {
          product: "Men's belt sandals",
        },
        {
          product: "Men's shoes",
        },
        {
          product: "Men's Formal shoes",
        },
        {
          product: "Men's sneakers",
        },
        {
          product: "Men's Three Fourths",
        },
        {
          product: "Men's Dothis",
        },
        {
          product: "Men's Track Pants",
        },
        {
          product: "Men's Cargos",
        },
      ],
    },
    {
      id: 6,
      categoryType: "women's Foot wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "women's cheppals",
        },
        {
          product: "women's belt sandals",
        },
        {
          product: "women's shoes",
        },
        {
          product: "women's Formal shoes",
        },
        {
          product: "women's sneakers",
        },
        {
          product: "women's high heels",
        },
        {
          product: "women's short heels",
        },
        {
          product: "women's casual shoes",
        },
        {
          product: "women's Cargos",
        },
      ],
    },
    {
      id: 7,
      categoryType: "kid's Foot wear",
      Icon: "bi bi-chevron-right",
      IsContainModels: true,
      CateogryModels: [
        {
          product: "kids's cheppals",
        },
        {
          product: "kids's  belt sandals",
        },
        {
          product: " kids's shoes",
        },
        {
          product: "kids's  Formal shoes",
        },
        {
          product: "kids's  sneakers",
        },
        {
          product: "kids's high heels",
        },
        {
          product: "kids's  short heels",
        },
        {
          product: "kids's  casual shoes",
        },
        {
          product: "kids's  Cargos",
        },
      ],
    },
  ];


  const [fashionCategoryDetails, setFashionCategoryDetails] = useState(null);

  console.log("fashioncategoryDetails", fashionCategoryDetails);
  const profileNam = localStorage.getItem("profileName");
    
  const navigate = useNavigate();

  const groceryRedirectFunction = () => {
    navigate("/groceryDetails");
  }
  
  const mobileRedirectFunction = () => {
    navigate("/mobilesDetails");
  }

  // let x = {}

  const fashionSpecificDetails = (detail) => {
    let x = arrayOfFashionDetails.find((obj) => { return obj.categoryType === detail });
    console.log("x", x);
    console.log("array or object", Array.isArray(x) );
    console.log("x1", x.IsContainModels, x.id, x.CateogryModels);
 

    setFashionCategoryDetails(x);
    return x;
  
 }


  
    return (
      <>
        <div className="wholeBrowser">
          <div className="BrowserParts">
            <div className="upperPart">
              <div className="headerPart">
                <div className="headerFirstPart">
                  <div className="logoPart">
                    <span className="flipkartlogo">Flipkart</span>
                    <span className="explore">Explore us</span>
                  </div>
                  <div className="searchPart">
                    <button className="searchIconTag">
                      <i class="bi bi-search iconTag"></i>
                    </button>
                    <form className="formTag">
                      <input
                        type="search"
                        placeholder="search products,Brands and more"
                        className="searchTag"
                      />
                    </form>
                  </div>
                  <div className="headerSecondPart">
                    <div className="sellerPart">
                      <button className="sellerIconTag">
                        <i className="bi bi-shop bi-lg shopIcon"></i>
                      </button>
                      <div className="shopContent">
                        <span className="shopName">Become a Seller</span>
                      </div>
                    </div>
                    <div className="accountdiv">
                      <div
                        className="accountPart"
                        onMouseOver={() => {
                          setchevron(true);
                          setchevrondown(false);
                          setAccountToggleSuccess(true);
                        }}
                        onMouseOut={() => {
                          setchevron(false);
                          setchevrondown(true);
                          setAccountToggleSuccess(false);
                        }}
                      >
                        <button className="personIconTag">
                          <i className="bi bi-person personIcon"></i>
                        </button>
                        <div className="personDetails">
                          <span className="personName">{profileNam}</span>
                        </div>
                        {chevrondown && (
                          <button className="arrowIconTag">
                            <i className="bi bi-chevron-down arrowIcon"></i>
                          </button>
                        )}
                        {chevron && (
                          <button className="arrowIconTag">
                            <i className="bi bi-chevron-up arrowIcon"></i>
                          </button>
                        )}

                        {AccountToggleSucess && (
                          <>
                            <ul className="list-group ulClassName">
                              {arrayOfAccountDetails.map((detail, key) => {
                                console.log("detail", detail);
                                //  const { iconLink, icon, iconName } = detail;
                                return (
                                  <>
                                    <a
                                      key={key}
                                      href={detail.iconLink}
                                      className="MainAnchor text-decoration-none list-group-flush "
                                    >
                                      <li className="list-group-item list-group-item-action liClassName">
                                        <div className="firstItem">
                                          <button className="profileButton">
                                            <i
                                              className={detail.icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                          <div className="myProfile">
                                            <span className="myProfileName">
                                              {detail.iconName}
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </a>
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="cartPart">
                      <button className="cartIconTag">
                        <i className="bi bi-cart cartIcon"></i>
                      </button>
                      <div className="cartDetails">
                        <span className="cartName">Cart</span>
                      </div>
                    </div>
                    <div
                      className="threeDotsPart"
                      onMouseOver={() => setThreeDotsSuccess(true)}
                      onMouseOut={() => {
                        setThreeDotsSuccess(false);
                      }}
                    >
                      <button className="threeDotsIconTag">
                        <i className="bi bi-three-dots-vertical threeDotsIcon"></i>
                      </button>
                      {threeDotsSuccess && (
                        <>
                          <>
                            <ul className="list-group ulClassNameDots">
                              {arrayOfAppDetails.map((detail, key) => {
                                console.log("detail", detail);
                                //  const { iconLink, icon, iconName } = detail;
                                return (
                                  <>
                                    <a
                                      key={key}
                                      href={detail.iconLink}
                                      className="MainAnchorDots  text-decoration-none"
                                    >
                                      <li className="list-group-item list-group-item-action  liClassNameDots">
                                        <div className="firstItem">
                                          <button className="profileButton">
                                            <i
                                              className={detail.icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                          <div className="myProfile">
                                            <span className="myProfileName">
                                              {detail.iconName}
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </a>
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bodyPart d-flex flex-row">
              <div className="displayPart d-flex flex-row w-100">
                <div className="mainRowPart d-flex flex-row w-100 shadow-lg m-2">
                  <div className="withinRowPart"></div>
                  <div className="withinRowPart">
                    <div
                      className="ImageClass"
                      onClick={groceryRedirectFunction}
                    >
                      <img
                        src="/groceryImage.jpeg"
                        height="100px"
                        width="90%"
                        alt="grocery"
                        className="imgClassOriginal"
                      />
                    </div>
                    <div className="ImageNameTag ">
                      <span className="ImageName">Grocery</span>
                    </div>
                  </div>

                  <div className="withinRowPart">
                    <div
                      className="ImageClass"
                      onClick={mobileRedirectFunction}
                    >
                      <img
                        src="/mobilesImage.png"
                        height="100px"
                        width="90%"
                        alt="mobile"
                        className="imgClassOriginal"
                      />
                    </div>
                    <div className="ImageNameTag">
                      <span className="ImageName">Mobiles</span>
                    </div>
                  </div>

                  <div
                    className="withinRowPart"
                    onMouseOver={() => {
                      setFashionChevronOn(true);
                      setFashionChevrondown(false);
                      setFashionToggleSuccess(true);
                    }}
                    onMouseOut={() => {
                      setFashionChevronOn(false);
                      setFashionChevrondown(true);
                      setFashionToggleSuccess(false);
                    }}
                  >
                    <div className="ImageClass">
                      <img
                        src="/fashionIcon.jpeg"
                        height="100px"
                        width="90%"
                        alt="fashion"
                        className="imgClassOriginal"
                        id="cursorId"
                      />
                    </div>
                    <div className="colInsideRowClass d-flex column w-100">
                      {fashionChevrondown && (
                        <div className="ImageNameTagClass ">
                          <span className="ImageName " id="imageNameFashionId">
                            Fashion
                          </span>
                        </div>
                      )}
                      {fashionChevronOn && (
                        <div className="ImageNameTagClass ">
                          <span
                            className="ImageName text-primary"
                            id="imageNameFashionId"
                          >
                            Fashion
                          </span>
                        </div>
                      )}
                      {fashionChevrondown && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-down arrowIcon"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}
                      {fashionChevronOn && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-up arrowIcon arrowChangeColor"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}

                      {FashionToggleSuccess && (
                        <>
                          <ul className="list-group ulClassNameFashion">
                            {arrayOfFashionDetails.map((detail, key) => {
                              console.log("detail", detail);
                              console.log("key", key);
                              //  const { iconLink, icon, iconName } = detail;
                              return (
                                <>
                                  <div
                                    key={detail.id}
                                    // href={detail.iconLink}
                                    className="MainAnchor text-decoration-none list-group-flush "
                                    aria-current="true"
                                    onMouseOver={() => {
                                      setFashionChevronRight(true);
                                      fashionSpecificDetails(
                                        detail.categoryType
                                      );

                                      // console.log("tutut", x);
                                    }}
                                    onMouseOut={() => {
                                      // setFashionChevronRight(false);
                                    }}
                                  >
                                    <li
                                      className="list-group-item list-group-item-action  liClassName"
                                      key={key}
                                    >
                                      <div className="firstItem active">
                                        {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                        <div className="myProfile active bg-active">
                                          <span className="myProfileName">
                                            {detail.categoryType}
                                          </span>
                                        </div>
                                        {FashionChevronRight && (
                                          <button className="profileButton">
                                            <i
                                              className={detail.Icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                        )}
                                      </div>
                                    </li>
                                  </div>
                                </>
                              );
                            })}

                            {FashionChevronRight && (
                              <>
                                {/*       ulClassNameFashion */}
                                <ul
                                  className="list-group shadow-lg
                                 list-group-flush
                                 ulClassNameFashionClothes"
                                >
                                  <>
                                    {fashionCategoryDetails.CateogryModels.map(
                                      (product) => {
                                        return (
                                          <>
                                            <li
                                              className="list-group-item list-group-item-action list-group-flush  liClassName"
                                              // key={key}
                                              onMouseOver={() => {}}
                                            >
                                              <div className="firstItem active">
                                                {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                                <div className="myProfile">
                                                  <span className="myProfileName">
                                                    {product.product}
                                                  </span>
                                                </div>
                                                {/* {FashionChevronRight && (
                                        <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button>
                                      )} */}
                                              </div>
                                            </li>
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                </ul>
                              </>
                            )}
                          </ul>
                          {
                            // FashionChevronRight && (
                            // <>
                            //   <ul className="list-group ulClassNameFashion ulClassNameFashionClothes">
                            //     <>
                            //       {fashionCategoryDetails.CateogryModels.map(
                            //         (product) => {
                            //           return (
                            //             <>
                            //               <li
                            //                 className="list-group-item list-group-item-action liClassName"
                            //                 // key={key}
                            //               >
                            //                 <div className="firstItem">
                            //                   {/* <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button> */}
                            //                   <div className="myProfile">
                            //                     <span className="myProfileName">
                            //                       {product.product}
                            //                     </span>
                            //                   </div>
                            //                   {/* {FashionChevronRight && (
                            //             <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button>
                            //           )} */}
                            //                 </div>
                            //               </li>
                            //             </>
                            //           );
                            //         }
                            //       )}
                            //     </>
                            //   </ul>
                            // </>
                            // )
                          }
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="withinRowPart"
                    onMouseOver={() => {
                      setElectronicsChevronOn(true);
                      setElectronicsChevrondown(false);
                      setElectronicsToggleSuccess(true);
                    }}
                    onMouseOut={() => {
                      setElectronicsChevronOn(false);
                      setElectronicsChevrondown(true);
                      setElectronicsToggleSuccess(false);
                    }}
                  >
                    <div className="ImageClass">
                      <img
                        src="/laptopWhite.png"
                        height="100px"
                        width="90%"
                        alt="electronic"
                        className="imgClassOriginal"
                        id="cursorId"
                      />
                    </div>
                    <div className="colInsideRowClass d-flex column w-100">
                      {electronicsChevrondown && (
                        <div className="ImageNameTagClass ">
                          <span className="ImageName " id="imageNameFashionId">
                            Electronics
                          </span>
                        </div>
                      )}
                      {electronicsChevronOn && (
                        <div className="ImageNameTagClass ">
                          <span
                            className="ImageName text-primary"
                            id="imageNameFashionId"
                          >
                            Electronics
                          </span>
                        </div>
                      )}
                      {electronicsChevrondown && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-down arrowIcon"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}
                      {electronicsChevronOn && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-up arrowIcon arrowChangeColor"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}

                      {ElectronicsToggleSuccess && (
                        <>
                          <ul className="list-group ulClassNameFashion">
                            {arrayOfFashionDetails.map((detail, key) => {
                              console.log("detail", detail);
                              console.log("key", key);
                              //  const { iconLink, icon, iconName } = detail;
                              return (
                                <>
                                  <div
                                    key={detail.id}
                                    // href={detail.iconLink}
                                    className="MainAnchor text-decoration-none list-group-flush "
                                    aria-current="true"
                                    onMouseOver={() => {
                                      setElectronicsChevronRight(true);
                                      fashionSpecificDetails(
                                        detail.categoryType
                                      );

                                      // console.log("tutut", x);
                                    }}
                                    onMouseOut={() => {
                                      // setFashionChevronRight(false);
                                    }}
                                  >
                                    <li
                                      className="list-group-item list-group-item-action  liClassName"
                                      key={key}
                                    >
                                      <div className="firstItem active">
                                        {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                        <div className="myProfile active bg-active">
                                          <span className="myProfileName">
                                            {detail.categoryType}
                                          </span>
                                        </div>
                                        {ElectronicsChevronRight && (
                                          <button className="profileButton">
                                            <i
                                              className={detail.Icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                        )}
                                      </div>
                                    </li>
                                  </div>
                                </>
                              );
                            })}

                            {FashionChevronRight && (
                              <>
                                {/*       ulClassNameFashion */}
                                <ul
                                  className="list-group shadow-lg
                                 list-group-flush
                                 ulClassNameFashionClothes"
                                >
                                  <>
                                    {fashionCategoryDetails.CateogryModels.map(
                                      (product) => {
                                        return (
                                          <>
                                            <li
                                              className="list-group-item list-group-item-action list-group-flush  liClassName"
                                              // key={key}
                                              onMouseOver={() => {}}
                                            >
                                              <div className="firstItem active">
                                                {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                                <div className="myProfile">
                                                  <span className="myProfileName">
                                                    {product.product}
                                                  </span>
                                                </div>
                                                {/* {FashionChevronRight && (
                                        <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button>
                                      )} */}
                                              </div>
                                            </li>
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                </ul>
                              </>
                            )}
                          </ul>
                          {
                            // FashionChevronRight && (
                            // <>
                            //   <ul className="list-group ulClassNameFashion ulClassNameFashionClothes">
                            //     <>
                            //       {fashionCategoryDetails.CateogryModels.map(
                            //         (product) => {
                            //           return (
                            //             <>
                            //               <li
                            //                 className="list-group-item list-group-item-action liClassName"
                            //                 // key={key}
                            //               >
                            //                 <div className="firstItem">
                            //                   {/* <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button> */}
                            //                   <div className="myProfile">
                            //                     <span className="myProfileName">
                            //                       {product.product}
                            //                     </span>
                            //                   </div>
                            //                   {/* {FashionChevronRight && (
                            //             <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button>
                            //           )} */}
                            //                 </div>
                            //               </li>
                            //             </>
                            //           );
                            //         }
                            //       )}
                            //     </>
                            //   </ul>
                            // </>
                            // )
                          }
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="withinRowPart"
                    onMouseOver={() => {
                      setFurnitureChevronOn(true);
                      setFurnitureChevrondown(false);
                      setFurnitureToggleSuccess(true);
                    }}
                    onMouseOut={() => {
                      setFurnitureChevronOn(false);
                      setFurnitureChevrondown(true);
                      setFurnitureToggleSuccess(false);
                    }}
                  >
                    <div className="ImageClass">
                      <img
                        src="/furniture.jpg"
                        height="100px"
                        width="90%"
                        alt="fashion"
                        className="imgClassOriginal"
                        id="cursorId"
                      />
                    </div>
                    <div className="colInsideRowClass d-flex column w-100">
                      {furnitureChevrondown && (
                        <div className="ImageNameTagClass ">
                          <span className="ImageName " id="imageNameFashionId">
                            Home & Furniture
                          </span>
                        </div>
                      )}
                      {furnitureeChevronOn && (
                        <div className="ImageNameTagClass ">
                          <span
                            className="ImageName text-primary"
                            id="imageNameFashionId"
                          >
                            Home & Furniture
                          </span>
                        </div>
                      )}
                      {furnitureChevrondown && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-down arrowIcon"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}
                      {furnitureeChevronOn && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-up arrowIcon arrowChangeColor"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}

                      {FurnitureToggleSuccess && (
                        <>
                          <ul className="list-group ulClassNameFashion">
                            {arrayOfFashionDetails.map((detail, key) => {
                              console.log("detail", detail);
                              console.log("key", key);
                              //  const { iconLink, icon, iconName } = detail;
                              return (
                                <>
                                  <div
                                    key={detail.id}
                                    // href={detail.iconLink}
                                    className="MainAnchor text-decoration-none list-group-flush "
                                    aria-current="true"
                                    onMouseOver={() => {
                                      setFurnitureChevronRight(true);
                                      fashionSpecificDetails(
                                        detail.categoryType
                                      );

                                      // console.log("tutut", x);
                                    }}
                                    onMouseOut={() => {
                                      // setFashionChevronRight(false);
                                    }}
                                  >
                                    <li
                                      className="list-group-item list-group-item-action  liClassName"
                                      key={key}
                                    >
                                      <div className="firstItem active">
                                        {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                        <div className="myProfile active bg-active">
                                          <span className="myProfileName">
                                            {detail.categoryType}
                                          </span>
                                        </div>
                                        {FurnitureChevronRight && (
                                          <button className="profileButton">
                                            <i
                                              className={detail.Icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                        )}
                                      </div>
                                    </li>
                                  </div>
                                </>
                              );
                            })}

                            {FurnitureChevronRight && (
                              <>
                                {/*       ulClassNameFashion */}
                                <ul
                                  className="list-group shadow-lg
                                 list-group-flush
                                 ulClassNameFashionClothes"
                                >
                                  <>
                                    {fashionCategoryDetails.CateogryModels.map(
                                      (product) => {
                                        return (
                                          <>
                                            <li
                                              className="list-group-item list-group-item-action list-group-flush  liClassName"
                                              // key={key}
                                              onMouseOver={() => {}}
                                            >
                                              <div className="firstItem active">
                                                {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                                <div className="myProfile">
                                                  <span className="myProfileName">
                                                    {product.product}
                                                  </span>
                                                </div>
                                                {/* {FashionChevronRight && (
                                        <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button>
                                      )} */}
                                              </div>
                                            </li>
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                </ul>
                              </>
                            )}
                          </ul>
                          {
                            // FashionChevronRight && (
                            // <>
                            //   <ul className="list-group ulClassNameFashion ulClassNameFashionClothes">
                            //     <>
                            //       {fashionCategoryDetails.CateogryModels.map(
                            //         (product) => {
                            //           return (
                            //             <>
                            //               <li
                            //                 className="list-group-item list-group-item-action liClassName"
                            //                 // key={key}
                            //               >
                            //                 <div className="firstItem">
                            //                   {/* <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button> */}
                            //                   <div className="myProfile">
                            //                     <span className="myProfileName">
                            //                       {product.product}
                            //                     </span>
                            //                   </div>
                            //                   {/* {FashionChevronRight && (
                            //             <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button>
                            //           )} */}
                            //                 </div>
                            //               </li>
                            //             </>
                            //           );
                            //         }
                            //       )}
                            //     </>
                            //   </ul>
                            // </>
                            // )
                          }
                        </>
                      )}
                    </div>
                  </div>
                  <div className="withinRowPart">
                    <div
                      className="ImageClass"
                      onClick={mobileRedirectFunction}
                    >
                      <img
                        src="/appliaces.jpeg"
                        height="100px"
                        width="90%"
                        alt="mobile"
                        className="imgClassOriginal"
                      />
                    </div>
                    <div className="ImageNameTag">
                      <span className="ImageName">Appliances</span>
                    </div>
                  </div>
                  <div className="withinRowPart">
                    <div
                      className="ImageClass"
                      onClick={mobileRedirectFunction}
                    >
                      <img
                        src="/aeroplaneWhite.jpg"
                        height="100px"
                        width="90%"
                        alt="mobile"
                        className="imgClassOriginal"
                      />
                    </div>
                    <div className="ImageNameTag">
                      <span className="ImageName">travel</span>
                    </div>
                  </div>
                  <div className="withinRowPart">
                    <div
                      className="ImageClass"
                      onClick={mobileRedirectFunction}
                    >
                      <img
                        src="/topOffers.jpeg"
                        height="100px"
                        width="90%"
                        alt="offers"
                        className="imgClassOriginal"
                      />
                    </div>
                    <div className="ImageNameTag">
                      <span className="ImageName">Top Offers</span>
                    </div>
                  </div>
                  <div
                    className="withinRowPart"
                    onMouseOver={() => {
                      setToysChevronOn(true);
                      setToysChevrondown(false);
                      setToysToggleSuccess(true);
                    }}
                    onMouseOut={() => {
                      setToysChevronOn(false);
                      setToysChevrondown(true);
                      setToysToggleSuccess(false);
                    }}
                  >
                    <div className="ImageClass">
                      <img
                        src="/toysImage.jpeg"
                        height="100px"
                        width="90%"
                        alt="toys"
                        className="imgClassOriginal"
                        id="cursorId"
                      />
                    </div>
                    <div className="colInsideRowClass d-flex column w-100">
                      {ToysChevrondown && (
                        <div className="ImageNameTagClass ">
                          <span className="ImageName " id="imageNameFashionId">
                            Toys & more
                          </span>
                        </div>
                      )}
                      {ToysChevronOn && (
                        <div className="ImageNameTagClass ">
                          <span
                            className="ImageName text-primary"
                            id="imageNameFashionId"
                          >
                            Toys & More
                          </span>
                        </div>
                      )}
                      {ToysChevrondown && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-down arrowIcon"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}
                      {ToysChevronOn && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-up arrowIcon arrowChangeColor"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}

                      {ToysToggleSuccess && (
                        <>
                          <ul className="list-group ulClassNameFashion">
                            {arrayOfFashionDetails.map((detail, key) => {
                              console.log("detail", detail);
                              console.log("key", key);
                              //  const { iconLink, icon, iconName } = detail;
                              return (
                                <>
                                  <div
                                    key={detail.id}
                                    // href={detail.iconLink}
                                    className="MainAnchor text-decoration-none list-group-flush "
                                    aria-current="true"
                                    onMouseOver={() => {
                                      setToysChevronRight(true);
                                      fashionSpecificDetails(
                                        detail.categoryType
                                      );

                                      // console.log("tutut", x);
                                    }}
                                    onMouseOut={() => {
                                      // setFashionChevronRight(false);
                                    }}
                                  >
                                    <li
                                      className="list-group-item list-group-item-action  liClassName"
                                      key={key}
                                    >
                                      <div className="firstItem active">
                                        {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                        <div className="myProfile active bg-active">
                                          <span className="myProfileName">
                                            {detail.categoryType}
                                          </span>
                                        </div>
                                        {ToysChevronRight && (
                                          <button className="profileButton">
                                            <i
                                              className={detail.Icon}
                                              id="profileIcon"
                                            ></i>
                                          </button>
                                        )}
                                      </div>
                                    </li>
                                  </div>
                                </>
                              );
                            })}

                            {FurnitureChevronRight && (
                              <>
                                {/*       ulClassNameFashion */}
                                <ul
                                  className="list-group shadow-lg
                                 list-group-flush
                                 ulClassNameFashionClothes"
                                >
                                  <>
                                    {fashionCategoryDetails.CateogryModels.map(
                                      (product) => {
                                        return (
                                          <>
                                            <li
                                              className="list-group-item list-group-item-action list-group-flush  liClassName"
                                              // key={key}
                                              onMouseOver={() => {}}
                                            >
                                              <div className="firstItem active">
                                                {/* <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button> */}
                                                <div className="myProfile">
                                                  <span className="myProfileName">
                                                    {product.product}
                                                  </span>
                                                </div>
                                                {/* {FashionChevronRight && (
                                        <button className="profileButton">
                                          <i
                                            className={detail.Icon}
                                            id="profileIcon"
                                          ></i>
                                        </button>
                                      )} */}
                                              </div>
                                            </li>
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                </ul>
                              </>
                            )}
                          </ul>
                          {
                            // FashionChevronRight && (
                            // <>
                            //   <ul className="list-group ulClassNameFashion ulClassNameFashionClothes">
                            //     <>
                            //       {fashionCategoryDetails.CateogryModels.map(
                            //         (product) => {
                            //           return (
                            //             <>
                            //               <li
                            //                 className="list-group-item list-group-item-action liClassName"
                            //                 // key={key}
                            //               >
                            //                 <div className="firstItem">
                            //                   {/* <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button> */}
                            //                   <div className="myProfile">
                            //                     <span className="myProfileName">
                            //                       {product.product}
                            //                     </span>
                            //                   </div>
                            //                   {/* {FashionChevronRight && (
                            //             <button className="profileButton">
                            //               <i
                            //                 className={detail.Icon}
                            //                 id="profileIcon"
                            //               ></i>
                            //             </button>
                            //           )} */}
                            //                 </div>
                            //               </li>
                            //             </>
                            //           );
                            //         }
                            //       )}
                            //     </>
                            //   </ul>
                            // </>
                            // )
                          }
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="withinRowPart"
                    onMouseOver={() => {
                      setBikeChevronOn(true);
                      setBikeChevrondown(false);
                      setBikeToggleSuccess(true);
                    }}
                    onMouseOut={() => {
                      setBikeChevronOn(false);
                      setBikeChevrondown(true);
                      setBikeToggleSuccess(false);
                    }}
                  >
                    <div className="ImageClass">
                      <img
                        src="/bikeImages.jpeg"
                        height="100px"
                        width="90%"
                        alt="bikes"
                        className="imgClassOriginal"
                        id="cursorId"
                      />
                    </div>
                    <div className="colInsideRowClass d-flex column w-100">
                      {BikeChevrondown && (
                        <div className="ImageNameTagClass ">
                          <span className="ImageName " id="imageNameFashionId">
                            Bikes
                          </span>
                        </div>
                      )}
                      {BikeChevronOn && (
                        <div className="ImageNameTagClass ">
                          <span
                            className="ImageName text-primary"
                            id="imageNameFashionId"
                          >
                            Bikes
                          </span>
                        </div>
                      )}
                      {BikeChevrondown && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-down arrowIcon"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}
                      {BikeChevronOn && (
                        <button className="arrowSignClass ">
                          <i
                            className="bi bi-chevron-up arrowIcon arrowChangeColor"
                            id="arrowIconId"
                          ></i>
                        </button>
                      )}

                      {BikeToggleSuccess && (
                        <>
                          <ul className="list-group ulClassNameFashion">
                            <li class="list-group-item liClassName">
                              petrol motor vehicles
                            </li>
                            <li class="list-group-item liClassName">
                              electronic vehicles
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="withinRowPart"></div>
                </div>
              </div>
            </div>
            <SLIDESHOW />
            <BestGoodsPage />
            <TopStories/>
          </div>
        </div>
      </>
    );
}
export default Home;