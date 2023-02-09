class Node
{
    data;
    nextNode;
    constructor(value){
        this.data = value;
    }
}
class StackList
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
            this.count++;
        }
    }
    removeElement()
    {
        let n1 = this.rootNode;
        let i = 1;
        while(i<this.count-1)
        {
            n1 = n1.nextNode;
            i++;
        }
        n1.nextNode = n1.nextNode.nextNode;
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
let list = new StackList();
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);
list.addElement(6);
list.addElement(7);
list.removeElement();
list.printElements();
