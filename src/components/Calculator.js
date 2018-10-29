import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/shapeActions';
import Message from '../components/Message';


class Calculator extends React.Component {
    state = {
        shape: 'triangle',
        color: '#3cb5e2',
        a: '',
        b: '',
        r: '',
        isMessage: false,
        isEmpty: false,
    };

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    submit = (e) => {
        e.preventDefault();
        const {shape, color, a, b, r} = this.state;
        if ((shape === "triangle" || shape === "rectangle") && (a === '' || b === '')) return this.setState({isEmpty: true});
        if ((shape === "circle") && (r === '')) return this.setState({isEmpty: true});
        const data = {shape, color, a, b, r};
        this.props.addShape(data);
        this.showMessage();
        this.setState({isEmpty: false, a: '', b: '', r: ''});
    };

    showMessage = () => {
        this.setState({isMessage: true});
        setTimeout(() => {
            this.hideMessage()
        }, 3000)
    };
    hideMessage = () => {
        this.setState({isMessage: false})
    };


    render() {
        return (
            <div className='calculator'>

                <form onSubmit={this.submit}>
                    choose color
                    <input className='color'
                           value={this.state.color}
                           name='color'
                           type="color"
                           onChange={this.inputHandler}/>
                    choose shape
                    <select name='shape'
                            onChange={this.inputHandler}>
                        <option value="triangle">triangle</option>
                        <option value="circle">circle</option>
                        <option value="rectangle">rectangle</option>
                    </select>
                    <p style={{color: this.state.isEmpty === true ? 'red' : 'inherit'}}>enter measurements </p>
                    <input type='hidden' value='whatever'/>
                    <input onChange={this.inputHandler}
                           name='a' type="number" placeholder='edge a'
                           value={this.state.a}
                           style={{display: this.state.shape === "circle" ? 'none' : 'inline-block'}}/>
                    <input onChange={this.inputHandler}
                           name='b' type="number" placeholder='edge b'
                           value={this.state.b}
                           style={{display: this.state.shape === "circle" ? 'none' : 'inline-block'}}/>
                    <input
                        onChange={this.inputHandler}
                           name='r' type="number" placeholder='r'
                            autoComplete="off"
                           value={this.state.r}
                           style={{display: (this.state.shape === "triangle" || this.state.shape === "rectangle") ? 'none' : 'block'}}/>
                    {/*{questions}*/}
                    <button>Add shape</button>
                </form>
                {this.state.isMessage &&
                <Message message="added!!"
                         shape={this.state.shape}
                         color={this.state.color}
                />
                }
            </div>
        )
    }
}

export default connect(null, actions)(Calculator)


