
// cash Out form ----------------
document.getElementById('cash-out-show-btn')
    .addEventListener('click', function(){
        
        document.getElementById('cash-Out-Form').classList.remove('hidden');

        document.getElementById('add-Money-Form').classList.add('hidden')
    })


// Add money form here ----------------------
document.getElementById('add-money-show-btn')
    .addEventListener('click', function(){

       document.getElementById('add-Money-Form').classList.remove('hidden');
       document.getElementById('cash-Out-Form').classList.add('hidden');
        
    })


document.getElementById('cash-out-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const inputCashAddAmount = document.getElementById('input-cash-amount').value;
    const addCashPinNumber = document.getElementById('cash-pin-Number').value;
    
    if(addCashPinNumber === '123'){
        const AvailableBalance = document.getElementById('Available-balance').innerHTML;

        const newCashInputAddAmount = parseFloat(inputCashAddAmount);
        const NewCashAvailableBalance = parseFloat(AvailableBalance);

        const totalCashAmount = newCashInputAddAmount - NewCashAvailableBalance;
        document.getElementById('Available-balance').innerText = totalCashAmount;

        } else{
            alert('this is not correct information')
        }
    });
    
