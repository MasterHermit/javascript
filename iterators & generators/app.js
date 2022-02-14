// ITERATOR

function nameIterator(namesArr){
    let index=0;
    return {
        next: function(){
            return index<namesArr.length ?
             {value:namesArr[index++],done:false} :
             {done:true};
        }
    }
}
const namesArray=['amit','madharchod','noob'];

const names=nameIterator(namesArray);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// GENERATORS

function* genFunc(){
    yield 'subha';
    yield 'subhranshu';
    yield 'bhalu';
}

const genName=genFunc();

console.log(genName.next().value);
console.log(genName.next().value);
console.log(genName.next().value);
console.log(genName.next().value);
//ID GENERATING 

function* genId(){
    let index=0;
    while(true){
        yield index++;
    }
}

const id=genId();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

//OUTPUT

// 0
// 1
// 2
// 3
// 4
// 5

//In this Way We can generate as many ids as we want