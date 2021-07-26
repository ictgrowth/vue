new Vue ({
    el: '#vue-app',
    // Object
    data: {
        // String
        name: 'Fadi',
        job: 'Web developer',
    },
    methods: {
        greeting: function(time)  {
            return 'Good' + time + ' ' + this.name;
        }
    }
})
