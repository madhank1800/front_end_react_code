import axios from "axios";
import { useDispatch } from "react-redux";
import { mobileProducts } from "../REDUX/actions/MobileProductActions";
const MobilePage = () => {
         const dispatch = useDispatch();
  const data={productName:"oppo"}

    async function mobileDetails() {
       const mobileDetails = await axios.post(
         "http://localhost:3001/routes/getMobilesDetailsApi",data
       );
      console.log("mobileDetails", mobileDetails);
            dispatch(mobileProducts(mobileDetails.data));
    }

    return (
        <>
        <button onClick={mobileDetails}>oppo</button>
        
        
        </>
    );
}
export default MobilePage;