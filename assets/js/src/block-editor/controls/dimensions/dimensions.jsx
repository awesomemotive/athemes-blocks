/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../../store/device-switcher-store';
import { BaseControl, __experimentalNumberControl as NumberControl, Button } from '@wordpress/components';
import { Icon, link, linkOff } from '@wordpress/icons';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { styles } from './styles';

export function Dimensions( props ) {
    const { label, value, directions, responsive, reset, onChange, onClickReset } = props;

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
            
            <div className="atblocks-dimensions-control">
                <div css={styles.inputWrapper} className="atblocks-dimensions-control__input-wrapper">
                    {
                        directions.map( ( direction, index ) => {
                            return(
                                <div key={index} css={styles.inputItem} className="atblocks-dimensions-control__input-item">
                                    <NumberControl
                                        __next40pxDefaultSize
                                        label=""
                                        onChange={() => {}}
                                        value="0"
                                    />
                                    <label css={styles.inputLabel} className="atblocks-dimensions-control__input-label">{ direction.label }</label>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className="atblocks-dimensions-control__connect-values-toggle">
                    <Button
                        icon={link}
                        label=""
                        onClick={() => {}}
                    />
                </div>
            </div>
        </BaseControl>
    );
}