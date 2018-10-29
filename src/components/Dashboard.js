import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/shapeActions';


class Dashboard extends React.Component {
    render() {
        const shapes = this.props.shapes.map((item, i) => {
            let picture = '';
            let formula = '';
            switch (item.shape) {
                case 'circle':
                    picture = <div style={{backgroundColor: item.color}} className='circle'/>
                    formula = 3.14 * (item.r * item.r);
                    break;
                case 'triangle':
                    picture = <div style={{backgroundColor: item.color}} className='triangle'/>
                    formula = ((item.a * item.b) / 2);
                    break;
                case 'rectangle':
                    picture = <div style={{backgroundColor: item.color}} className='rectangle'/>
                    formula = (item.a * item.b);
                    break;
            }

            return (
                <tr key={i}>
                    <td>{picture}</td>
                    <td>{item.shape}</td>
                    <td style={{color: item.color}}>{item.color}</td>
                    <td>{formula}</td>
                    <td className="remover" onClick={() => {
                        this.props.removeShape(i)
                    }}>X
                    </td>
                </tr>
            )
        });
        return (
            <div className='dashboard'>
                <table>
                    <tr>
                        <th>YAYYY!!</th>
                        <th>Shape</th>
                        <th>Color</th>
                        <th>Area</th>
                        <th>Delete??</th>
                    </tr>
                    {shapes}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shapes: state.shapes
    }
};
export default connect(mapStateToProps, actions)(Dashboard)
