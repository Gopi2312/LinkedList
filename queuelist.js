class Node
{
    data;
    nextNode;
    constructor(value){
        this.data = value;
    }
}
class QueueList
{
    rootNode = null;
    count = 0;
    addElement(value){
        if(this.rootNode == null){
            this.rootNode= new Node(value)
            this.count++;
        }else{
            let temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }
    removeElement()
    {
        let n1 = this.rootNode;
        this.rootNode = n1.nextNode;
    }
    printElements(){
        let temp = this.rootNode;
        if(temp == null){
            console.log("Is empty!")
        }else{
        while(temp != null ){
            console.log(temp.data)
            temp = temp.nextNode;
        }
    }
    }
}
let list = new QueueList();
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);
list.addElement(6);
list.addElement(7);
list.removeElement();
list.removeElement();
list.printElements();
