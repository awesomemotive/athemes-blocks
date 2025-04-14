import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl, Button, Modal } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function IconLibrary( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;
    console.log(333333, value);
    const { library, category, icon } = value;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    useEffect( () => {
        if ( value ) {
            setSelectedIcon( icon );

            if ( library === 'font-awesome' ) {
                setSelectedCategory( 'font-awesome' );
            } else if ( library === 'box-icons' ) {
                setSelectedCategory( 'box-icons' );
            }
        }
    }, [ value ] );

    // Modal.
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openModal = () => {
        setIsModalOpen( true );
    };

    const onCloseModal = () => {
        setIsModalOpen( false );
    };

    // Categories.
    const [ selectedCategory, setSelectedCategory ] = useState( 'all' );

    const categories = [
        {
            label: 'All',
            value: 'all',
        },
        {
            label: 'Font Awesome',
            value: 'font-awesome',
        },
        {
            label: 'Box Icons',
            value: 'box-icons',
        }
    ];

    // Icons.
    const [ selectedIcon, setSelectedIcon ] = useState( null );

    const icons = {
        'font-awesome': window?.athemesBlocksFontAwesomeLibrary,
        'box-icons': window?.athemesBlocksIconBoxLibrary,
    }

    const allIcons = {
        ...window?.athemesBlocksFontAwesomeLibrary,
        ...window?.athemesBlocksIconBoxLibrary,
    }

    console.log(allIcons);

    // On change.
    // useEffect( () => {
    //     onChange( selectedIcon );
    // }, [ selectedIcon ] );

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                {
                    responsive && (
                        <DeviceSwitcher />
                    )
                }
                {
                    reset && (
                        <ResetValues 
                            onClick={ onClickReset }
                        />
                    )
                }
            </div>
            
            <Button
                onClick={ openModal }
            >
                { __( 'Select Icon', 'athemes-blocks' ) }
            </Button>
            {
                isModalOpen && (
                    <Modal
                        title={ __( 'Select Icon', 'athemes-blocks' ) }
                        onRequestClose={ onCloseModal }
                    >
                        <div className="atblocks-icon-library">
                            <div className="atblocks-icon-library__categories">
                                {
                                    categories.map( ( category ) => (
                                        <Button
                                            key={ category.value }
                                            variant={ selectedCategory === category.value ? 'primary' : 'secondary' }
                                            onClick={ () => setSelectedCategory( category.value ) }
                                        >
                                            { category.label }
                                        </Button>
                                    ) )
                                }
                            </div>
                            <div className="atblocks-icon-library__icons">
                                <div className="atblocks-icon-library__icons-grid">
                                    {
                                        selectedCategory === 'all' && (
                                            Object.entries(allIcons).map( ( [iconSlug, iconSvgString] ) => (
                                                <Button
                                                    key={ iconSlug }
                                                    className="atblocks-icon-library__icon"
                                                    onClick={ () => setSelectedIcon( iconSlug ) }
                                                    variant={ selectedIcon === iconSlug ? 'primary' : 'secondary' }
                                                >
                                                    {
                                                        <div 
                                                            style={
                                                                {
                                                                    width: 24,
                                                                    height: 24,
                                                                }
                                                            }
                                                            dataIconName={ iconSlug } 
                                                            dangerouslySetInnerHTML={{ __html: iconSvgString }} 
                                                        />
                                                    }
                                                </Button>
                                            ) )
                                        )
                                    }
                                    {
                                        selectedCategory !== 'all' && (
                                            Object.entries(icons[selectedCategory]).map( ( [iconSlug, iconSvgString] ) => (
                                                <Button
                                                    key={ iconSlug }
                                                    className="atblocks-icon-library__icon"
                                                    onClick={ () => setSelectedIcon( iconSlug ) }
                                                    variant={ selectedIcon === iconSlug ? 'primary' : 'secondary' }
                                                >
                                                    {
                                                        <div 
                                                            style={
                                                                {
                                                                    width: 24,
                                                                    height: 24,
                                                                }
                                                            }
                                                            dataIconName={ iconSlug } 
                                                            dangerouslySetInnerHTML={{ __html: iconSvgString }} 
                                                        />
                                                    }
                                                </Button>
                                            ) )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </BaseControl>
    );
}