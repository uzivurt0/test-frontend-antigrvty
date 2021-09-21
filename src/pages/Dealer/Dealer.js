import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Dealer.scss';
import Info1 from '../../assets/Image/image 8.png';
import { Card } from '../../components';

import Dealer1 from '../../assets/Image/Soetta.png';
import Dealer2 from '../../assets/Image/Cibeureum.png';
import Dealer3 from '../../assets/Image/Bubat.png'
import Dealer4 from '../../assets/Image/Ahmad Yani.png';
import Dealer5 from '../../assets/Image/Kopo.png';
import Dealer6 from '../../assets/Image/Dago.png';
import Dealer7 from '../../assets/Image/Sebud.png';
import Dealer8 from '../../assets/Image/Rancaekek.png'

export default class Dealer extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <main className="main-content">
                <section className="main-title">
                    <div className="row-title">
                        <h1>Temukan Outlet Suzuki terdekat<br/> di daerah sekitar Anda</h1>
                        <div className="divide"></div>
                        <div className="divide"></div>
                    </div>
                </section>
                <section className="card-container">
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer1}
                        tag="Sales , Service, Sparepart, Body & Paint"
                        namaOutlet="SUZUKI NJS SOEKARNO - HATTA"
                        telfonOutlet="(022) 6204645"
                        alamatOutlet="JL. Soekarno Hatta No. 289 Bandung 40234"/>
                </Link>
                <Link to={process.env.PUBLIC_URL+'/outlet'}>
                    <Card
                        gambarOutlet={Dealer2}
                        tag="Sales , Service, Sparepart"
                        namaOutlet="SUZUKI NJS CIBEUREUM"
                        telfonOutlet="(022) 6204645"
                        alamatOutlet="JL. Raya Cibeureum 48 B Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer3}
                        tag="Sales , Service, Sparepart, Body & Paint"
                        namaOutlet="SUZUKI NJS BUAH BATU"
                        telfonOutlet="(022) 7300723"
                        alamatOutlet="JL. Soekarno – Hatta No. 513 Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer4}
                        tag="Sales , Service, Sparepart"
                        namaOutlet="SUZUKI NJS AHMAD YANI"
                        telfonOutlet="(022) 7101655"
                        alamatOutlet="JL. Jenderal Ahmad Yani 259 Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer5}
                        tag="Sales"
                        namaOutlet="SUZUKI NJS KOPO"
                        telfonOutlet="(022) 5422259"
                        alamatOutlet="JL. Kopo (Sayati) 260 C Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer6}
                        tag="Sales"
                        namaOutlet="SUZUKI NJS DAGO"
                        telfonOutlet="(022) 6002512"
                        alamatOutlet="JL. IR.H. Juanda (Dago) No. 75 Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer7}
                        tag="Sales , Service, Sparepart"
                        namaOutlet="SUZUKI NJS SETIABUDHI"
                        telfonOutlet="(022) 2030787"
                        alamatOutlet="JL. DR. Setiabudhi No. 78 Bandung"/>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/outlet'}>
                    <Card
                        gambarOutlet={Dealer8}
                        tag="Sales , Service, Sparepart"
                        namaOutlet="SUZUKI NJS RANCAEKEK"
                        telfonOutlet="(022) 87836800"
                        alamatOutlet="JL. Raya Rancaekek Cipasir KM. 22 Rancaekek"/>
                </Link> 
                </section>
                <div className="divide"></div>
                <section className="main-title">
                    <div className="row-title">
                        <h1>Informasi Terbaru</h1>
                        <p>Seputar Promo, Berita, Event dari Suzuki</p>
                        <div className="divide"></div>
                        <div className="divide"></div>
                    </div>
                </section>
                <section className="card-container">
                    <a className="content">
                        <div className="content__img">
                            <img src={Info1}/>
                        </div>
                        <div className="content__text">
                            <div className="card-outletInfo">
                                <p>Rabu, 19 Agustus 2020</p>
                            </div>
                            <div className="card-outletName">
                                <h4>Promo Pembelian Berhadiah Periode Bulan September 2020</h4>
                            </div>
                        </div>
                    </a>
                </section>
            </main>
        )
    }
}