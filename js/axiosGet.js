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


var vm = new Vue({
    el: '#app',
    data: {
        results: ''
    },
    created: function () {
        this.loadData();
    },
    methods: {
        loadData: function () {
            this.results = 'Loading ...';

            axiosGet(apiUrl).then(data => vm.results = data);

        }
    }
});
