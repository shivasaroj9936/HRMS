export const trim = (data: any) => {
  try {
    
    for (const item in data) {
      if (typeof data[item] == "string") {
        data[item] = data[item].trim();
      }
    }
  } catch (error){
    return data;
  }
  return data;
};
