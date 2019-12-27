import React, { useEffect } from "react";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import * as OrderActions from "../../Redux/Action/OrderAction";
import OrderItem from "../../Components/OrderItem/OrderItem";

const OrderScreen = props => {
  const ordered = useSelector(state => state.order.orders);
  const dispatch = useDispatch();
  console.log(ordered);
  useEffect(() => {
    dispatch(OrderActions.fetchOrders());
  }, [dispatch]);
  return (
    <div>
      <Header history={props.history} />
      <h1 className="text-center text-success">Order Screen</h1>
      {ordered.map(el => {
        const { id, orderDate, courses } = el;
        const arrayTitle = [];
        for (const key in courses) {
          arrayTitle.push(courses[key].title);
        }
        return (
          <div  key={id} style={{width: '40%', margin:'0 auto',marginBottom:'20px'}}>
            <OrderItem id={id} orderDate={orderDate} arrayTitle={arrayTitle} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default OrderScreen;
