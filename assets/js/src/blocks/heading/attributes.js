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
    fontFamily: {
        type: 'object',
        default: {
            desktop: 'Arial',
            tablet: 'Helvetica',
            mobile: 'Times New Roman',
        }
    },
    showBorder: {
        type: 'object',
        default: {
            desktop: true,
            tablet: false,
            mobile: false,
        }
    },
    textColor: {
        type: 'object',
        default: {
            desktop: {
                defaultState: 'transparent',
                hoverState: '#CCC'
            },
            tablet: {
                defaultState: '#CCC',
                hoverState: '#CCC'
            },
            mobile: {
                defaultState: '#f5f5f5',
                hoverState: '#CCC'
            },
        }
    },
    textTypography: {
        type: 'object',
        default: {
            typographySettings: {
                fontSize: {
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
                },
                fontFamily: 'Arial',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontVariant: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: 1.5,
                letterSpacing: 0,
            },
        }
    },
}