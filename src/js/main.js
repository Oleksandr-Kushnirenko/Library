import $ from './lib/lib';

// $(".active").click(sayHello);
// $(".active").off("click", sayHello);

/* $("button").on("click", function() {
    $(this).toggleClass("active");           // тот елемент на который мы нажали. Но тут this это html елемент
});
 */

// $(".active").toggleAtrr("id", "test");

// console.log($("button").html("Hellono"));

// console.log($(".btn-primary").getAttr("id"));

/* $("button").on("click", function() {
    $('div').eq(1).toggleClass("active");           
}); */

/* $("div").click(function(){
    console.log($(this).index());
}); */

// console.log($('div').eq(2).find(".some"));

// console.log($(".some").closest(".findme").addClass("fwfdsf"));

// console.log($('.findme').siblings());

// $('button').fadeIn(1800);

/* 
$("#first").on('click', ()=> {
    $('div').eq(1).fadeOut(800);
});
$("[data-count='second']").on('click', ()=> {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
}); */


$("#first").on('click', ()=> {
    $('div').eq(1).fadeToggle(800);
});
$("[data-count='second']").on('click', ()=> {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

/* 
// если dropdown-menu формируется динамически
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn"> 
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
    `
);
$(".dropdown-toggle").dropdown(); */

$("#trigger").click(() => $("#trigger").createModal({
    text: {
        title: "Modal title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores doloribus, nobis libero."
    },
    btns: {
        count: 3,
        settings: [
            [
               "Close",
               ["btn-danger", "mr-10"],
               true
            ],
            [
                "save changes",
                ['btn-success'],
                false,
                () => {
                    alert("Данные сохранены");
                }
            ],
            [
                "Another btn",
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello world');
                }
            ]
        ]
    }
}));


$("#trigger2").click(() => $("#trigger2").createModal({
    text: {
        title: "Modal title 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores doloribus, nobis libero."
    },
    btns: {
        count: 3,
        settings: [
            [
               "Close",
               ["btn-danger", "mr-10"],
               true
            ],
            [
                "save changes",
                ['btn-success'],
                false,
                () => {
                    alert("Данные сохранены");
                }
            ],
            [
                "Another btn",
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello world');
                }
            ]
        ]
    }
}));

 /* 
$("#example-2")
.createCarousel({
   width: 850,
   height: 450,
   slides: [
      {
         src: "https://tushlar.ru/wp-content/uploads/2021/02/tushda-mashina-1.jpg",
         alt: "white-car",
      },
      {
         src: "https://stockphoto.com/assets/landingpage/images/Depositphotos_48265849_original.jpg",
         alt: "red-car",
      },
      {
         src: "https://img2.goodfon.ru/original/1280x720/7/99/lamborghini-murcielago-5124.jpg",
         alt: "yellow-car",
      },
   ],
})
.carousel(8000);
  */

/* 
$().get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => console.log(res));
 */