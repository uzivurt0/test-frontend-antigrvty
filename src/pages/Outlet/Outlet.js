import React, { Component } from 'react';
import './Outlet.scss';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';

import SwiperCore, { Navigation,Pagination } from 'swiper';
import {Floating} from '../../components';

import 'swiper/swiper-bundle.css';

import Banner from '../../assets/Image/image 1.png';

import Banner2 from '../../assets/Image/Group 25.png';
import Banner3 from '../../assets/Image/Group 26.png';
import CarTab from '../../components/CarTab/CarTab';
SwiperCore.use([Navigation, Pagination]);

export default class Outlet extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <>
            <Floating/>
            <main className="main-content">
                <div className="image-banner">
                    <Swiper cssMode={true} navigation={true} pagination={{clickable: true}}>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className="main-title">
                    <div className="row-title">
                        <h1>Temukan Mobil Suzuki yang<br/> tepat untuk Anda</h1>
                    </div>
                    <div className="divide"></div>
                    
                </div>
                <Link to="/XL7">
                    <CarTab />
                </Link>
                <a className="image-banner">
                    <img src={Banner2}/>
                </a>
                <a className="image-banner">
                    <img src={Banner3}/>
                </a>
                
            </main>
            </>
        )
    }
}