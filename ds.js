let arr1=[2,3,4,5];
let arr2=[6,7,8,9];
//concat
console.log("1.Concat",arr1.concat(arr2));

//copywithin
console.log("2.CopyWithin",arr1.copyWithin(1,0,2));

//entries
let trr1 = arr1.entries();
arr1.forEach(value => {
    console.log("3.Entries",trr1.next().value);
});

//every
console.log("4.every",arr1.every(check));
function check(x)
{
    return x%2==0;
}

//fill
console.log(arr1);
let trr2 = arr1.fill(0,2);
console.log("5.fill",trr2);

//filter
let arr3 = [5,7,8,9];
console.log("6.filter",arr3.filter(x=> x<=5));

//find
let arr4 = ["gopi","vasu","hari","sabari"];
console.log("7.find",arr4.find(x => x.length <5));

//findindex
console.log("8.Find Index",arr4.findIndex(x => x.length <5));

//Foreach
let i=0;
console.log("9.forEach");
arr4.forEach(function(x)
{
    console.log(i," ",x);
    i++;
});

//from
let x = "gopi";
console.log("10.from",Array.from(x));

//includes
console.log("11.includes:",arr4.includes('gopi'));

//indexOf
console.log("12.indexOf",arr4.indexOf('sabari'));

//isArray
console.log("13.isArray",Array.isArray(arr4));

//join 
console.log("14.join",arr4.join());

//keys
let arr5 = [5,6,3,4,6,2,7,9];
let trr3 = arr5.keys();
console.log("15.keys");
for(let x of trr3)
{
    console.log(x);
}

//lastIndexOf
console.log("16.lastIndexOf",arr5.lastIndexOf(6));

//length
console.log("17.length",arr5.length);

//map
let num = arr5.map(x=> x+4);
console.log("18.map",num);

//pop
console.log("19.pop",arr5.pop());

//push
let s = arr5.push(5);
console.log("20.push",arr5);

//reverse
let g=["gopii","df","vb","fdfg"];
let rev = g.reverse();
console.log("21.reverse",rev);

//shift
let d=g.shift();
console.log("22.shift",g);

//unshift
let f = g.unshift("dupi");
console.log("23.unshift",g);

//splice
let trr6 = g.splice(0,1,"mohan");
console.log("24.splice",g);

//sort
let arr7 = [2,7,3,90,12,5];
arr7.sort(function(a,b)
{
    return a - b;
});
console.log("25.sort",arr7);

//reduce
let arr8 = [20,10,5];
console.log("26.reduce",arr8.reduce(gopi));
console.log("27reduceRight",arr8.reduceRight(gopi));
function gopi(a,b)
{
    return a-b;
}
