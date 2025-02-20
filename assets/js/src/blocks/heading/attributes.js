export default {
    alignment: {
        type: 'object',
        default: {
            desktop: 'left',
            tablet: 'center',
            mobile: 'right',
        }
    },
    fontSize: {
        type: 'object',
        default: {
            desktop: {
                value: 40,
                unit: 'px',
            },
            tablet: {
                value: 30,
                unit: 'px',
            },
            mobile: {
                value: 20,
                unit: 'px',
            },
        }
    },
    fontSizeTwo: {
        type: 'object',
        default: {
            desktop: {
                value: 140,
                unit: 'px',
            },
            tablet: {
                value: 130,
                unit: 'px',
            },
            mobile: {
                value: 120,
                unit: 'px',
            },
        }
    },
}