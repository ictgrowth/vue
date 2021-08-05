new Vue ({
    el: '#vue-app',
    // Object
    data: {
        // String
        name: '',
        job: '',
        age: '27',
        experience: '5',
        website: 'https://ictgrowth.com.au',
        websiteTag: '<a href="https://ictgrowth.com.au">Personal Website</a>',
        x: 0,
        y: 0,
        available: true,
    },
    methods: {
        greeting: function()  {
            return 'Hello,' + ' ' + this.name;
        },
        add: function(inc){
            this.age += inc;
            console.log('add')
        },
        subtract: function(dec){
            this.age -= dec;
            console.log('subtract')
        },
        updateXY: function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("You clicked me");
        }
    },
    computed: {

    }
});
