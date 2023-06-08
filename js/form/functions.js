totalText = totalTag.innerText

const totalPrice = () => {

   if(!category || !tickets) return;


    const totalValue = ticketPrice*tickets
    const disc = (totalValue/100)*categories[category].percent
    total = totalValue-disc
   
    totalTag.style.color='black'
    totalTag.innerText=totalText +  total
}
//totalPrice()


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



const resetCategory = () => {
    total=null
    selected=null
    
    totalTag.innerText=totalText
    totalTag.style.color='grey'
}

const reset = (e) => {
   e.preventDefault()

   for(let i of inputs)
    i.value=""
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

   if(!send){
    //alert('No ha especificado la categoria')
    Swal.fire(
        'No se ha podido enviar el formulario',
        'Debe seleccionar una categoria',
        'warning'
    )
    return
   }

  console.log(send) 
  //alert('¡Formulario exitoso!')
  submitB.addEventListener('click',alertVerified)
  alertVerified()
}

const alertVerified= (e) => {
    Swal.fire(
        '¡Formulario exitoso!',
        'Ya puedes cerrar la página',
        'success'
    )
}


form.tickets.addEventListener('change',setTickets)
form.category.addEventListener('change', setCategory)
form.addEventListener('submit',submit)
resetB.addEventListener('click',reset)
//submitB.addEventListener('click',alertVerified)