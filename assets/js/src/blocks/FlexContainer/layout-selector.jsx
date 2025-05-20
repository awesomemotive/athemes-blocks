import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/icons';
import { grid } from '@wordpress/icons';

const LAYOUTS = [
    {
        name: '1-column',
        label: __('1 Column', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--1">
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }]
        ],
        attributes: {
            direction: {
                desktop: { value: 'column' },
                tablet: { value: 'column' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '2-columns',
        label: __('2 Columns', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--2">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 50,
                        unit: '%'
                    },
                    tablet: {
                        value: 50,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 50,
                        unit: '%'
                    },
                    tablet: {
                        value: 50,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '3-columns',
        label: __('3 Columns', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--3">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 33.33,
                        unit: '%'
                    },
                    tablet: {
                        value: 33.33,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 33.33,
                        unit: '%'
                    },
                    tablet: {
                        value: 33.33,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 33.33,
                        unit: '%'
                    },
                    tablet: {
                        value: 33.33,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '4-columns',
        label: __('4 Columns', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--4">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 25,
                        unit: '%'
                    },
                    tablet: {
                        value: 25,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 25,
                        unit: '%'
                    },
                    tablet: {
                        value: 25,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 25,
                        unit: '%'
                    },
                    tablet: {
                        value: 25,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 25,
                        unit: '%'
                    },
                    tablet: {
                        value: 25,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '6-columns-grid',
        label: __('6 Columns Grid', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--6-grid">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: {
                        value: 16.66,
                        unit: '%'
                    },
                    tablet: {
                        value: 16.66,
                        unit: '%'
                    },
                    mobile: {
                        value: 100,
                        unit: '%'
                    }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    }
                }
            }],
        ],
        attributes: {
            layout: {
                desktop: { value: 'grid' },
                tablet: { value: 'grid' },
                mobile: { value: 'grid' }
            },
            layoutGridColumns: {
                desktop: { value: 3 },
                tablet: { value: 3 },
                mobile: { value: 3 }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '2-columns-left-small',
        label: __('2 Columns Left Small', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--2-left-small">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 25, unit: '%' },
                    tablet: { value: 25, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 75, unit: '%' },
                    tablet: { value: 75, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '3-columns-left-right-small',
        label: __('3 Columns Left Right Small', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--3-left-right-small">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 25, unit: '%' },
                    tablet: { value: 25, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 50, unit: '%' },
                    tablet: { value: 50, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 25, unit: '%' },
                    tablet: { value: 25, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
    {
        name: '2-columns-right-small',
        label: __('2 Columns Right Small', 'athemes-blocks'),
        content: <div className="columns-icon columns-icon--2-right-small">
            <div className="columns-icon__column"></div>
            <div className="columns-icon__column"></div>
        </div>,
        template: [
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 75, unit: '%' },
                    tablet: { value: 75, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
            ['athemes-blocks/flex-container', {
                customWidth: {
                    desktop: { value: 25, unit: '%' },
                    tablet: { value: 25, unit: '%' },
                    mobile: { value: 100, unit: '%' }
                },
                padding: {
                    desktop: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        }, 
                        unit: 'px', 
                        connect: false 
                    },
                    tablet: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },   
                        unit: 'px', 
                        connect: false 
                    },
                    mobile: { 
                        value: {
                            top: '',
                            right: 15,
                            bottom: '',
                            left: 15
                        },
                        unit: 'px',
                        connect: false  
                    }
                }
            }],
        ],
        attributes: {
            direction: {
                desktop: { value: 'row' },
                tablet: { value: 'row' },
                mobile: { value: 'column' }
            },
            childrenWidth: {
                desktop: { value: 'equal' },
                tablet: { value: 'equal' },
                mobile: { value: 'equal' }
            }
        }
    },
];

const LayoutSelector = ({ onSelect }) => {
    return (
        <div className="at-block-flex-container__layout-selector">
            <div className="at-block-flex-container__layout-selector-title">
                <Icon icon={grid} />
                <span>{__('Flex Container', 'athemes-blocks')}</span>
            </div>
            <div className="at-block-flex-container__layout-selector-description">
                {__('Select a container layout to get started.', 'athemes-blocks')}
            </div>
            <div className="at-block-flex-container__layout-selector-grid">
                {LAYOUTS.map((layout) => (
                    <button
                        key={layout.name}
                        className="at-block-flex-container__layout-selector-item"
                        onClick={() => onSelect(layout)}
                    >
                        {layout.content}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LayoutSelector; 