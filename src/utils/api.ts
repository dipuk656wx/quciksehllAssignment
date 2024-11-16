const contentApi = async (query: string) => {
    try {
      const response = await fetch(query);
      
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`${query}-failure-${response.status}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  export {contentApi };