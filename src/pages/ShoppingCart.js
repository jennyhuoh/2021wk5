import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import CartHeader from "../components/CartHeader"
import AppFooter from "../components/Footer"
import CartList from "../components/CartList.js";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function ShoppinCart() {
  const { state: { page: { title, products } } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="bg-gray">
        <Header className="layout-header">
          <CartHeader title={"Shopping Bag"} />
        </Header>
        <Content className="layout-content">
          <CartList />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ShoppinCart;
