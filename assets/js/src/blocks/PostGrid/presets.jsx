import { getPresetResponsiveAttributeValueObject } from '../../utils/settings';

const postCardPresets = {
    layout1: {
        postCardLayout: 'layout1',
        cardHorizontalAlignment: getPresetResponsiveAttributeValueObject({
            value: 'center',
        }),
        cardPadding: getPresetResponsiveAttributeValueObject({
            value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            connect: true,
            unit: 'px',
        }),
        cardBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '',
                hoverState: '',
            },
        }),
        imageBorderRadius: getPresetResponsiveAttributeValueObject({
            value: {
                top: 4,
                right: 4,
                bottom: 4,
                left: 4,
            },
            unit: 'px',
            connect: true,
        }),
        imageBottomSpacing: getPresetResponsiveAttributeValueObject({
            value: 10,
            unit: 'px',
        }),
        cardBorder: {
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
                        unit: 'px',
                        connect: true,
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
    },
    layout2: {
        postCardLayout: 'layout2',
        cardHorizontalAlignment: getPresetResponsiveAttributeValueObject({
            value: 'center',
        }),
        cardPadding: getPresetResponsiveAttributeValueObject({
            value: {
                top: 25,
                right: 25,
                bottom: 25,
                left: 25,
            },
            connect: true,
            unit: 'px',
        }),
        cardPaddingToContentOnly: false,
        cardBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#f5f5f5',
                hoverState: '',
            },
        }),
        imageBorderRadius: getPresetResponsiveAttributeValueObject({
            value: {
                top: 4,
                right: 4,
                bottom: 4,
                left: 4,
            },
            unit: 'px',
            connect: true,
        }),
        imageBottomSpacing: getPresetResponsiveAttributeValueObject({
            value: 10,
            unit: 'px',
        }),
        cardBorder: {
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
                        unit: 'px',
                        connect: true,
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
    },
    layout3: {
        postCardLayout: 'layout3',
        cardHorizontalAlignment: getPresetResponsiveAttributeValueObject({
            value: 'center',
        }),
        cardPadding: getPresetResponsiveAttributeValueObject({
            value: {
                top: 25,
                right: 25,
                bottom: 25,
                left: 25,
            },
            connect: true,
            unit: 'px',
        }),
        cardPaddingToContentOnly: true,
        cardBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: '#f5f5f5',
                hoverState: '',
            },
        }),
        imageBorderRadius: getPresetResponsiveAttributeValueObject({
            value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            unit: 'px',
            connect: true,
        }),
        imageBottomSpacing: getPresetResponsiveAttributeValueObject({
            value: 0,
            unit: 'px',
        }),
        cardBorder: {
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
                        unit: 'px',
                        connect: true,
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
    },
    layout4: {
        postCardLayout: 'layout4',
        cardHorizontalAlignment: getPresetResponsiveAttributeValueObject({
            value: 'center',
        }),
        cardPadding: getPresetResponsiveAttributeValueObject({
            value: {
                top: 25,
                right: 25,
                bottom: 25,
                left: 25,
            },
            connect: true,
            unit: 'px',
        }),
        cardPaddingToContentOnly: false,
        cardBackgroundColor: getPresetResponsiveAttributeValueObject({
            value: {
                defaultState: 'transparent',
                hoverState: '',
            },
        }),
        imageBorderRadius: getPresetResponsiveAttributeValueObject({
            value: {
                top: 4,
                right: 4,
                bottom: 4,
                left: 4,
            },
            unit: 'px',
            connect: true,
        }),
        imageBottomSpacing: getPresetResponsiveAttributeValueObject({
            value: 10,
            unit: 'px',
        }),
        cardBorder: {
            innerSettings: {
                borderStyle: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: 'solid',
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
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        unit: 'px',
                        connect: true,
                    })
                },
                borderColor: {
                    default: getPresetResponsiveAttributeValueObject({
                        value: {
                            defaultState: '#ddd',
                            hoverState: '',
                        }
                    })
                }
            }
        },
    },
}

export default postCardPresets;