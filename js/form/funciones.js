totalText = totalTag.innerText

const totalPrice = () => {

   if(!category || !tickets) return;


    const totalValue = ticketPrice*tickets
    const disc = (totalValue/100)*categories[category].percent
    total = totalValue-disc
   
    
    totalTag.innerText=totalText +  total
}
//totalPrice()

const resetCategory = () => {
    total=null
    selected=null
    totalTag.innerText=totalText
}

const setCategory = (e) => {
    const option = e.target.value
    console.log(option)

    if(option=='none'){
        resetCategory()
        return
    }
    category=option

    totalPrice()
}

const setTickets = (e) => {
    const {value}=e.target

    if(value<0){
        e.target.value=0
        total=null
        return
    }

    tickets=value
    totalPrice()
}

const reset = (e) => {
   e.preventDefault()

   for(let i of inputs)
    inputs.value=' '
   select.value='none'

   resetCategory()

}

const submit = (e) => {
   e.preventDefault()
  const{}=form
  const{name,surname,email,tickets,category}=form
  
  const ver = {
    name: name.value !=='',
    surname: surname.value !=='',
    email: email.value.includes('@'),
    tickets: tickets.value>0,
    category: category.value !=='none'
   }

   const values=Object.values(ver)
   const send=values.every(value=>value)
  console.log(send) 
}



form.category.addEventListener('change', setCategory)
form.tickets.addEventListener('change',setTickets)
form.addEventListener('submit',submit)
resetB.addEventListener('click',reset)