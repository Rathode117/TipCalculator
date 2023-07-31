
const totalBill=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeople=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')


let numberOfFriends=Number(numberOfPeople.innerText)


// ** Calculates the total bill per person **
const calculateBill = () => {
 
  const bill=Number(totalBill.value)                                // gets bill from user input & convert it into a number
  
  const tipPercent=Number(tipInput.value)/100                             // gets the tip from user & convert it into a percentage (divide by 100)
  
  const tipAmount=tipPercent*bill                                         // gets the total tip amount
  
  const totalAmount=bill + tipAmount
  
  const totalPerPerson = totalAmount/ numberOfFriends              // calculating the per person total (total divided by number of people)

  perPersonTotal.innerText=`$${totalPerPerson.toFixed(2)}`       //updating the value on DOM

}


// ** Splits the bill between more people **
const increasePeople = () => {
 
  numberOfFriends += 1

  numberOfPeople.innerText=numberOfFriends                         // updating the DOM with the new number of people

  calculateBill()                                                  // calculating the bill based on the new number of people

}


// ** Splits the bill between fewer people **
const decreasePeople = () => {
  
  if (numberOfFriends<=1){                                         // guard clause  (should not decrease the number of people to 0 or negative!)
    return
  }
  numberOfFriends -= 1                                              // decrementing the amount of people
  
  numberOfPeople.innerText=numberOfFriends                            // updating the DOM with the new number of people
  
  calculateBill()                                                          // calculating the bill based on the new number of people

}