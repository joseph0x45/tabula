import { writable } from "svelte/store";
import type { Task } from "../types";

export const viewport_height = writable(0)

export const viewport_width = writable(0)

export const add_task_modal_is_visible = writable(false)

const tasks: Task[] = []

export const board = writable()