'use strict'

const foregroundColor = '#cedde0'
const backgroundColor = '#2f3542'
const black = backgroundColor
const slate = '#5b5a77'
const lightSlate = '#767594'
const blue = '#44C0C6'
const orange = '#FC8458'
const lightOrange = '#FC8458'
const gray = '#3d424b'
const brightBlack = backgroundColor
const brightWhite = foregroundColor
const red = '#8c4646'
const green = '#cae359'

const colors = {
	black: backgroundColor,
	red: red,
	green: green,
	yellow: blue,
	blue: orange,
	magenta: orange,
	cyan: gray,
	white: foregroundColor,
	lightBlack: backgroundColor,
	lightRed: red,
	lightGreen: green,
	lightYellow: blue,
	lightBlue: orange,
	lightMagenta: orange,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: orange,
		colors: colors,
		css: `
			${config.css || ''}
            .tab_tab {
                border: 0;
            }
            .tab_textActive {
                border-bottom: 2px solid ${blue};
            }
		`
	})
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = orange
      action.config.colors = colors
  }
  next(action)
}
