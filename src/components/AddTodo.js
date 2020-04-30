import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = useState('')

    const updateInput = input => {
        setInput(input)
    }

    const handleAddTodo = () => {
        addTodo(input)
        setInput('')
    }

    return (
        <div>
            <input
                onChange={e => updateInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
        </button>
        </div>
    )
}

// class AddTodo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { input: '' }
//     }

//     updateInput = input => {
//         this.setState({ input })
//     }

//     handleAddTodo = () => {
//         this.props.addTodo(this.state.input)
//         this.setState({ input: '' })
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     onChange={e => this.updateInput(e.target.value)}
//                     value={this.state.input}
//                 />
//                 <button className="add-todo" onClick={this.handleAddTodo}>
//                     Add Todo
//           </button>
//             </div>
//         );
//     }
// }

export default connect(
    null,
    { addTodo }
)(AddTodo)