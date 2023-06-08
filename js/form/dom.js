
const form = document.forms.ticketform
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0] 

const totalTag = document.getElementById('totaltopay')
const resetB = document.getElementById('delete')
const submitB = document.getElementById('resume')


//console.log(form)
//console.log(inputs)
//console.log(select)
//console.log(totalTag)
//console.log(resetB)
//console.log(submitB)

totalTag.style.color='grey'
