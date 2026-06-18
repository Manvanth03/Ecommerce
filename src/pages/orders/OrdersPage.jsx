import axios from "axios";
import { useState, useEffect} from "react";
import { Header } from "../../components/Header";
import "./OrdersPage.css";
import { OrderGrid } from "./OrderGrid";


export function OrdersPage({ cart }) {
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
      <OrderGrid orders={orders}/>

      </div>
    </>
  );
}
