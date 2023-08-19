

import React from 'react';
import './TopStories.css';

const TopStories = () => {
    
    const topstories = [
        {
            MOST_SEARCHED_FOR_FLIPKART: [
            "one pieces","Fashion sales","Trend Top","Flipkart Axis Bank card","5G mobile phones","primebook laptops","buy laptop on emi","infinix zero book ultra","oppo reno 8g","Fresh Flower boquet","Electric cycles","Bouquet","Badminton","mobile repair services","Elctronics store","phone cover","Okaya electric covers","bgauss electric scooter","Flipkart Track orders","Flipkart Manage orders","flipkart returns","flip kart gidt card returns"
        ]
    },
      {
        MOBILES: [
          "oppo16",
          "i phone12 64 GB",
          "vivo y91",
          "vivo y11",
          "vivo y15",
          "samsung",
          "infinix Hot 3oi",
          "Reno f12",
          "nothing 5g",
          "motorola 5g phone",
          "real me smart phone",
          "apple 5g phone",
          "one plus 5g",
          "4g mobiles",
          "Nokia mobile",
        ],
      },

      {
        CAMERA: [
          "nikon camera",
          "canon camera",
          "sony camera",
          "canon dslr",
          "nikon dslr",
          "samsung",
          "infinix Hot 3oi",
          "Reno f12",
          "nothing 5g",
          "lens 10",
          "camera lens 12",
          "apple 5g phone",
          "one plus 5g",
          "redmi camera lens",
          "apple camera",
        ],
      },
      {
        LAPTOPS: [
          "Asus rog ally",
          "Mac book pro M2",
          "Premium Laptop",
          "Asus Zenbook 14 led(2022)",
          "Branded Laptops",
          "apple Laptops",
          "Lenovo laptops",
          "DEll laptps",
          "leonovo ideapad 320",
          "HP laptops",
          "Gaming Laptops",
          "samsung galaxy book",
          "12 th gen intel core laptops",
          "Hp latest laptops 2022",
          "Micro services Go plentium","Real me book prime core 15"
        ],
        },
        {
          TVS:["Nokia Tv","appliances Tv","Thomson Tv","Mi x pro","Realme Tv","Motorola Tv","One Plus Tv","LG Tv","Sony Tv","samsung tv","Android Television","iffalcon Tv","Mi Tv"]
        },
        {
            LARGE_APPLIANCES:["tv & appliances End of season sale","television","washing machines","refrigirators","air conditioners","Electric cookers","electric jugles/kettles","Induction cooktps","inverters/stabikizers","Mixer grinder juices","wet grinders","chimneys","micro ovens","vaccum cleaners"]
        }, {
            CLOTHING:["Green bridal lehenga","Bridal Blouses","Half saree blouse designs","men shirts","plain dhupattas","Kurta paijama","jeans","bridal design blouses","Bridal bansari sarrees","High waist panties","Hlooded jacket women","Hoodie tshirts for men","groom wedding sarwani","desigbner wedding sarvai","gym outfits","boys clothing","gloves","Georgette sarress","uppada pattu sarres","women henley","leopard dressess","latest blouse designs","simple blouse designs"]
        }, {
            FOOTWEAR:["shoes","adidas shoes","Reebok shoes","nike shoes","Puma shoes","Boots","Bata shoes","woodlans shoes","sketchers","sneakers","women boots","sports shoes","loafers","sandals","Lotto sports shoes","casual shoes","women sneakers","Formal shoes","school shoes"]
        }, {
            GROERIES:["phone pe grocery ","hand wash soap","cahew nuts","sunflower oil","eggs","toilet cleaners","harpic toilet cleaners","dettol soap","mustard oil","santoor soap","close up","colgate","Ashivravad atta","tea"]
        }, {
            FURNITURE:["furniture","sofa","beds","dinning table","double cot","chairs","dressing table","chairs","computer table","office table","red sofa","white sofa","wakepit mattress","green sofa","black sofa","brown sofa"]
        }, {
            BGMH:["why protein","criket","homeopathy","cycles","footballs","treadmills","christmas gists","fitness accessories","online guitar","book store","musical instrument store","energy drinks","toys","indian flag","protein supplements"]
        }
    ];




    const description = [
      {
        header: "The flipkart one stop destination",
        description: [
          "E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. ",
          "What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question. ",
        ],
      },
      {
        header: "Flipkart plus",
        description: [
          "A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins &amp; non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more",
          "An annual Zomato Gold membership",
          "An annual Hotstar Premium membership",
          "6 months Gaana plus subscription",
          "Rupees 550 instant discount on flights on ixigo",
          "Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.",
        ],
      },
      {
        header: "Cost EMI",
        description: [
          "In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.",
        ],
      },
      {
        header: "EMI on Debit Cards",
        description: [
          "Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply. ",
        ],
      },
      {
        header: "mobile Exchange Offers",
        description: [
          "Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply. ",
        ],
      },
      {
        header: "Mobiles",
        description: [
          "From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - ",
        ],
      },
      {
        header: "electronic devices and accessories",
        description: [
          "When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our ",
          "Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. ",
          "Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.",
        ],
      },
      {
        header: "Large appliances",
        description: [
          "Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our ",
          "For certain product categories, Customers meeting the eligibility criteria will have the option to buy larger quantities. To know more on the eligibility criteria and terms and conditions, please reach out to ",
        ],
      },
      {
        header: "baby and kids",
        description: [
          "Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson &amp; Johnson: we host only the most-trusted names in the business for your baby.",
        ],
      },
      {
        header: "Books,sports and games",
        description: [
          "Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving. ",
        ],
      },
      {
        header: "Grocery mart",
        description: [
          " that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our ",
        ],
      },
    ];


    const companyDetails = [
        {
            ABOUT: ["Contact us","About us","Carrers","Flipkart Stories","Press","Flipkart WholeSale","corporate information"]
        },
        {
            HELP:["Payments","Shipping","Cancellation & returns","FAQ","Report Infrigment"]
        },
        {
            ConsumerPolicy:["Cancellations & returns","TErms of use","Security","Privacy","SiteMap","Grievance Redressal","EPR compliance"]
        }, {
            SOCIAL:["FaceBook","Twitter","You Tube"]
        }
    ]




    const CompanyDetailsList = [
      {
        EMAIL: [
          "Flipkart internet Private Limited",
          "Buildings,alyesa & clove embasssy techonology",
          "Outer ring road",
          "devaaseebana villagae",
          "Bengaluru ",
          "560123",
          "KArnataka",
          "india",
        ],
      },
      {
        REGISTERED_OFFICE_ADDRESS: [
          "Flipkart internet Private Limited",
          "Buildings,alyesa & clove embasssy techonology",
          "Outer ring road",
          "devaaseebana villagae",
          "Bengaluru ",
          "560123",
          "KArnataka",
          "india",
        ]
      },
    ];




    return (
      <>
        <div className="wholeDirectory">
          <div className="wholeDirectoryBox">
            <div className="headingPart">Top stories :Brand Directory</div>
            <div className="DirectoryBox">
              <span className="DirectoryBoxList">
                {topstories.map((detail, index) => {
                  console.log("topstories", detail);

                  return (
                  
                      <span key={index}>
                        <span className="titleName">
                          <span id="titleId">{Object.keys(detail)}:</span>
                          {/* Object.values(detail); */}
                          {Object.keys(detail).map((category) => (
                            <span key={category}>
                              {/* <span>{category}</span> */}

                              {detail[category].map((item, index) => (
                                <>
                                  <a
                                    key={index}
                                    href="/login"
                                    className="AnchorTagOfDirectory"
                                  >
                                    {item}
                                  </a>
                                  <span>|</span>
                                </>
                              ))}
                              <br />
                            </span>
                          ))}
                        </span>
                      </span>
                    
                  );
                })}{" "}
              </span>
            </div>
            <div>
              <div>
                <div className="descriptionBox">
                  <div className="InsideDescriptionBox">
                    {description.map((desc, index) => {
                      console.log("desc", desc);
                      return (
                        
                          <div key={index}>
                            <h5 className="headerr">{desc.header}</h5>

                            {desc.description.map((name,id) => {
                              console.log("name1", name);
                              return (
                                
                                  


                                  <div key={id}
                                    onPaste={(e) => {
                                      e.preventDefault();
                                      return false;
                                    }}
                                    onCopy={(e) => {
                                      e.preventDefault();
                                      return false;
                                    }}
                                  >
                                    <p className="paraDescription">{name}</p>
                                </div>
                                

                                
                              );
                            })}
                          </div>
                        
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="EndOfPageColor">
              <div className="insideEndOfPage">
                <div className="rowInsideClass">
                  <div className="rowClass">
                    <div className="FirstPart">
                      {companyDetails.map((detail, index) => {
                        return (
                          
                            <div key={index} className="rotatingClass">
                              <div className="titleNameEnd">
                                <span className="titleCLassPa">
                                  {Object.keys(detail)}
                                </span>
                                {Object.keys(detail).map((category) => (
                                  <div
                                    key={category}
                                    className="matterBAckClass"
                                  >
                                    {/* <span>{category}</span> */}

                                    {detail[category].map((item, index) => (
                                      <>
                                        <a
                                          key={index}
                                          href="/login"
                                          className="FirstPartRowClass"
                                        >
                                          {item}
                                        </a>
                                      </>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          
                        );
                      })}
                    </div>
                  </div>
                  <div className="rowClassTwo">
                    <div className="SecondPart">
                      {CompanyDetailsList.map((detail, index) => {
                        return (
                          
                            <div key={index} className="rotatingClass">
                              <div className="titleNameEnd">
                                <span className="titleCLassPa">
                                  {Object.keys(detail)}
                                </span>
                                {Object.keys(detail).map((category) => (
                                  <div
                                    key={category}
                                    className="matterBAckClass"
                                  >
                                    {/* <span>{category}</span> */}

                                    {detail[category].map((item, index) => (
                                      <>
                                        <a
                                          key={index}
                                          href="/login"
                                          className="SecondPartRowClass"
                                        >
                                          {item}
                                        </a>
                                      </>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="secondPart">
                  <div className="secondPartInside">
                    <div className="secondPartInsideClass">
                      <span className="shopIconInLast">
                        <i className="bi bi-shop IconClass"></i>
                      </span>
                      <span className="sellerClassLast">Become seller</span>
                    </div>

                    <div className="secondPartInsideClass">
                      <span className="shopIconInLast">
                        <i className="bi bi-badge-ad IconClass"></i>
                      </span>
                      <span className="sellerClassLast">Advertise</span>
                    </div>

                    <div className="secondPartInsideClass">
                      <span className="shopIconInLast">
                        <i className="bi bi-gift IconClass"></i>
                      </span>
                      <span className="sellerClassLast">Gift Cards</span>
                    </div>

                    <div className="secondPartInsideClass">
                      <span className="shopIconInLast">
                        <i className="bi bi-question-circle IconClass"></i>
                      </span>
                      <span className="sellerClassLast">Help Center</span>
                    </div>

                    <div className="secondPartInsideClass">
                      <span className="shopIconInLast">
                        <i className="bi bi-c-circle IconClass"></i>
                      </span>
                      <span className="sellerClassLast">
                        2007-2023 Flipkart.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default TopStories;