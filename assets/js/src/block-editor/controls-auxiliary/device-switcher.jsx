import { useDispatch, useSelect } from "@wordpress/data";
import { PanelBody, ButtonGroup, Button } from "@wordpress/components";

const DeviceSwitcher = () => {
    const device = useSelect((select) => select("athemes-blocks/device-switcher").getDevice(), []);
    const { setDevice } = useDispatch("athemes-blocks/device-switcher");

    return (
        <PanelBody title="Responsive Mode" initialOpen={true}>
            <ButtonGroup>
                <Button isPrimary={device === "desktop"} onClick={() => setDevice("desktop")}>
                    Desktop
                </Button>
                <Button isPrimary={device === "tablet"} onClick={() => setDevice("tablet")}>
                    Tablet
                </Button>
                <Button isPrimary={device === "mobile"} onClick={() => setDevice("mobile")}>
                    Mobile
                </Button>
            </ButtonGroup>
        </PanelBody>
    );
};