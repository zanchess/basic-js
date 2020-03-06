class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
    encrypt (input, key) {
        if (input === undefined || key === undefined) {
            throw Error('At least one parameter has not been given!');
        }

        let output = '';
        input = input.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, k = 0; i < input.length; ++i) {
            let inputCharCodeAtI = input.charCodeAt(i);
            if (inputCharCodeAtI >= 65 && inputCharCodeAtI <= 90) {
                output += String.fromCharCode((inputCharCodeAtI + key.charCodeAt(k % key.length)) % 26 + 65);
                ++k;
            } else {
                output += input[i];
            }
        }
        
        if (!this.direct) {
            return output.split('').reverse().join('');
        }
        
        return output;
    }

    decrypt(input, key) {
        if (input === undefined || key === undefined) {
            throw Error('At least one parameter has not been given!');
        }

        let output = '';
        input = input.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, k = 0; i < input.length; ++i) {
            let inputCharCodeAtI = input.charCodeAt(i);
            if (inputCharCodeAtI >= 65 && inputCharCodeAtI <= 90) {
                output += String.fromCharCode((inputCharCodeAtI + 26 - key.charCodeAt(k % key.length)) % 26 + 65);
                ++k;
            } else {
                output += input[i];
            }
        }
        
        if (!this.direct) {
            return output.split('').reverse().join('');
        
        }
        return output;
    }
}

module.exports = VigenereCipheringMachine;
