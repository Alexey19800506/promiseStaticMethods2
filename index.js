const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style ="color:${color}; margin-left:8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventLIstener('click', logGreyDiv, true);
divElem.addEventLIstener('click', logGreenDiv);

pElem.addEventLIstener('click', logGreyP, true);
pElem.addEventLIstener('click', logGreenP);

spanElem.addEventLIstener('click', logGreySpan, true);
spanElem.addEventLIstener('click', logGreenSpan);