const cards=document.getElementsByClassName('card-body')
const cardsContainer=document.querySelectorAll('.border-2')

//console.log(cards)
//console.log(cardsContainer)

for(let card of cards){
   card.classList.add('.card--body')
}

let selected=null
const colors=['bg-info','bg-success','bg-warning']
const transparent='bg-transparent'

const changeBg=(container, index, revert)=> {
    const i=Number(index)

    revert 
    ? container.classList.replace(colors[i], transparent)
    :container.classList.replace(transparent, colors[i])
}

//EVENTS
const cardEnter=(e)=>{
 const {index}=e.target.dataset
 //console.log(index)
 changeBg(e.target,index,false)
}

const cardLeave=(e)=>{
    const {index}=e.target.dataset
    //console.log(index)
    changeBg(e.target,index,true)

}

const onClick=(e)=>{
    selected=e.currentTarget.dataset.index
    //console.log(selected)
    eventsAssignamentAll()
}

const eventCleaner=(container)=>{
    container.removeEventListener('mouseenter',cardEnter)
    container.removeEventListener('mouseleave',cardLeave)
    container.removeEventListener('click', onClick)
}


const eventAssignament=(container)=>{
    container.addEventListener('mouseenter',cardEnter)
    container.addEventListener('mouseleave',cardLeave)
    container.addEventListener('click', onClick)
}


const eventsAssignamentAll=()=>{
    for(let container of cardsContainer){

        eventCleaner(container)

        const {index}=container.dataset
    
        if(index!==selected){
        eventAssignament(container)
        changeBg(container,index,true)
    }
    }
}

eventsAssignamentAll()


// for(let container of cardsContainer){
//     container.addEventListener('mouseenter',cardEnter)
//     container.addEventListener('mouseleave',cardLeave)
//     container.addEventListener('click', onClick)
// }