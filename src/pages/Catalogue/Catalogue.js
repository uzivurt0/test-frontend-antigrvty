import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Catalogue.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation,Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';

import Banner from '../../assets/Image/Group 38.png';
import Motto from '../../assets/Image/image 18.png';

import Eksterior from '../../assets/Image/Group 75.png';
import Interior from '../../assets/Image/Group 76.png';
import { Accordions, Floating2, TabMobil, Pricing, Modal} from '../../components';

SwiperCore.use([Navigation, Pagination]);
export default class Catalogue extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    state = {isShown : false};
    showModal = () => {
        this.setState({isShown : true});
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.toggleScrollLock();
    };
    
    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };
    render(){
        return(
            <>
            <React.Fragment>
                <Floating2 showModal={this.showModal} buttonRef={(n)=>(this.Floating2 = n)}/>
                {this.state.isShown ? (
                    <Modal
                        closeModal={this.closeModal} 
                        modalRef = {(n) => (this.modal = n)}/>
                ) : null}
            </React.Fragment>
                <div className="nav-content">
                    <div className="car-name">
                        XL7
                    </div>
                    <div className="nav-tab">
                        <div className="nav-item"><Link to="overview"><a>Overview</a></Link></div>
                        <div className="nav-item"><Link to="tipe"><a>Tipe & Warna</a></Link></div>
                        <div className="nav-item"><Link to="eksterior"><a>Eksterior</a></Link></div>
                        <div className="nav-item"><Link to="interior"><a>Interior</a></Link></div>
                        <div className="nav-item"><Link to="spek"><a>Spesifikasi</a></Link></div>
                        <div className="nav-item"><Link to="price"><a>Harga</a></Link></div>
                    </div>
                </div>
                
                <main className="main-content">
                    <div className="divide"></div>
                    <div className="image-banner">
                    <Swiper cssMode={true} navigation={true} pagination={{clickable: true}}>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                        <SwiperSlide><img src={Banner}/></SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="main-title" id="overview">
                        <div className="row-title">
                            <div className="motto">
                                <img src={Motto}/>
                            </div>
                            <p>Suzuki XL7 hadir dengan tampilan maskulin, tangguh <br/>dan berkarakter. Desain modern SUV 7-Seater memberikan <br/>kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi <br/>dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya</p>
                        </div>
                        <div className="container-btn-title">
                            <a className="brosur">UNDUH BROSUR</a>
                            <a className="harga">HARGA</a>
                        </div>
                    </div>
                    <div className="container" id="tipe">
                        <div className="title">TIPE & WARNA</div>
                        <TabMobil />
                    </div>
                    <div className="exterior" id="eksterior">
                        <div className="title">
                            <h4>Eksterior</h4>
                        </div>
                        <div className="detail">
                            <img src={Eksterior}/>
                        </div>
                        <div className="title">
                            <div className="interior-btn">Lihat Semua Eksterior</div>
                        </div>
                    </div>
                    <div className="exterior" id="interior">
                        <div className="title">
                            <h4>Interior</h4>
                        </div>
                        <div className="detail">
                            <img src={Interior}/>
                        </div>
                        <div className="title">
                            <div className="interior-btn">Lihat Semua Interior</div>
                        </div>
                    </div>
                    <div className="container" id="spek">
                        <div className="title">
                            SPESIFIKASI
                        </div>
                        <Accordions />
                    </div>
                    <div className="container" id="price">
                        <div className="title">
                            DAFTAR HARGA <br/> XL7
                        </div>
                        <Pricing name="XL7 ZETA M/T" price="Rp 232.000.000"/>
                        <Pricing name="XL7 ZETA A/T" price="Rp 242.000.000"/>
                        <Pricing name="XL7 BETA M/T" price="Rp 248.500.000"/>
                        <Pricing name="XL7 BETA A/T" price="Rp 259.000.000"/>
                        <Pricing name="XL7 ALPHA M/T" price="Rp 258.500.000"/>
                        <Pricing name="XL7 ALPHA A/T" price="Rp 269.000.000"/>
                        <div className="pricing-btn">Lihat Semua Harga Mobil</div>
                    </div>
                </main>
            </>
        )
    }
}