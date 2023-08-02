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
      let response =  axios.post("http://localhost:3001/routes/groceryDetailsApi", data);
      console.log("response", response);
      response.then((res) => {
           console.log("res:", res);
               console.log("res:", res.data);
      console.log("res:", res.data.status);
      if (res.data === "success") {
        setSuccess(true);
      }
    });
  }
  const handleChange =async (event) => {
    // console.log(event.target.name, ":", event.target.value);
    if (event.target.name === "image" || event.target.name === "imageTwo") {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =async () => {
        // console.log(reader.result);
          let result =await reader.result;
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
          {`${data.title} product added successfully`}
        </div>
      )}
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-primary "> Add Product</h1>
          <div className="">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label>id</label>
            <input
              className="form-control"
              type="number"
              name="id"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>expiry date</label>
            <input
              className="form-control"
              type="date"
              name="expiryDate"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>quantity one</label>
            <input
              className="form-control"
              type="text"
              name="weightOne"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>quantity two</label>
            <input
              className="form-control"
              type="text"
              name="weightTwo"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Brand Name</label>
            <input
              className="form-control"
              type="text"
              name="brandName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>NutrientContent</label>
            <input
              className="form-control"
              type="text"
              name="NutrientContent"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>organicContent</label>
            <input
              className="form-control"
              type="text"
              name="organic"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              className="form-control"
                          type="text" 
                          
                          maxLength={250}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div>
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
              <label className="form-check-label" htmlFor="flexRadioDefault1">
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
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Not Available
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="formFile" className="form-label">
              Add Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="formFile" className="form-label">
              Add Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="imageTwo"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Admin;