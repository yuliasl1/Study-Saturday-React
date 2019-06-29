import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor(props) {
    super(props)
    this.state = {
      students: [],
    };
}
async componentDidMount () {
    try {
        const res = await axios.get('/student')
        const students = res.data
        this.setState({students})
    } catch (err) {
        console.log('There is a problem!!!')
    }
}
    render() {

        return (
        // <div>Students</div>
          <ul>
            { this.state.students.map(student => <li>{student.fullName}</li>)}
          </ul>
        )
      }
    }
