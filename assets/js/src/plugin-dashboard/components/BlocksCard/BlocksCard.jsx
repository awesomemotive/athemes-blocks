/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { ToggleControl } from '@wordpress/components';

const styles = (theme) => css`
    display: flex;
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
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;
    }
`;

const BlocksCard = ( props ) => {
    const { title, children, hasSwitchToggle = false, switchToggleChecked = false } = props;

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
            { children }
        </div>
    );
}

export { BlocksCard };