import React from "react";
//import urls from "../../constants/apiendpoints";
import axios from "axios";

const Admin = () => {
  const [data, setData] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  // console.log("data.image", data.image);
  // console.log("data.imageTwo", data.image);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(urls.addProduct)
    // console.log(">>>", data);
    let response = axios.post(
      "http://localhost:3001/routes/mobilesDetailsApi",
      data
    );
    console.log("response", response);
    response.then((res) => {
      console.log("res:", res);
      console.log("res:", res.data);
      console.log("res:", res.data.status);
      if (res.data === "success") {
        setSuccess(true);
      }
    });
  };
  const handleChange = async (event) => {
    // console.log(event.target.name, ":", event.target.value);
    if (event.target.name === "firstImage" || event.target.name === "secondImage") {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = async () => {
        // console.log(reader.result);
        let result = await reader.result;
        let basesixtyfour = result.split(",");
        setData({ ...data, [event.target.name]: basesixtyfour[1] });
        // setData({ ...data, [event.target.name]: reader.result });
      };

      // console.log("data tutttu", data);
      reader.onerror = (err) => {
        console.log(err);
      };
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
      console.log("data", data);
    }
  };
  return (
    <>
      {success && (
        <div
          className="alert alert-primary text-center"
          role="alert"
          style={{ width: "50%", marginLeft: "30%" }}
        >
          {`${data.productName} product added successfully`}
        </div>
      )}
      <div
      //className="d-flex justify-content-center"
      >
        <form onSubmit={handleSubmit} className="">
          <h1 className="text-primary"> Add Product</h1>
          <div className="container">
            <div className="row ">
              <div className="column w-50">
                <label>product Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="productName"
                  onChange={handleChange}
                />
              </div>

              <div className="column w-50">
                <label>id</label>
                <input
                  className="form-control"
                  type="number"
                  name="id"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>Price</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={250}
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="column w-50">
                <div className="">
                  <label>InStock</label>
                </div>
                <div className="" style={{ display: "flex" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="InStock"
                      id="flexRadioDefault1"
                      value={"Available"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Available
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="InStock"
                      id="flexRadioDefault2"
                      onChange={handleChange}
                      value={"Not Available"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Not Available
                    </label>
                  </div>
                </div>
              </div>
              <div className="column w-50">
                <label htmlFor="formFile" className="form-label">
                  first Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="firstImage"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label htmlFor="formFile" className="form-label">
                  second Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="secondImage"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="column w-50">
                <label>model Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="modelName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label></label>rom
                <input
                  className="form-control"
                  type="text"
                  name="rom"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>ram</label>
                <input
                  className="form-control"
                  type="text"
                  name="ram"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>battery</label>
                <input
                  className="form-control"
                  type="text"
                  name="battery"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>processors</label>
                <input
                  className="form-control"
                  type="text"
                  name="processors"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>warranty</label>
                <input
                  className="form-control"
                  type="text"
                  name="warranty"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>description</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  maxLength={250}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>discount</label>
                <input
                  className="form-control"
                  type="number"
                  name="discount"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>deliveryDate</label>
                <input
                  className="form-control"
                  type="date"
                  name="deliveryDate"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>front Camera</label>
                <input
                  className="form-control"
                  type="text"
                  name="frontCamera"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>back camera</label>
                <input
                  className="form-control"
                  type="text"
                  name="backCamera"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>hybrid sim slot</label>
                <input
                  className="form-control"
                  type="text"
                  name="hybridSimSlot"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>browseType</label>
                <input
                  className="form-control"
                  type="text"
                  name="browseType"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>sim type</label>
                <input
                  className="form-control"
                  type="text"
                  name="simType"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>quick charging</label>
                <input
                  className="form-control"
                  type="text"
                  name="quickCharging"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>display size</label>
                <input
                  className="form-control"
                  type="text"
                  name="displaySize"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>resolution</label>
                <input
                  className="form-control"
                  type="text"
                  name="Resolution"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>Resolution type</label>
                <input
                  className="form-control"
                  type="text"
                  name="ResolutionType"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>display type</label>
                <input
                  className="form-control"
                  type="text"
                  name="DisplayType"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>operating system</label>
                <input
                  className="form-control"
                  type="text"
                  name="operatingSystem"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>processors type</label>
                <input
                  className="form-control"
                  type="text"
                  name="ProcessorsType"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>processor core</label>
                <input
                  className="form-control"
                  type="text"
                  name="ProcessorCore"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>ProcessorsType</label>
                <input
                  className="form-control"
                  type="text"
                  name="ProcessorsType"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>ProcessorCore</label>
                <input
                  className="form-control"
                  type="text"
                  name="ProcessorCore"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>PrimaryClockSpeed</label>
                <input
                  className="form-control"
                  type="text"
                  name="PrimaryClockSpeed"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>operating frequency</label>
                <input
                  className="form-control"
                  type="text"
                  name="OperatingFrequency"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> InternalStorage</label>
                <input
                  className="form-control"
                  type="text"
                  name="InternalStorage"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> MemoryCardSlotType</label>
                <input
                  className="form-control"
                  type="text"
                  name=" MemoryCardSlotType"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> CallLogMemory</label>
                <input
                  className="form-control"
                  type="text"
                  name="CallLogMemory"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> PrimaryCameraAvailable</label>
                <input
                  className="form-control"
                  type="text"
                  name="PrimaryCameraAvailable"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> PrimaryCamera</label>
                <input
                  className="form-control"
                  type="text"
                  name="PrimaryCamera"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> PrimaryCameraFeautres</label>
                <input
                  className="form-control"
                  type="text"
                  name="PrimaryCameraFeautres"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> SecondaryCameraAvailable</label>
                <input
                  className="form-control"
                  type="text"
                  name="SecondaryCameraAvailable"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> SecondaryCamera</label>
                <input
                  className="form-control"
                  type="text"
                  name=" SecondaryCamera"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> SecondaryCameraFeautres</label>
                <input
                  className="form-control"
                  type="text"
                  name=" SecondaryCameraFeautres"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> VideoRecording</label>
                <input
                  className="form-control"
                  type="text"
                  name=" VideoRecording"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label>FullHdRecording</label>
                <input
                  className="form-control"
                  type="text"
                  name="FullHdRecording"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>PhoneBook</label>
                <input
                  className="form-control"
                  type="text"
                  name="PhoneBook"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> FmRadio</label>
                <input
                  className="form-control"
                  type="text"
                  name="FmRadio"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label>FmRadioRecording</label>
                <input
                  className="form-control"
                  type="text"
                  name="FmRadioRecording"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> AudioFormats</label>
                <input
                  className="form-control"
                  type="text"
                  name="AudioFormats"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> VideoFormats</label>
                <input
                  className="form-control"
                  type="text"
                  name=" VideoFormats"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> width</label>
                <input
                  className="form-control"
                  type="text"
                  name=" width"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> Height</label>
                <input
                  className="form-control"
                  type="text"
                  name="Height"
                  onChange={handleChange}
                />
              </div>
              <div className="w-50">
                <label> Depth</label>
                <input
                  className="form-control"
                  type="text"
                  name="Depth"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="column w-50">
                <label> weight</label>
                <input
                  className="form-control"
                  type="text"
                  name="weight"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <button className="btn btn-primary">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Admin;
