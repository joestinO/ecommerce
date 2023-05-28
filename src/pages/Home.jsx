import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";



import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from '../asset/images/hero-img.png'

import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';

import Clock from "../components/UI/Clock";

import counterImg from "../asset/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {

  const {data: products, loading} = useGetData('products')

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category  === 'chair' 
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category  === 'sofa' 
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category  === 'mobile' 
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category  === 'wireless' 
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category  === 'watch' 
    );
    setTrendingProduct(filteredTrendingProducts);
    setBestSalesProduct(filteredBestSalesProducts);
    setMobileProduct(filteredMobileProducts);
    setWirelessProduct(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);

  }, [products]);


  return (
  <Helmet title={"Home"}>
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="hero__content">
            <p className="hero__subtitle">Trending product in {year}</p>
            <h2>Make Your Interior More Minimalist & Modern</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quas saepe quo voluptas natus fugit cum repudiandae,
                vero assumenda rerum commodi at expedita exercitationem
                 debitis animi qui eos, inventore officiis ut.</p>

                 <motion.button whileTap={{scale: 1.2}}
                  className="buy__btn">
                    <Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
        </Col>
        
        <Col lg="6" md="6">
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    <Services/>
    <section className="trending__product">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Trending Product</h2>
          </Col>

          {
            loading ? <h5 className="fw-bold">Loading.....</h5> :
            <ProductList  data={trendingProduct}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
        <Col lg='12' className='text-center'>
            <h2 className="section__title">Best Sales</h2>
          </Col>
          {
            loading ? <h5 className="fw-bold">Loading.....</h5> :
            <ProductList  data={bestSalesProduct}/>
          }
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className="count__down-col">
            <div className="clock__top-content">
              <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
              <h3 className="text-white fs-5 mb-3"> Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale: 1.2}} 
            className="buy__btn store__btn"
            >
              <Link to='/shop'>Visit Store</Link>
              </motion.button>
          </Col>
          <Col lg='6' md='12' className="text-end counter__img">
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          {
            loading ? <h5 className="fw-bold">Loading.....</h5> :
            <ProductList  data={mobileProduct}/>
          }
           {
            loading ? <h5 className="fw-bold">Loading.....</h5> :
            <ProductList  data={wirelessProduct}/>
          }
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          {
            loading ? <h5 className="fw-bold">Loading.....</h5> :
            <ProductList  data={popularProducts}/>
          }
         
        </Row>
      </Container>
    </section>
  </Helmet>
    
  )
}

export default Home;