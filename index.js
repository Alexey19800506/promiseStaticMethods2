export function getItemList() {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

export function getInputArray() {
    const NodeList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(NodeList);
    console.dir(elementsArray);
    return elementsArray;
}