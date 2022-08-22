import axios from "axios";

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  }
});

// export const getImages = async (term: string) => {
//   try {
//     const { data, status } = await unsplash.get('search/photos', {
//       params: { query: term }
//     })
//     return { data, status }
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       return error
//     } else {
//       return 'Uncaught error:' + error;
//     }
//   }
// }