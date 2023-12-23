import { useState } from "react";
import { InputPanelEducational } from "../../../components/editor/InputPanelEducational";
import { InputPanelIcon } from "../../../components/editor/InputPanelIcon";

export { ControlsEducationalExperience };

function ControlsEducationalExperience(props) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpandHandler(e) {
        console.log('ping');
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="editor-section__container">
            <div className="input-panel__header">
                <div className="input-panel__title">
                    <img className="input-panel__title-icon" src="../../../public/educational-experience.svg" alt="General Information Icon" />
                    <h1 className="input-panel__title-h1">Educational Experience</h1>
                </div>
                <InputPanelIcon isExpanded={isExpanded} toggleExpandHandler={toggleExpandHandler} />
            </div>
            <InputPanelEducational isExpanded={isExpanded} {...props} />
        </div>
    );
}