export const _font_family = {
    display: 'display',
    text: 'text'
}

const { display, text } = _font_family


const _display_heading = {
    fontFamily: display,
    fontWeight: '700',
}

export const _text_preset = {
    text: {
        fontFamily: text,
        fontSize: 14,
        fontWeight: '400',
    },
    h1: {
        ..._display_heading,
        fontSize: 34
    },
    h2: {
        ..._display_heading,
        fontSize: 30
    },
    h3: {
        ..._display_heading,
        fontFamily: text,
        fontSize: 22
    }
}