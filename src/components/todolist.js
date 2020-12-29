import React from 'react'
import { Todo } from './todo'

const todos = [{ title: 'prepare a dish', description: 'buy ingredients and cook a meal' }, { title: 'clean the house', description: 'buy detergent and clean the house' }, { title: 'watch a movie', description: 'stream a movie online and watch' }]

class Todolist extends React.Component {
    markOrRemove(e) {
        const el = e.target.parentNode.children[1]
        e.target.innerText === 'mark' ? el.style.textDecoration = 'line-through' : el.parentNode.remove()
    }

    id = 0
    allTodos = todos.map(todo => {
        return (
            <Todo key={this.id++} title={todo.title} description={todo.description} onClick={this.markOrRemove} />
        )
    })

    render() {
        return (
            <div>
                <ol>{this.allTodos}</ol>
            </div>
        )
    }
}

export default Todolist