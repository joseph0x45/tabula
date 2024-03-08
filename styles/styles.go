package styles

import (
	"github.com/hexops/vecty"
	"github.com/hexops/vecty/style"
)

var TaskStyle vecty.MarkupList = vecty.Markup(
	style.Width("150px"),
	style.Height("150px"),
	vecty.Style("border-radius", "9px"),
	vecty.Style("border-style", "solid"),
	vecty.Style("border-width", "2px"),
	vecty.Style("padding", "5px"),
	vecty.Attribute("draggable", true),
	vecty.Style("cursor", "grab"),
)

var FlexDiv vecty.MarkupList = vecty.Markup(
	vecty.Style("display", "flex"),
	vecty.Style("flex-direction", ""),
)
