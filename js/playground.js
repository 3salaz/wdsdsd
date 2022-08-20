const playground = document.getElementById('playground');
let string = "First Element";




const startScript = () => {

    let photoGallery = [{
        name : "img1",
        imgUrl : "https://images.pexels.com/photos/10568846/pexels-photo-10568846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },{
        name : "img2",
        imgUrl: "https://images.pexels.com/photos/13229014/pexels-photo-13229014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }]

    let newDiv =  document.createElement("div")
    let newImg = document.createElement("img");
    const newContent = document.createTextNode("Hi there and greetings!");

    newDiv.append(newContent)
    newImg.src = photoGallery[0].imgUrl;
    playground.appendChild(newImg);
    playground.appendChild(newDiv);
};

startScript();

console.log(playground);

// Create a loop that goes through your photo gallery and adds a image for each element in your array.