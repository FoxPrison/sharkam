document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', () => {
        // Vis modal for betalingsvalg
        document.getElementById('payment-modal').style.display = 'flex';
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    // Luk modalen
    document.getElementById('payment-modal').style.display = 'none';
});

document.querySelector('.payment-option').addEventListener('click', (event) => {
    const method = event.target.dataset.method;
    
    // Bekræftelse af valgt betalingsmetode
    if (method === 'mobilpay') {
        alert('Du har valgt at betale med MobilPay!');
    }

    // Luk modalen
    document.getElementById('payment-modal').style.display = 'none';
});

console.log("Interaktivt design aktiveret!");
