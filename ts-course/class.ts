// one constructor maximum per class
/**
 * ReferenceItem
 */
class ReferenceItem {
    numberOfPages: number;
    get editor():string{
        return this.name;
    }
    
    set editor(name:string){
        this.name = name;
    }
    constructor(public name: string){
        this.editor = name;
    }
    static description:string;
}

let r = new ReferenceItem('test');
console.log(r.editor);
r.editor = 'test';
ReferenceItem.description;

class ReferenceItemChild extends ReferenceItem{
    constructor(){
        super('lll');
    }
}
let r2 = new ReferenceItemChild();


// class expression
let Newspaper = class extends ReferenceItem{
    
}
let np = new Newspaper('test');

class C2 extends class { title: string }{ main:string}
let c2 = new C2();
c2.title = 'title';
c2.main = 'main';