package components

import (
	"github.com/hexops/vecty"
	"github.com/hexops/vecty/elem"
	"tabula/styles"
)

type Task struct {
	vecty.Core
	Title string
	Done  bool
}

func (t *Task) Render() vecty.ComponentOrHTML {
	return elem.Div(
		styles.TaskStyle,
		vecty.Text(t.Title),
	)
}
