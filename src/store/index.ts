import { writable } from "svelte/store";

export const viewport_height = writable(0)

export const viewport_width = writable(0)

export const add_task_modal_is_visible = writable(false)


export const idling = writable(true)
