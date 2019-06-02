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
            datosAmA: [],
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
                                <div className="negro"> 15207043 </div>
                                <b>Nombres:</b>
                                <div></div>
                                <div className="negro"> ENRIQUE GUSTAVO ROJAS KUDO </div>
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
                                            <td className="td">GTI</td>
                                            <td className="td">GIC</td>
                                            <td className="td">GIC</td>

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
                                    <td> 1 </td>
                                    <td> Operación1 </td>
                                    <td>05/05/2018 </td>
                                    <td> C1 </td>
                                    <td>05/05/2018 </td>
                                    <td> S/. 1000 </td>
                                    <td> S/. 2000 </td>
                                    <td>05/05/2018 </td>
                                    <td>Pendiente </td>

                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> Operación2 </td>
                                    <td>05/05/2018 </td>
                                    <td> C2 </td>
                                    <td>05/04/2018 </td>
                                    <td> S/. 2000 </td>
                                    <td> S/. 2000 </td>
                                    <td>01/05/2018 </td>
                                    <td>Pendiente </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> Operación3 </td>
                                    <td>14/04/2018 </td>
                                    <td> C3 </td>
                                    <td>05/10/2018 </td>
                                    <td> S/. 2000 </td>
                                    <td> S/. 3000 </td>
                                    <td>01/05/2018 </td>
                                    <td>Pendiente </td>
                                </tr>
                                <tr>
                                    <td> 4 </td>
                                    <td> Operación4 </td>
                                    <td>14/04/2018 </td>
                                    <td> C4 </td>
                                    <td>05/10/2018 </td>
                                    <td> S/. 1000 </td>
                                    <td> S/. 3000 </td>
                                    <td>11/12/2018 </td>
                                    <td>Pendiente </td>
                                </tr>
                                <tr>
                                    <td> 5 </td>
                                    <td> Operación5 </td>
                                    <td>04/05/2018 </td>
                                    <td> C4 </td>
                                    <td>02/06/2018 </td>
                                    <td> S/. 1000 </td>
                                    <td> S/. 3000 </td>
                                    <td>11/10/2018 </td>
                                    <td>Pendiente </td>
                                </tr>
                                <tr>
                                    <td> 6 </td>
                                    <td> Operación6 </td>
                                    <td>14/05/2018 </td>
                                    <td> C4 </td>
                                    <td>22/06/2018 </td>
                                    <td> S/. 4000 </td>
                                    <td> S/. 1000 </td>
                                    <td>16/07/2018 </td>
                                    <td>Pendiente </td>
                                </tr>
                                <tr>
                                    <td> 7 </td>
                                    <td> Operación7 </td>
                                    <td>24/06/2018 </td>
                                    <td> C4 </td>
                                    <td>28/06/2018 </td>
                                    <td> S/. 1000 </td>
                                    <td> S/. 2000 </td>
                                    <td>07/08/2018 </td>
                                    <td>Pendiente </td>
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