import React ,{Component} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordion.scss';

export default class Accordions extends Component{
    render(){
        return(
            <>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>DIMENSI</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>4,450 mm</tr>
                                <tr>1,775 mm</tr>
                                <tr>1,710 mm</tr>
                                <tr>2,740 mm</tr>
                                <tr>1,515 mm</tr>
                                <tr>1,530 mm</tr>
                                <tr>5,1</tr>
                                <tr>200 mm</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>MESIN</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>TRANSMISI</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>BERAT</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>RANGKA</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor:'#f8f7f7', marginBottom:'15px'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography style={{fontWeight:'600'}}>KAPASITAS</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor:'#fff'}}>
                    <Typography>
                        <table>
                            <td className="right">
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Lebar Keseluruhan</tr>
                                <tr>Tinggi Keseluruhan</tr>
                                <tr>Jarak Poros Roda</tr>
                                <tr>Jarak Pijak Depan</tr>
                                <tr>Jarak Pijak Belakang</tr>
                                <tr>Jarak Terendah</tr>
                                <tr>Radius Putar Minimum</tr>
                            </td>
                            <td>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                                <tr>Panjang Keseluruhan</tr>
                            </td>
                        </table>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </>
        )
    }
}