//input
// --name
// --value

function check() {
    let sale = document.getElementsByName('sale')[0]

    let span = document.getElementById('saleRate')
    span.innerHTML = sale.value
}

function onlyNumbers() {
    let input = document.getElementsByName('userPhone')[0]
    let userPhone = input.value
    let cleaned = userPhone.replace(/[^\d]/g, '')

    if (cleaned.length > 12) {
        cleaned = cleaned.slice(0, 12);
    }

    if (cleaned.length >= 3 && cleaned.startsWith("998")) {
        let formatted = "+998"
        if (cleaned.length > 3) {
            formatted += "(" + cleaned.slice(3, 5)
        }
        if (cleaned.length > 5) {
            formatted += ")" + cleaned.slice(5, 8)
        }
        if (cleaned.length > 8) {
            formatted += "-" + cleaned.slice(8, 10)
        }
        if (cleaned.length > 10) {
            formatted += "-" + cleaned.slice(10, 12)
        }
        input.value = formatted
    } else {
        input.value = "+998"
    }
}
