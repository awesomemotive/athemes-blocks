function addListBlockClassName( settings, name ) {
    if ( name !== 'core/list' ) {
        return settings;
    }

    return {
        ...settings,
        supports: {
            ...settings.supports,
            className: true,
        },
    };
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'asdasd/asdasd',
    addListBlockClassName
);