package main

import (
	"github.com/hexops/vecty"
	"github.com/hexops/vecty/elem"
	"tabula/components"
)

var dummyTasks = []*components.Task{
	{Title: "First", Done: false},
}

func main() {
	vecty.AddStylesheet("./paper.min.css")
	vecty.SetTitle("Tabula")
	vecty.RenderBody(&PageView{})
}

type PageView struct {
	vecty.Core
}

func (p *PageView) Render() vecty.ComponentOrHTML {
	var tasks vecty.List
	for _, task := range dummyTasks {
		tasks = append(tasks, task)
	}
	return elem.Body(
		vecty.Markup(
			vecty.Style("padding", "10px"),
		),
		elem.Div(
			vecty.Text("Manage your tasks with ease using Tabula (?)"),
		),
		elem.UnorderedList(
			tasks,
		),
	)
}
