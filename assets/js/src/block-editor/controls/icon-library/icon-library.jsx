import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl, Button, Modal } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function IconLibrary( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
console.log(333333, value);
    useEffect( () => {
        if ( value ) {
            setSelectedIcon( value );

            if ( value.includes( 'fa-' ) ) {
                setSelectedCategory( 'font-awesome' );
            } else if ( value.includes( 'bx-' ) ) {
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
        'font-awesome': [
            {
                label: 'Chevron Right',
                value: 'fa-chevron-right',
            },
            {
                label: 'Chevron Left',
                value: 'fa-chevron-left',
            },
        ],
        'box-icons': [
            {
                label: 'Arrow Right',
                value: 'bx-right-arrow-alt',
            },
            {
                label: 'Arrow Left',
                value: 'bx-left-arrow-alt',
            },
        ]
    }

    const allIcons = Object.values( icons ).flat();

    // On change.
    useEffect( () => {
        onChange( selectedIcon );
    }, [ selectedIcon ] );

    console.log(icons, selectedCategory);

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
                                            allIcons.map( ( icon ) => (
                                                <Button
                                                    key={ icon.value }
                                                    className="atblocks-icon-library__icon"
                                                    onClick={ () => setSelectedIcon( icon.value ) }
                                                    variant={ selectedIcon === icon.value ? 'primary' : 'secondary' }
                                                >
                                                    { icon.label }
                                                </Button>
                                            ) )
                                        )
                                    }
                                    {
                                        selectedCategory !== 'all' && (
                                            icons[selectedCategory].map( ( icon ) => (
                                                <Button
                                                    key={ icon.value }
                                                    className="atblocks-icon-library__icon"
                                                    onClick={ () => setSelectedIcon( icon.value ) }
                                                    variant={ selectedIcon === icon.value ? 'primary' : 'secondary' }
                                                >
                                                    { icon.label }
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