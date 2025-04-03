import { useState, useEffect } from '@wordpress/element';
import { applyPreviewCSS, getControlCSS } from '../../utils/css';

export const withDynamicCSS = (WrappedComponent, attributesDefaults) => {
    return (props) => {
        const { attributes, clientId } = props;
        const [updateCss, setUpdateCss] = useState(false);

        // Watch for changes in the updateCss state and apply the CSS
        useEffect(() => {
            if (updateCss) {
                if (updateCss.type === 'all') {
                    updateCss.settings.forEach(setting => {
                        const cssData = {
                            css: setting.css,
                            settingId: setting.settingId,
                            innerSettingId: setting?.innerSettingId ? setting.innerSettingId : null
                        };
                        const css = getControlCSS(cssData, clientId, attributes);

                        applyPreviewCSS(css, clientId, setting.settingId, setting.innerSettingId);
                    });
                } else if (updateCss.type === 'inner-control') {
                    const cssData = {
                        css: attributesDefaults[updateCss.settingId].default?.innerSettings[updateCss.innerSettingId]?.css,
                        settingId: updateCss.settingId,
                        innerSettingId: updateCss.innerSettingId
                    };
                    const css = getControlCSS(cssData, clientId, attributes);

                    applyPreviewCSS(css, clientId, updateCss.settingId, updateCss.innerSettingId);
                } else {
                    const settingId = updateCss?.settingId;
                    const cssData = {
                        css: attributesDefaults[settingId]?.css,
                        settingId: settingId
                    };
                    const css = getControlCSS(cssData, clientId, attributes);

                    applyPreviewCSS(css, clientId, settingId);
                }
            }
        }, [updateCss]);

        // Render the CSS for the first load
        useEffect(() => {
            const allSettings = Object.keys(attributesDefaults);
            const allSettingsStyles = [];

            allSettings.forEach(settingId => {
                const isInnerSetting = attributesDefaults[settingId]?.default?.innerSettings;

                if (isInnerSetting) {
                    const allInnerSettings = Object.keys(attributesDefaults[settingId].default.innerSettings);

                    allInnerSettings.forEach(innerSettingId => {
                        allSettingsStyles.push({
                            type: 'inner-setting',
                            settingId: settingId,
                            innerSettingId: innerSettingId,
                            css: attributesDefaults[settingId].default.innerSettings[innerSettingId].css
                        });
                    });
                } else {
                    allSettingsStyles.push({
                        type: 'setting',
                        settingId: settingId,
                        css: attributesDefaults[settingId].css
                    });
                }
            });

            setUpdateCss({
                type: 'all',
                settings: allSettingsStyles
            });
        }, []);

        return <WrappedComponent {...props} setUpdateCss={setUpdateCss} />;
    };
}; 