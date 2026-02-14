// let grandParent = document.querySelector('.grand-parent')
// let parent = document.querySelector('.parent')
// let child = document.querySelector('.child')

// // grandParent.addEventListener('click',function(){
// //     alert("grand parent pe click hua")
// // })

// // grandParent.addEventListener('click',function(){
// //     alert("grand parent pe click hua")
// // }, true)

// // parent.addEventListener('click',function(){
// //     alert("parent pe click hua")
// // })

// // parent.addEventListener('click',function(){
// //     alert("parent Pe kam hua")
// // }, true)

// // child.addEventListener('click',function(){
// //     alert("Child Pe kam hua")
// // }, false)

// // child.addEventListener('click',function(){
// //     alert("Child Pe kam hua")
// // }, true)



// grandParent.addEventListener('click', function (event) {
//     console.log("GRAND PARENT")
//     console.log(event.target)
//     console.log(event.currentTarget)
// })

// parent.addEventListener('click', function (event) {
//     console.log("this is an another click event")
// })


// parent.addEventListener('click', function (event) {
//     console.log("PARENT")
//     console.log(event.target)
//     console.log(event.currentTarget)
//     event.stopPropagation();
// })

// parent.addEventListener('click', function (event) {
//     console.log("this is an third click event")
// })



// child.addEventListener('click', function (event) {
//     console.log('CHILD')
//     console.log(event.target)
//     console.log(event.currentTarget)
// })


// parent.addEventListener('click', function(){
//     console.log("PARENT")
//     console.log(event.target)
//     console.log(event.currentTarget)
//     console.log(this)
// })


let container = document.querySelector('.container')

// container.childNodes.forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//         console.log(elem.innerText)
//     })
// })

container.addEventListener('click',function(event){
    let targetElem = event.target;
    if(targetElem.className === 'box'){
        console.log(targetElem.textContent)
    }
})