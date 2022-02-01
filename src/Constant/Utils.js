export const checkNull =(v)=>{
    return [undefined, '', null,' '].includes(v);
}

export const isNull = (v, sV='---') => {
    return checkNull(v) ? sV : v;
}

export const ifNotNull=(v,sV)=>{
 return    checkNull(v) ? null : sV;
}
  

