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
                fontFamily: 'default',
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
                fontWeight: 'default',
                fontStyle: 'default',
                textTransform: 'default',
                textDecoration: 'default',
                lineHeight: {
                    desktop: {
                        value: 1.3,
                        unit: 'px',
                    },
                    tablet: {
                        value: 1.3,
                        unit: 'px',
                    },
                    mobile: {
                        value: 1.3,
                        unit: 'px',
                    },
                },
                letterSpacing: {
                    desktop: {
                        value: 0,
                        unit: 'px',
                    },
                    tablet: {
                        value: 0,
                        unit: 'px',
                    },
                    mobile: {
                        value: 0,
                        unit: 'px',
                    },
                },
            },
        }
    },
    padding: {
        type: 'object',
        default: {
            desktop: {
                value: {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20,
                },
                unit: 'px',
                connect: false,
            },
            tablet: {
                value: {
                    top: 30,
                    right: 40,
                    bottom: 50,
                    left: 60,
                },
                unit: 'px',
                connect: false,
            },
            mobile: {
                value: {
                    top: 1,
                    right: 2,
                    bottom: 1,
                    left: 4,
                },
                unit: 'px',
                connect: false,
            },
        }
    }
}