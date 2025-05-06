const parseType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;
    const isType = (type) => ['work', 'home', 'personal'].includes(type);
  
    if (isType(type)) return type;
  };
  
  const parseisFavourite = (isFavourite) => {
    if (isFavourite === 'true'||isFavourite === '1') return true;
    if (isFavourite === 'false'||isFavourite === '0') return false;
    return undefined;
  };
  
  export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;
  
    const parsedType = parseType(contactType);
    const parsedisFavourite = parseisFavourite(isFavourite);
  
    return {
    type: parsedType,
    isFavourite: parsedisFavourite,
};
};