import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from "@wordpress/data";
import { store as deviceSwitcherStore } from '../../store/device-switcher-store';
import { BaseControl, Button } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

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