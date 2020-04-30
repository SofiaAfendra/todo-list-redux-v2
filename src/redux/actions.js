import { ADD_TODO, TOGGLE_TODO, SET_FILTER, TEST, TEST2 } from './actionTypes'

let nextTodoId = 0

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})

export const testAction = () => ({
    type: TEST
})

export const testAction2 = () => ({
    type: TEST2
})