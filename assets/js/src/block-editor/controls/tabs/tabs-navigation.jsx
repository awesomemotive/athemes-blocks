import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from "@wordpress/data";
import { Button } from '@wordpress/components';
import { icons } from '../../../utils/icons';

import { store as persistentTabsStore } from '../../store/persistent-tabs-store';

export function TabsNavigation( props ) {
    const { options } = props;

    const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

    const [ tab, setTab ] = useState(currentTab);
    const { switchTabTo, lastPanelOpened } = useDispatch(persistentTabsStore);

    const onClickHandler = (tabId) => {
        setTab(tabId);
        switchTabTo(tabId);
    }

    useEffect(() => {
        setTab(currentTab);
    }, [currentTab]);

    // Hide the 'Advanced' panel if the current tab is 'advanced'.
    useEffect(() => {
        if (tab === 'advanced') {
            const advancedPanel = document.querySelector('.block-editor-block-inspector__advanced');
            if (advancedPanel) {
                advancedPanel.style.display = 'block';
            }
        } else {
            const advancedPanel = document.querySelector('.block-editor-block-inspector__advanced');
            if (advancedPanel) {
                advancedPanel.style.display = 'none';
            }
        }
    }, [tab]);

    return(
        <div className="atblocks-tabs-navigation">
            {
                options.map( ( option, index ) => {
                    return(
                        <Button 
                            key={index}
                            className={`atblocks-tabs-navigation__item ${ tab === option.value ? 'is-active' : '' }`}
                            data-tab={option.value}
                            onClick={() => onClickHandler(option.value)}
                        >
                            { option.value === 'advanced' && icons.advanced }
                            { option.value === 'style' && icons.style }
                            { option.value === 'general' && icons.general }
                            <span className="atblocks-tabs-navigation__item-label">{ option.label }</span>
                        </Button>
                    );
                })
            }
        </div>
    );
}