class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
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

        addElements(value, index){
            let n1;
            let n2;
            n1 = new Node(value);
            if(index == 0)
            {
                n1.nextNode = this.rootNode;
                this.rootNode = n1;
                
            }
            else{
                n2 = this.rootNode;
                if(index == null)
                {
                    console.log("invalid");
                }
                else{
                    let i =1;
                    while(i<index)
                    {
                        n2 = n2.nextNode;
                        i++;
                    }
                    n1.nextNode = n2.nextNode;
                    n2.nextNode = n1;
                }

            }
        }

        removeElement(index){
            let n1 = this.rootNode;
           if(index == 0)
           {
                this.rootNode = n1.nextNode;
               
           }
           else{
            let i =1;
                while(i<index)
                {
                    n1 = n1.nextNode;
                    i++;
                }
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


let list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(5);
list.addElement(7);
list.addElement(8);
list.addElement(3);
list.addElements(10,2);
list.removeElement(2);
list.printElements();
