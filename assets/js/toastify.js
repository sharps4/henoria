const notyf = new Notyf({
    duration: 5000,
    position: {
        x:'right',
        y:'top',
    }, types: [
        {
            type: 'info',
            background: 'orange',
            icon: false
        }
    ],
    dismissible: true,
})

notyf.open ({
    type: 'info',
    message: 'Code promo -10% sur toute la boutique! CODE: HENORIA'
})







