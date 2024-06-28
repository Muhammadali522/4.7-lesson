// let a = [1, 2, 3, 4, 5, -6, -8, 1000, 245, 50]

// let b = a.map(function (item, index, /* array*/ ) {
//     return item * 5
// })

// console.log(b);

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
let wraper = document.querySelector("wraper")

let result = data.map(iteam => {
    let h1 = document.createElement("h1");
    h1.style.textAlign = "center"
    h1.style.color = "white"
    if(iteam > 50){
        h1.style.backgroundColor = "green"
        h1.textContent = iteam
    }else{
        h1.style.backgroundColor = "red"
        h1.textContent = iteam
    }
    document.body.append(h1)
})