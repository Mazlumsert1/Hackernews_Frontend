//import axios from 'axios';

function axiosGet(url) {
    return axios.get(url)
        .then(function (response) {
            console.log(response);
            return response.data.data;
        })
        .catch(function (error) {
            return 'An error occured..' + error;
        })
}
