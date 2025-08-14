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

/**
 * Icon Library Control
 * 
 * This control is used to select an icon from a library.
 * 
 * This control do expect this data strcutrue for the 'value' prop:
 * 
 * {
 *     library: 'all' | 'font-awesome' | 'box-icons',
 *     type: 'regular' | 'solid',
 *     icon: 'icon-name',
 * }
 * 
 */
export function IconLibrary( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;

    if ( value === undefined || value === null || value === '' ) {
        value = {
            library: 'all',
            type: '',
            icon: '',
        }
    }

    const [ selectedIcon, setSelectedIcon ] = useState( value.icon );
    const [ selectedLibrary, setSelectedLibrary ] = useState( value.library === '' ? 'all' : value.library );
    const [ selectedType, setSelectedType ] = useState( value.type );
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    // Update local state when value prop changes.
    useEffect( () => {
        setSelectedIcon(value.icon);
        setSelectedLibrary(value.library === '' ? 'all' : value.library);
        setSelectedType(value.type);
    }, [value.icon] );

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

    // Virtualized list.
    const COLUMN_COUNT = 8;

    const getIconsForLibrary = (library) => {
        let filteredIcons;
        
        if (selectedLibrary === 'all') {
            filteredIcons = Object.entries(allIcons);
        } else {
            filteredIcons = Object.entries(icons[library]);
        }

        if (searchTerm) {
            filteredIcons = filteredIcons.filter(([iconSlug]) => 
                iconSlug.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filteredIcons;
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
                    className={ `atblocks-icon-library__icon ${ selectedIcon === iconSlug ? 'is-selected' : '' }` }
                    css={styles.icon}
                    onClick={() => selectIconOnClickHandler(iconSlug)}
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

    // Select icon handler.
    const selectIconOnClickHandler = (iconSlug) => {
        setSelectedIcon(iconSlug);
        setIsModalOpen(false);
        setSearchTerm( '' );
    }

    // Modal.
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openModal = () => {
        setIsModalOpen( true );
    };

    const onCloseModal = () => {
        setIsModalOpen( false );
        setSearchTerm( '' );
    };

    // On Change.
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
                className="atblocks-icon-library__icon-preview"
                onClick={ openModal }
                css={styles.iconPreview}
            >
                {
                    selectedIcon === '' ? (
                        <div className="atblocks-icon-library__icon-preview-placeholder">
                            +
                        </div>
                    ) : (
                        <div 
                            dataIconName={selectedIcon} 
                            dangerouslySetInnerHTML={{ __html: allIcons[selectedIcon] }} 
                        />
                    )
                }
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
                                                className={ `${ selectedLibrary === library.value ? 'is-selected' : '' }` }
                                                onClick={ () => setSelectedLibrary( library.value ) }
                                                css={ styles.categoryButton }
                                            >
                                                { library.label }
                                            </Button>
                                        ) )
                                    }
                                </div>
                            </div>
                            <div className="atblocks-icon-library__right-column">
                                <div className="atblocks-icon-library__search" css={ styles.search }>
                                    <TextControl
                                        placeholder={__('Search by icon name...', 'athemes-blocks')}
                                        value={searchTerm}
                                        onChange={(value) => setSearchTerm(value)}
                                    />
                                </div>
                                <Grid
                                    className="atblocks-icon-library__grid"
                                    cellRenderer={cellRenderer}
                                    columnCount={COLUMN_COUNT}
                                    rowCount={Math.ceil( getIconsForLibrary(selectedLibrary).length / COLUMN_COUNT )}
                                    width={Math.ceil( ( COLUMN_COUNT * 100 ) + 15 )}
                                    height={380}
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