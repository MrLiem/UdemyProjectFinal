import React from "react";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import CourseItems from "../../Components/courseItems/courseItems";
import ConvertJsonToArray from "../../Utils/convertJsonToArray";
import * as OrderActions from '../../Redux/Action/OrderAction';

const CartScreen = props => {
  const coursesCarted = ConvertJsonToArray(
    useSelector(state => state.cart.courses)
  );
  const totalAmount = useSelector(state => state.cart.totalAmount);

   const dispatch=useDispatch();

  const addOrder=(courses,totalAmount)=>{
    dispatch(OrderActions.addOrder(courses,totalAmount))
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
