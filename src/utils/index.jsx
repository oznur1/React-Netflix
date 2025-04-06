import axios from "axios";


// Api'key gibi unique değerler ile proje geliştirirken bu değerleri gerektiği şekilde muhafaza etmezsek herkes buna erişebilir.Bunu ise env dosyasında tanımlayarak yaparız.
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`, // Backtick (`) ile düzeltilmiş
    },

});


export default api;