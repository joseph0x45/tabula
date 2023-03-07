import type { Board, Task, Color, Todo } from "../types"
import { add_task_modal_is_visible } from "../store"

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

function init_tabula(){
    const new_board: Board = {
        id:1,
        name:"Prima",
        tasks:[]
    }
    localStorage.setItem("tabula_data", JSON.stringify(new_board))
    return localStorage.getItem("tabula_data") as string
}

export function load_tabula(){
    return JSON.parse(localStorage.getItem("tabula_data") ?? init_tabula()) as Board
}

export function create_task(){

}