function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Both operations
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // No transformation
        return str;
    }
}

// my Testng  function with the given examples
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"