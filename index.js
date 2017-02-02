'use strict'

const foregroundColor = '#cedde0'
const backgroundColor = '#2f3542'
const black = backgroundColor
const cyan = '#44C0C6'
const orange = '#FC8458'
const brightBlack = backgroundColor
const brightWhite = foregroundColor
const gray = '#3d424b'
const green = '#cae359'
const lightOrange = '#D1BC92'

const colors = {
	black: backgroundColor,
	red: orange,
	green: green,
	yellow: orange,
	blue: cyan,
	magenta: orange,
	cyan: cyan,
	white: foregroundColor,
	lightBlack: backgroundColor,
	lightRed: orange,
	lightGreen: green,
	lightYellow: lightOrange,
	lightBlue: cyan,
	lightMagenta: orange,
	lightCyan: cyan,
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
                border-bottom: 2px solid ${orange};
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
