import type { Board, Task, Color, Todo } from "../types"
import { add_task_modal_is_visible } from "../store"
import { writable } from "svelte/store"

export const colors: Color[] = [
    {
        name:"Red Royale",
        primary:"#ff7b7b",
        secondary:"#ffbaba"
    },
    {
        name:"Yilly Yellow",
        primary:"#f5fb94",
        secondary:"#ffd700"
    },
    {
        name:"Pinky ",
        primary:"#ff77ff",
        secondary:"#ff69b4"
    },
    {
        name:"Forest Green",
        primary:"#50c878",
        secondary:"#90EE90"
    },
    {
        name:"Cerruland Blue",
        primary:"#2a52be",
        secondary:"#0892d0"
    }
]

export function init_tabula(){
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
    return board
}


export function create_task(){

}
