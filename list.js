


import node from "./node"

function linkedList(){
  let listHead = null;
  let listLength = 0;

  const append = (value) => {
    const newNode = node(value);
    listLength++;
    if (listHead === null){
      return (listHead = newNode);
    }
    let pointer = listHead;
    while(pointer.nextNode !== null){
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = node(value);
    listLength++;
    if (listHead === null) {
      return (listHead = newNode);
    }
    newNode.nextNode = listHead;
    listHead = newNode;
  };

  const at = (index) => {
    if (!listHead){
      return null;
    }
    let pointer = listHead;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const getHead = () => {
    if (!listHead){
      return null;
    }
    return listHead.value;
  };

  const findTail = () => {
    if (!listHead){
      return null;
    }
    let pointer = listHead;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const getLength = () => {
    if (!listHead) return null;
    return listLength;
  };

  const pop = () => {
    if (!listHead){
      return null;
    }
    if (listHead.nextNode === null) {
      listHead = null;
    }
    at(size() - 2).nextNode = null;
    listLength--;
  };

  const contains = (value) => {
    if (!listHead) return null;
    let pointer = listHead;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }

    return pointer.value === value ? true : false;
  };

  const findOne = (value) => {
    if (!listHead){
      return null
    }
    let index = 0;
    let pointer = listHead;
    while(pointer.nextNode !== null) {
      if(pointer.value === value){
        return index;
      }

      pointer = pointer.nextNode;
      index++;
    }
    return pointer.value === value ? index : null;
  };

  const toString = () => {
    if (!listHead){
      return null
    }
    let pointer = listHead;
    let result = "";
    while(pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
    return result;
  };

  const insertAt = (value, index) => {
    if (!listHead) return null;
    const newNode = node(value);
    listLength++;
    let pointer = listHead;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  const removeAt = (index) => {
    if (!listHead) return null;
    if (index > listLength || index < 0) return;
    if (index === 0) listHead = listHead.nextNode;
    else {
      const prePointer = at(index - 1);
      prePointer.nextNode = prePointer.nextNode.nextNode;
    }
    listLength--;
  };

  return {
    append,
    prepend,
    at,
    contains,
    findOne,
    pop,
    insertAt,
    removeAt,
    getLength,
    getHead,
    findTail,
    toString,
  };
};

export default linkedList;

let newList = linkedList()
newList.append(3);
newList.append(2);
newList.toString();
newList.getLength()
newList.prepend(4);
newList.toString();
newList.prepend(5);
newList.toString();
newList.append(1);
newList.toString();
newList.getLength();
newList.getHead();
newList.findTail();
newList.at(2);
newList.pop();
newList.getLength();
newList.contains(3);
newList.toString();
newList.findOne(4);
newList.toString();
newList.removeAt(3);
newList.toString();


