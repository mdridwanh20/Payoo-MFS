
// log in btn here:
document.getElementById('log-in-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phone-Number').value;
        const pinNumber = document.getElementById('pin-Number').value;

        // console.log(phoneNumber, pinNumber);
        
        if(phoneNumber === '5' && pinNumber === '123'){
            window.location.href = './addMoneyPage.html'
            
        } else{
            alert('Please put your correct information')
        };
        
    });