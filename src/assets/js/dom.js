export function addClassName(el,className) {
    if(hasClassNmae(el,className)){
        return
    }
    let newClass=el.className.split(' ');
    newClass.push(className);
    el.className=newClass.join(' ');
};

export function hasClassNmae(el,className) {
    let reg=new RegExp('(^|\\s)'+className+'(\\s|$)');
    return reg.test(el.className);
}