import { useState } from "react";
import { InputPanelExpand } from "../../../components/editor/InputPanelExpand";
import { InputPanelGeneral } from "../../../components/editor/InputPanelGeneral";

export { ControlsGeneralInfo };

function ControlsGeneralInfo(props) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpandHandler(e) {
        console.log('ping');
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/general-information.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">General Information</h1>
                </div>
                <InputPanelExpand isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            <InputPanelGeneral isExpanded={isExpanded} {...props} />
        </div>
    );
}