let bodyWidth = $(window).width();
let bodyHeight = $(window).height();
let contWidth = $(".notes").width();
let contHeight = $(".notes").height();
let width1 = (bodyWidth/2 - contWidth/2)-170;
let width2 = (bodyWidth/2 - contWidth/2)+170;
let height = bodyHeight/2 - contHeight/2;


$(".notes").css("left",width1);
$(".notes").css("top",height);
$(".notes2").css("left",width2);
$(".notes2").css("top",height);



new Vue ({
    el: '#notes',
    data:{
        inputValue:'',
        notes:['нагодувати пса','забрати дітей','приготувати вечерю','прибрати в домі','перевірити пошту','відпочити']
    },
    methods:{
        addNote(event){
            this.inputValue=event.target.value;
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue);
                this.inputValue='';
            }
        },
        removeNote(i){
            this.notes.splice(i,1);
        }
    }
})


new Vue ({
    el: '#notes2',
    data:{
        inputValue:'',
        notes:[]
    },
    methods:{
        addNote(event){
            this.inputValue=event.target.value;
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue);
                this.inputValue='';
            }
        },
        removeNote(i){
            this.notes.splice(i,1);
        }
    }
})

