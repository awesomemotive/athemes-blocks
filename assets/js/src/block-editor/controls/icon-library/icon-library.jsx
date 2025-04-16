/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { Grid } from "react-virtualized";
import { BaseControl, TextControl, SelectControl, Button, Modal } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

import { styles } from './styles';

export function IconLibrary( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;

    const [ selectedIcon, setSelectedIcon ] = useState( value.icon );
    const [ selectedLibrary, setSelectedLibrary ] = useState( value.library );
    const [ selectedType, setSelectedType ] = useState( value.type );

    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    // Icons.
    const icons = {
        'font-awesome': window?.athemesBlocksFontAwesomeLibrary,
        'box-icons': window?.athemesBlocksIconBoxLibrary,
    }

    const allIcons = {
        ...window?.athemesBlocksFontAwesomeLibrary,
        ...window?.athemesBlocksIconBoxLibrary,
    }

    // Categories.
    const libraries = [
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

    // Virtualized list configuration
    const COLUMN_COUNT = 8;
    const ROW_HEIGHT = 116;

    const getIconsForLibrary = (library) => {
        if (selectedLibrary === 'all') {
            return Object.entries(allIcons);
        }

        return Object.entries(icons[library]);
    };

    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        const icons = getIconsForLibrary(selectedLibrary);
        const iconIndex = columnIndex + (rowIndex * COLUMN_COUNT);
        const iconSlug = icons[iconIndex]?.[0];
        const iconSvgString = icons[iconIndex]?.[1];

        if (!iconSlug) return null;

        return (
            <div key={key} style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button
                    className="atblocks-icon-library__icon"
                    css={styles.icon}
                    onClick={() => setSelectedIcon(iconSlug)}
                    variant={selectedIcon === iconSlug ? 'primary' : 'secondary'}
                >
                    <div 
                        style={{
                            width: 22,
                            height: 22,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        dataIconName={iconSlug} 
                        dangerouslySetInnerHTML={{ __html: iconSvgString }} 
                    />
                </Button>
            </div>
        );
    };

    // Modal.
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openModal = () => {
        setIsModalOpen( true );
    };

    const onCloseModal = () => {
        setIsModalOpen( false );
    };

    

    // On change.
    useEffect( () => {
        onChange( {
            library: selectedLibrary,
            type: selectedType,
            icon: selectedIcon
        } );
    }, [ selectedIcon ] );
    
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
                        className="atblocks-icon-library-modal"
                        css={ styles.modal }
                        title={ __( 'Select Icon', 'athemes-blocks' ) }
                        onRequestClose={ onCloseModal }
                    >
                        <div className="atblocks-icon-library" css={ styles.iconsLibrary }>
                            <div className="atblocks-icon-library__left-column">
                                <div className="atblocks-icon-library__categories">
                                    {
                                        libraries.map( ( library ) => (
                                            <Button
                                                key={ library.value }
                                                variant={ selectedLibrary === library.value ? 'primary' : 'secondary' }
                                                onClick={ () => setSelectedLibrary( library.value ) }
                                            >
                                                { library.label }
                                            </Button>
                                        ) )
                                    }
                                </div>
                            </div>
                            <div className="atblocks-icon-library__right-column">
                                <Grid
                                    cellRenderer={cellRenderer}
                                    columnCount={COLUMN_COUNT}
                                    rowCount={Math.ceil(getIconsForLibrary(selectedLibrary).length / COLUMN_COUNT)}
                                    width={Math.ceil( ( COLUMN_COUNT * 100 ) + 15 )}
                                    height={500}
                                    columnWidth={100}
                                    rowHeight={100}
                                    scrollToRow={selectedIcon ? Math.floor( getIconsForLibrary(selectedLibrary).findIndex( ( [ slug ] ) => slug === selectedIcon ) / COLUMN_COUNT ) : null}
                                />
                            </div>
                        </div>
                    </Modal>
                )
            }
        </BaseControl>
    );
}