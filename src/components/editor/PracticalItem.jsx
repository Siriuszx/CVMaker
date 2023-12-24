export { PracticalItem };

function PracticalItem({
    companyName,
    id,
    deletePracticalHandler,
}) {
    return (
        <div className="editor-container__item">
            <h3 className="">
                {companyName}
            </h3>
            <img className="editor-container__button control-icon" onClick={() => { deletePracticalHandler(id) }} src="/delete.svg" alt="Delete Icon" />
        </div>
    );
}