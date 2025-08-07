/** @jsx jsx */;
import { css, jsx, useTheme } from '@emotion/react';

const styles = (theme) => css`
    position: relative;
    max-width: ${ theme.containerMaxWidth }px;
    margin: 0 auto;
    padding: 60px 60px 60px 0;
    z-index: 0;

    .atb-dashboard__hero-title {
        font-size: ${ theme.fontSize.heroTitle };
        font-weight: 600;
        line-height: ${ theme.lineHeight.heroTitle };
        color: ${ theme.colors.textColorDark };
        margin: 0 0 4px;
    }

    .atb-dashboard__hero-description {
        font-size: ${ theme.fontSize.default };
        line-height: ${ theme.lineHeight.default };
        color: ${ theme.colors.textColorGray };
        margin: 0 0 20px;
    }

    .atb-dashboard__hero-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 24px;
        background-color: ${ theme.colors.primary };
        color: ${ theme.colors.textColorLight };
        border-radius: 2px;
        text-decoration: none;
        font-size: ${ theme.fontSize.small };
        font-weight: 500;
        line-height: ${ theme.lineHeight.small };
        transition: background-color 0.3s ease;

        &:hover {
            background-color: ${ theme.colors.primaryHover };
        }
    }

    .atb-dashboard__hero-image {
        position: absolute;
        top: 16px;
        right: 0px;
        width: 370px;
        height: 100%;
        object-fit: contain;
        object-position: center bottom;
    }
`;

const Hero = (props) => {
    const { title, description, buttonLabel, buttonUrl, image } = props;
    const theme = useTheme();
    
    return (
        <div className="atb-dashboard__hero" css={ styles(theme) }>
            <h1 className="atb-dashboard__hero-title">{ title }</h1>
            <p className="atb-dashboard__hero-description">{ description }</p>
            <a href={ buttonUrl } className="atb-dashboard__hero-button">{ buttonLabel }</a>

            <img src={ image } width={40} height={40} alt={ title } className="atb-dashboard__hero-image" />
        </div>
    );
}

export { Hero };