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
            codigo:this.props.params.codigoAlumno,
            datosAmA: [],
            cab: [],
        }
        this.cab = '';
        this.datosAmA = '';
    }
    Regresar(e) {
        browserHistory.push('/');
        e.preventDefault();
    }

    componentDidMount() {
        fetch(CONFIG + '/matriculacab/buscar/' + this.state.codigo)
            .then((response) => {
                return response.json()
            }).then((cab) => {


                console.log("datos de cabecera");
                console.log(cab);
                this.setState({ cab: cab })

            })
            .catch(error => {
                console.error(error)
            });
        fetch(CONFIG + 'alumnomatriculaautorizacion/buscar/' + this.state.codigo)
            .then((response) => {
                return response.json()
            }).then((datos) => {


                console.log("datos de alumno matricula autorizacion");
                console.log(datos);
                this.setState({ datosAmA: datos })

            })
            .catch(error => {
                console.error(error)
            })

    }
    render() {
        /*const datos = this.state.datosAmA.map((datoAmA, i) => {
            return (
                <tr>
                    <td> {datoAmA.n_autorizacion} </td>
                    <td> {datoAmA.cod_alumno} </td>
                    <td> {datoAmA.fecha_emision} </td>
                    <td>{datoAmA.saldo} </td>
                    <td>{datoAmA.id_rec} </td>
                    <td>{datoAmA.importe} </td>
                    <td>{datoAmA.amortizacion} </td>
                    <td>{datoAmA.fecha_vencimieto} </td>
                    <td>{datoAmA.id_autorizacion_estado} </td>

                </tr>
            )
        })*/
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
                                <div className="negro"> {this.state.cab.cod_alumno} </div>
                                <b>Nombres:</b>
                                <div></div>
                                <div className="negro"> {this.state.datosAmA.usuario_emision}</div>
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
                                            <th className="th">CICLO</th>
                                            <th className="th">N° REPITENCIAS</th>
                                            <th className="th">IMPORTE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="td">{this.state.cab.semestre}</td>
                                            <td className="td">{this.state.cab.ciclo}</td>
                                            <td className="td">no especificado</td>
                                            <td className="td">no especificado</td>

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
                                <td className="td"> {this.state.datosAmA.n_autorizacion} </td>
                                <td className="td"> no especificado </td>
                                <td className="td"> {this.state.datosAmA.fecha_emision} </td>
                                <td className="td">S/. {this.state.datosAmA.saldo} </td>
                                <td className="td">no especificado </td>
                                <td className="td">S/. {this.state.datosAmA.importe} </td>
                                <td className="td">S/. {this.state.datosAmA.amortizacion} </td>
                                <td className="td">{this.state.datosAmA.fecha_vencimieto} </td>
                                <td className="td">{this.state.datosAmA.id_autorizacion_estado} </td>
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