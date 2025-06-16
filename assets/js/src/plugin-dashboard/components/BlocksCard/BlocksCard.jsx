/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { ToggleControl, Tooltip } from '@wordpress/components';

import { CustomIcon } from '../../icons/icons.jsx';

const styles = (theme) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    padding: 24px;
    background-color: ${theme.colors.backgroundColorLight};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    .atb-dashboard__blocks-card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;
    }

    .atb-dashboard__blocks-card-icon {
        display: inline-flex;
    }
`;

const BlocksCard = ( props ) => {
    const { title, description, documentation, children, hasSwitchToggle = false, switchToggleChecked = false } = props;

    return (
        <div className="atb-dashboard__blocks-card" css={ styles }>
            <h3 className="atb-dashboard__blocks-card-title">
                { title }
                {
                    hasSwitchToggle && (
                        <ToggleControl
                            checked={ switchToggleChecked }
                            onChange={ () => {} }
                        />
                    )
                }
            </h3>
            {
                description && (
                    <p className="atb-dashboard__blocks-card-description">
                        { description }
                    </p>
                )
            }
            {
                documentation && (
                    <Tooltip text={ __( 'View Documentation', 'athemes-blocks' ) }>
                        <a href={ documentation } className="atb-dashboard__blocks-card-icon" target="_blank">
                            <CustomIcon icon="docs" />
                        </a>
                    </Tooltip>
                )
            }
            { children }
        </div>
    );
}

export { BlocksCard };