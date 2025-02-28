export default {
    content: {
        type: 'string',
        default: '',
    },
    alignment: {
        type: 'object',
        default: {
            desktop: {
                value: '',
            },
            tablet: {
                value: '',
            },
            mobile: {
                value: '',
            },
        },
        css: {
            selectors: [
                '{{WRAPPER}}',
                '{{WRAPPER}} .test'
            ],
            property: 'text-align',
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
        },
        css: {
            selectors: [
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2'
            ],
            property: 'font-size',
        }
    },
    fontSizeTwo: {
        type: 'object',
        default: {
            desktop: {
                value: '',
                unit: 'px',
            },
            tablet: {
                value: '',
                unit: 'px',
            },
            mobile: {
                value: '',
                unit: 'px',
            },
        },
        css: {
            selectors: [
                '{{WRAPPER}} h2',
                '{{WRAPPER}} .test3'
            ],
            property: 'font-size',
        }
    },
    fontFamily: {
        type: 'object',
        default: {
            desktop: {
                value: 'Arial',
            },
            tablet: {
                value: 'Helvetica',
            },
            mobile: {
                value: 'Times New Roman',
            },
        },
        css: {
            selectors: [
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2'
            ],
            property: 'font-family',
        }
    },
    showBorder: {
        type: 'object',
        default: {
            desktop: {
                value: true,
            },
            tablet: {
                value: false,
            },
            mobile: {
                value: true,
            },
        }
    },
    textColor: {
        type: 'object',
        default: {
            desktop: {
                value: {
                    defaultState: '',
                    hoverState: ''
                }
            },
            tablet: {
                value: {
                    defaultState: '',
                    hoverState: ''
                }
            },
            mobile: {
                value: {
                    defaultState: '',
                    hoverState: ''
                }
            },
        },
        css: {
            selectors: [
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2'
            ],
            property: 'color',
        }
    },
    textTypography: {
        type: 'object',
        default: {
            innerSettings: {
                fontFamily: {
                    default: {
                        desktop: {
                            value: 'default'
                        },
                        tablet: {
                            value: 'default'
                        },
                        mobile: {
                            value: 'default'
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ],
                        property: 'font-family',
                    }
                },
                fontSize: {
                    default: {
                        desktop: {
                            value: '',
                            unit: 'px',
                        },
                        tablet: {
                            value: '',
                            unit: 'px',
                        },
                        mobile: {
                            value: '',
                            unit: 'px',
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ],
                        property: 'font-size',
                    }
                },
                fontWeight: {
                    default: {
                        desktop: {
                            value: 'default'
                        },
                        tablet: {
                            value: 'default'
                        },
                        mobile: {
                            value: 'default'
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ],
                        property: 'font-weight',
                    }
                },
                fontStyle: {
                    default: {
                        desktop: {
                            value: 'default'
                        },
                        tablet: {
                            value: 'default'
                        },
                        mobile: {
                            value: 'default'
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ],
                        property: 'font-style',
                    }
                },
                textTransform: {
                    default: {
                        desktop: {
                            value: 'default'
                        },
                        tablet: {
                            value: 'default'
                        },
                        mobile: {
                            value: 'default'
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ],
                        property: 'text-transform',
                    }
                },
                textDecoration: {
                    default: {
                        desktop: {
                            value: 'default'
                        },
                        tablet: {
                            value: 'default'
                        },
                        mobile: {
                            value: 'default'
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ],
                        property: 'text-decoration',
                    }
                },
                lineHeight: {
                    default: {
                        desktop: {
                            value: 1,
                            unit: 'em',
                        },
                        tablet: {
                            value: 1,
                            unit: 'em',
                        },
                        mobile: {
                            value: 1,
                            unit: 'em',
                        },
                    },
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ],
                        property: 'line-height',
                    }
                },
                letterSpacing: {
                    default: {
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
                    css: {
                        selectors: [
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ],
                        property: 'letter-spacing',
                    }
                },
            },
        },
    },
    padding: {
        type: 'object',
        default: {
            desktop: {
                value: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                },
                unit: 'px',
                connect: false,
            },
            tablet: {
                value: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                },
                unit: 'px',
                connect: false,
            },
            mobile: {
                value: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                },
                unit: 'px',
                connect: false,
            },
        },
        css: {
            selectors: [
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2'
            ],
            property: 'padding',
        }
    }
}