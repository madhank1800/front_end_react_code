
import React, { useState} from "react";
import './Navbar.css';
const Navbar = () => {

  const [chevron, setchevron] = useState(false);
    const [chevrondown, setchevrondown] = useState(true);
    
    const [AccountToggleSucess, setAccountToggleSuccess] = useState(false);
    

  const [threeDotsSuccess, setThreeDotsSuccess] = useState(false);
  const profileNam = localStorage.getItem("profileName");


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



    return (
      <>
        <div className="upperPart" >
          <div className="headerPart">
            <div className="headerFirstPart">
              <div className="logoPart">
                <span className="flipkartlogo">Flipkart</span>
                <span className="explore">Explore us</span>
              </div>
              <div className="searchPart">
                <button className="searchIconTag">
                  <i className="bi bi-search iconTag"></i>
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
      </>
    );

}
export default Navbar;