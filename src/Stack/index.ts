import { LinkedList } from "../SinglyLinkedList";

export class Stack {
    private values: LinkedList | null = null;

    constructor() {
        // initialize the values to LnkedList object
        this.values = new LinkedList();
    }

    /*
        add data as Node to end of the LinkedList
    */
    push(data: number) {
        this.values?.insertAtEnd(data);
    }

    /*
        delete last Node of LinkedList and return value
    */
    pop(): number {
        return this.values?.deleteLastNode() as number;
    }

    /*
        traverseAndReturnLastNode method of LinkedList
    */
    top(): number {
        return this.values?.traverseAndReturnLastEl() as number;
    }

    delete() {
        this.values?.deleteList();
    }

    print() {
        this.values?.traverseAndPrintNode();
    }


}