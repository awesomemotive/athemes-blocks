import { useSelect } from '@wordpress/data';
import { getSettingValue, getInnerSettingValue } from '../utils/settings';

/**
 * Extend block props with animation classes and attributes
 * 
 * @param {Object} blockProps Block properties
 * @param {Object} attributes Block attributes
 * @returns {Object} Extended block properties
 */
export const blockPropsWithAnimation = (blockProps, attributes) => {
    const { animation } = attributes;

    if ( ! animation) {
        return blockProps;
    }

    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const entranceAnimation = getInnerSettingValue('animation', 'entranceAnimation', currentDevice, attributes);
    const animationDuration = getInnerSettingValue('animation', 'animationDuration', currentDevice, attributes);
    const animationDelay = getInnerSettingValue('animation', 'animationDelay', currentDevice, attributes);

    if ( entranceAnimation === 'default' ) {
        return blockProps;
    }

    if (entranceAnimation) {
        blockProps['data-atb-animation'] = `${entranceAnimation}`;
        blockProps.className += ` atb-animation-${entranceAnimation}`;
    }

    if (animationDuration) {
        blockProps.className += ` atb-animation-duration-${animationDuration}`;
    }

    if (animationDelay) {
        blockProps['data-atb-animation-delay'] = `${animationDelay}ms`;
    }

    return blockProps;
}

/**
 * Get animation classes and attributes for a block
 * 
 * @param {Object} attributes Block attributes
 * @returns {Object} Object containing classes and attributes
 */
export const getBlockAnimationProps = (attributes) => {
    const { entranceAnimation, animationDuration, animationDelay } = attributes;
    const classes = [];
    const attrs = {};

    // Add animation class if set
    if (entranceAnimation) {
        classes.push(`has-animation-${entranceAnimation}`);
    }

    // Add duration if set
    if (animationDuration) {
        attrs['data-animation-duration'] = `${animationDuration}ms`;
    }

    // Add delay if set
    if (animationDelay) {
        attrs['data-animation-delay'] = `${animationDelay}ms`;
    }

    return {
        classes: classes.join(' '),
        attributes: attrs
    };
}; 