
document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const inputAddAmount = document.getElementById('input-add-amount').value;
    const addPinNumber = document.getElementById('add-pin-Number').value;
    
    if(addPinNumber === '123'){
        
        const AvailableBalance = document.getElementById('Available-balance').innerHTML;
        const newInputAddAmount = parseFloat(inputAddAmount);
        const NewAvailableBalance = parseFloat(AvailableBalance);
        const totalAmount = newInputAddAmount + NewAvailableBalance;
        document.getElementById('Available-balance').innerText = totalAmount;

        } else{
            alert('this is not correct information')
        }
    });
    
