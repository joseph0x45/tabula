import { writable } from "svelte/store"
import type { Board, Task, Todo } from "../types"
import { colors } from "$lib"
import { add_task_modal_is_visible } from "."

const new_board: Board = {
    id:1,
    name:"Prima",
    tasks:[]
}

const board = writable<Board>(new_board)

const tabula_data = (() =>{
    if( localStorage.getItem("tabula_data")!==null ){
        return JSON.parse(localStorage.getItem("tabula_data") as string) as Board
    }else{
        localStorage.setItem("tabula_data", JSON.stringify(new_board))
        return JSON.parse(localStorage.getItem("tabula_data") as string) as Board
    }
})()

board.set(tabula_data)

board.subscribe((value)=>{
    localStorage.setItem("tabula_data", JSON.stringify(value))
})    

export default board

export const just_created_task_id = writable(0)

export function add_task(){
    board.update((value)=>{
        const new_task: Task = {
            id : value.tasks.length+1,
            name:"",
            todos:[] as Todo[],
            posx:100,
            posy:100,
            color:colors[5]
        }
        just_created_task_id.set(new_task.id)
        value.tasks.push(new_task)
        return value
    })
}

export function update_task_position( id:number, posx:number, posy:number ){
    board.update(
        value=>{
            // value.tasks = value.tasks.map(task=> task.id===id? { ...task, posx, posy } : { ...task } )
            value.tasks[id-1] = { ...value.tasks[id-1], posx, posy }
            return value
        }
    )
}

export function update_task_name( id:number, name:string ){
    board.update(value=>{
        // value.tasks.map(task=> task.id===id? { ...task, name:name } : { ...task } )
        value.tasks[id-1].name = name
        return value
    })
}

export function add_todo(id: number, todo: string){
    board.update(value=>{
        let new_todo: Todo = {
            name:todo,
            done:false,
            id:value.tasks[id-1].todos.length+1
        }
        value.tasks[id-1].todos.push(new_todo)
        return value
    })
}

export function toggle_todo_done(id: number, todo_id: number){
    board.update(value=>{
        value.tasks[id-1].todos[todo_id-1].done = !value.tasks[id-1].todos[todo_id].done
        return value
    })
}

export function update_todo_name( id: number, todo_id: number, todo_name: string ){
    board.update(value=>{
        value.tasks[id-1].todos[todo_id-1].name= todo_name
        return value
    })
}

export function remove_todo( id: number, todo_id: number ){
    board.update(value=>{
        value.tasks[id-1].todos = value.tasks[id-1].todos.filter(todo=>todo.id!==todo_id)
        return value
    })
}

export function remove_task(id:number){
    add_task_modal_is_visible.set(false)
    board.update((value)=>{
        value.tasks = value.tasks.filter(task=>task.id!==id)
        return value
    })
}

export function clear(){
    add_task_modal_is_visible.set(false)
    const confirm = window.confirm("Clear all tasks?")
    if(!confirm){
        return
    }
    board.update(value=>{
        value.tasks = []
        return value
    })
}