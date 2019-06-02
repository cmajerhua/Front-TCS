import React from 'react'
import '../App.css'
import swal from 'sweetalert';
import CONFIG from '../Configuracion/Config'
import Select from 'react-select';
import { browserHistory } from 'react-router-3';

class MatrAuth extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            datosAmA:[],
        }
        this.datosAmA = '';
    }
    Regresar(e) {
        browserHistory.push('/');
        e.preventDefault();
    }
    
    componentDidMount() {
        let supuestoCodigo = 11207052;
        fetch(CONFIG + '/AlumnoMatriculaAutorizacion/listar/' + supuestoCodigo)
            .then((response) => {
                return response.json()
            }).then((datos) => {


                console.log("datos");
                console.log(datos);
                this.setState({ datosAmA: datos })

            })
            .catch(error => {
                console.error(error)
            });
    }
    render() {

        return (
            <div>
                <h3>Estado de matricula por autorizacion<ul id="nav-mobile" class="right  hide-on-med-and-down"><li><a class="seleccionar" onClick={this.Regresar.bind(this)}>Regresar<i class="material-icons right">reply</i></a></li></ul></h3>
                <div className="SplitPane row">
                    <div className="col-xs-3">
                        <div className="Alumno">
                            <h4 className="center ">Datos personales</h4>
                            <div className="center datos">
                                <div>
                                    <i className="material-icons medium">account_circle</i>
                                </div>
                                <b>Codigo:</b>
                                <div></div>
                                <div className="negro"> aca va el codigo </div>
                                <b>Nombres:</b>
                                <div></div>
                                <div className="negro"> aca va el nombre </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <div className="SplitPane row">
                            <div className="inline col-xs-5">
                                <table className="table-small">
                                    <thead>
                                        <tr>
                                            <th className="th">SEMESTRE</th>
                                            <th className="th">N° CREDITOS</th>
                                            <th className="th">N° REPITENCIAS</th>
                                            <th className="th">IMPORTE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="td">2019-1</td>
                                            <td className="td">24</td>
                                            <td className="td">0</td>
                                            <td className="td">S/. 2000.00</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="inline col-xs-4">
                                <table className="table-small">
                                    <thead>
                                        <tr>
                                            <th className="th">MUPG</th>
                                            <th className="th">MEPG</th>
                                            <th className="th">E</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="td">que</td>
                                            <td className="td">sera</td>
                                            <td className="td">esto!?</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table-small">
                            <thead>
                                <tr>
                                    <th className="th">N°</th>
                                    <th className="th">OPERACION</th>
                                    <th className="th ancho">FECHA DE COMPROBANTE</th>
                                    <th className="th">C</th>
                                    <th className="th">N° COMPROBANTE</th>
                                    <th className="th">IMPORTE</th>
                                    <th className="th">AMORTIZACION</th>
                                    <th className="th">FECHA DE VENCIMIENTO</th>
                                    <th className="th">CONDICION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                </tr>
                                <tr>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                    <td className="td">que</td>
                                    <td className="td">sera</td>
                                    <td className="td">esto!?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer>
                    <div class="row center-xs centrar color">Proyecto SIGAP © 2019</div>
                </footer>
            </div >
        );
    }

}
export default MatrAuth