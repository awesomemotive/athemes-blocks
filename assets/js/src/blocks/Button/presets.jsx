import { getPresetResponsiveAttributeValueObject } from '../../utils/settings';

const defaults = {
    buttonBackgroundColor: {
        defaultState: '#212121',
        hoverState: '#757575',
    },
    buttonPadding: {
        desktop: {
            value: {
                top: 13,
                right: 25,
                bottom: 13,
                left: 25
            },
            unit: 'px'
        },
        tablet: {
            value: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        },
        mobile: {
            value: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    iconGap: {
        desktop: {
            value: 10,
            unit: 'px'
        },
        tablet: {
            value: '',
            unit: 'px'
        },
        mobile: {
            value: '',
            unit: 'px'
        }
    }
}

const buttonPresets = {
    default: {
        layout: 'default',
        enableIcon: false,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#FFF',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: defaults.buttonBackgroundColor,
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'none',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 4,
                            right: 4,
                            bottom: 4,
                            left: 4,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: '',
                        },
                        unit: 'px'
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '',
                            hoverState: '',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
    squared: {
        layout: 'squared',
        enableIcon: false,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#FFF',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: defaults.buttonBackgroundColor,
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'none',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: '',
                        },
                        unit: 'px'
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '',
                            hoverState: '',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
    rounded: {
        layout: 'rounded',
        enableIcon: false,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#FFF',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: defaults.buttonBackgroundColor,
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'none',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 35,
                            right: 35,
                            bottom: 35,
                            left: 35,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: '',
                        },
                        unit: 'px'
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '',
                            hoverState: '',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
    'with-icon': {
        layout: 'with-icon',
        enableIcon: true,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#FFF',
                hoverState: '#FFF',
            },
        }),
        icon: {
            innerSettings: {
                iconData: {
                    default: {
                        library: 'all',
                        type: '',
                        icon: 'bx-check-regular',
                    },
                },
                iconPosition: {
                    default: 'after',
                },
                iconGap: {
                    default: defaults.iconGap
                }
            },
        },
        iconColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#FFF',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: defaults.buttonBackgroundColor,
        }),
        buttonPadding: defaults.buttonPadding
    },
    'squared-outline': {
        layout: 'squared-outline',
        enableIcon: false,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#212121',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: 'transparent',
                hoverState: '#212121',
            },
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'solid',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        unit: 'px',
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '#212121',
                            hoverState: '#212121',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
    'rounded-outline': {
        layout: 'rounded-outline',
        enableIcon: false,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#212121',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: 'transparent',
                hoverState: '#212121',
            },
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'solid',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 35,
                            right: 35,
                            bottom: 35,
                            left: 35,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        unit: 'px',
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '#212121',
                            hoverState: '#212121',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
    'with-icon-outline': {
        layout: 'with-icon-outline',
        enableIcon: true,
        color: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#212121',
                hoverState: '#FFF',
            },
        }),
        icon: {
            innerSettings: {
                iconData: {
                    default: {
                        library: 'all',
                        type: '',
                        icon: 'bx-check-regular',
                    },
                },
                iconPosition: {
                    default: 'after',
                },
                iconGap: {
                    default: defaults.iconGap
                }
            },
        },
        iconColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#212121',
                hoverState: '#FFF',
            },
        }),
        buttonBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: 'transparent',
                hoverState: '#212121',
            },
        }),
        buttonBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'solid',
                    })
                },
                borderRadius: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        unit: 'px',
                    })
                },
                borderWidth: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        unit: 'px',
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '#212121',
                            hoverState: '#212121',
                        }
                    })
                }
            }
        },
        buttonPadding: defaults.buttonPadding
    },
}

export default buttonPresets;