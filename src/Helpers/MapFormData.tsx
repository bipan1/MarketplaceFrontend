export const objectToFormData = (data: Record<string, any>): FormData => {
    const formData = new FormData();
  
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (key === "images") {
        value.forEach((item : File) => formData.append('images', item))
      } else {
        formData.append(key, value);
      }
    });
  
    return formData;
  };