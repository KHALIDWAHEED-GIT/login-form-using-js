var email="smit123@gmail.com"
var pass="smit123"

function login(){

    var correctemail=document.getElementById("email").value
    var correctpass=document.getElementById("pass").value

if(email==correctemail&&pass==correctpass){
    window.location.href = "index.html";
}

else{
    alert("CREDIANSALS INCORRECT")
}

}



    var data=[
        {
            img: "assets/image 7.png",
            desc: "SHIRT NO 1",
            price:"$120"

        },
        {
            img: "assets/image 9.png",
            desc: "SHIRT NO 2",
            price:"$150"

        },

        {
            img: "assets/image 10.png",
            desc: "SHIRT NO 3",
            price:"$200"

        }
    ]

    var container= document.getElementById("container")

    for (var i = 0; i < data.length; i++) {
        var item = data[i];

    var carts=document.createElement("div")
    carts.classList.add("box")
    var img=document.createElement("img")
    img.src= item.img
    img.classList.add("img")
    var desc=document.createElement("h1")
    desc.innerText=item.desc
        desc.classList.add("desc")
    var price=document.createElement("h1")
    price.innerText=item.price
    price.classList.add("price")

    

    


    carts.appendChild(img)
    carts.appendChild(desc)
    carts.appendChild(price)

    container.appendChild(carts)

    }

