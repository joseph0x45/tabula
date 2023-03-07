export type Board = {
    id:number
    name:string
    tasks: Task[]
}

export type Task = {
    id:number
    name:string
    color:Color
    todos: Todo[]
    z_index?:number
}

export type Color = {
    name:string
    primary:string
    secondary:string
}

export type Todo = {
    id:number
    name:string
    done:boolean
}

