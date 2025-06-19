import { css } from '@emotion/react';

const styles = (theme) => css`
    position: relative;
    width: 100%;

    * {
        box-sizing: border-box;
    }

    a {
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    .atb-dashboard__card {
        background-color: ${theme.colors.backgroundColorLight};
        border-radius: 10px;
        padding: 16px;
    }

    .atb-dashboard__pages-wrapper {
        max-width: ${theme.containerMaxWidth}px;
        margin: 0 auto;
    }
`;

export { styles };