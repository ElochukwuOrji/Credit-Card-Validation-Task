function validateCreditCard(cardNumber) {
    // Remove spaces and hyphens
    cardNumber = cardNumber.replace(/[\s-]/g, '');

    // Simple regex patterns for Visa and MasterCard
    const isVisa = /^4\d{12}(\d{3})?$/; // Visa: starts with 4, 13 or 16 digits
    const isMasterCard = /^5[1-5]\d{14}$/; // MasterCard: starts with 51-55, 16 digits

    if (isVisa.test(cardNumber)) {
        return 'Valid Visa card number.';
    } else if (isMasterCard.test(cardNumber)) {
        return 'Valid MasterCard card number.';
    } else {
        return 'Invalid card number.';
    }
}

// Example usage
console.log(validateCreditCard('4111 1111 1111 1111')); // Valid Visa card number.
console.log(validateCreditCard('5111 1111 1111 1111')); // Valid MasterCard card number.
console.log(validateCreditCard('1234 5678 9012 3456')); // Invalid card number.