const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) return '';
    let html = '<dl>';
    for (const [term, description] of definitions) {
        html += `<dt>${term}</dt><dd>${description}</dd>`;
    }
    html += '</dl>';
    return html;
};
export default buildDefinitionList;