import Prismic from "prismic-javascript";
const PRISMIC_API_URL = process.env.PRISMIC_API_URL
const getData = async (params) => {
  try {
   
    const API = await Prismic.api(PRISMIC_API_URL);
  
    const response = await API.query(
      Prismic.Predicates.at("document.type", "download"),
      {    
        orderings: '[my.download.versao desc]',        
        ...params,
       
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
const getDataTef = async (params) => {
  try {
   
    const API = await Prismic.api(PRISMIC_API_URL);
  
    const response = await API.query(
      Prismic.Predicates.at("document.type", "tef"),
      {    
        orderings: '[my.tef.versao desc]',        
        ...params,
       
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
const getDataBackup = async (params) => {
  try {
   
    const API = await Prismic.api(PRISMIC_API_URL);
  
    const response = await API.query(
      Prismic.Predicates.at("document.type", "backup"),
      {    
        orderings: '[my.backup.versao desc]',        
        ...params,
       
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
const getDataUtils = async (params) => {
  try {
   
    const API = await Prismic.api(PRISMIC_API_URL);
  
    const response = await API.query(
      Prismic.Predicates.at("document.type", "utils"),
      {    
        orderings: '[my.utils.versao desc]',        
        ...params,
       
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
export { getData,getDataTef,getDataBackup,getDataUtils};