new Vue ({
    el: '#vue-app',
    // Object
    data: {
        // String
        name: 'Fadi',
        job: 'Web developer',
        age: '27',
        website: 'https://ictgrowth.com.au',
        websiteTag: '<a href="https://ictgrowth.com.au">Personal Website</a>'
    },
    methods: {
        greeting: function(time)  {
            return 'Good' + time + ' ' + this.name;
        }
    }
})
