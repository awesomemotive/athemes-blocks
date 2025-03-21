import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from "@wordpress/data";
import { Button } from '@wordpress/components';

import { store as persistentTabsStore } from '../../store/persistent-tabs-store';

export function TabsNavigation( props ) {
    const { value, options } = props;

    const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

    const [ tab, setTab ] = useState(currentTab);
    const { switchTabTo } = useDispatch(persistentTabsStore);

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
                            className={`atblocks-tabs-navigation__item ${ value === option.value ? 'is-active' : '' }`}
                            onClick={() => onClickHandler(option.value)}
                        >
                            { option.label }
                        </Button>
                    );
                })
            }
        </div>
    );
}