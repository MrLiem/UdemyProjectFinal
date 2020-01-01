import React,{useState} from "react";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import CourseItems from "../../Components/courseItems/courseItems";
import ConvertJsonToArray from "../../Utils/convertJsonToArray";
import * as OrderActions from '../../Redux/Action/OrderAction';
import Spinner from '../../Components/Spinner/Spinner'

const CartScreen = props => {
  const [isLoading,setIsLoading]=useState(false);
  console.log(isLoading);
  const coursesCarted = ConvertJsonToArray(
    useSelector(state => state.cart.courses)
  );
  // console.log(coursesCarted)
  const totalAmount = useSelector(state => state.cart.totalAmount);

   const dispatch=useDispatch();

  const addOrder=(courses,totalAmount)=>{
    setIsLoading(true)
    dispatch(OrderActions.addOrder(courses,totalAmount)).then(res=>setIsLoading(false))
  }

  if(isLoading){
    return <Spinner/>
  }
  if (coursesCarted.length === 0) {
    return (
      <div>
        <Header history={props.history} />
        <h1 className="text-center text-dark">Cart Screen</h1>
        <h3 className="text-center text-dark">TotalAmount: $ {totalAmount}</h3>
        <div
          className="text-center  text-success "
          style={{ padding: "100px" }}
        >
          Bạn chưa có sản phẩm nào trong Cart!!!
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header history={props.history} />
      <h1 className="text-center  text-dark">Cart Screen</h1>
      <div style={{display: 'flex',justifyContent:'space-around'}}>
        <h3 className="text-center text-success" style={{paddingLeft: '470px'}}>TotalAmount: $ {totalAmount}</h3>
        <button className='btn btn-success' onClick={()=>addOrder(coursesCarted,totalAmount)}>Order Now!!!</button>
      </div>
      <CourseItems
        courseList={coursesCarted}
        history={props.history}
        isCartScreen
      />
      <Footer />
    </div>
  );
};

export default CartScreen;
