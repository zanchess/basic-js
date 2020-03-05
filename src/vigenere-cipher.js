class VigenereCipheringMachine {
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Error');
        }
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Error');
        }
    }
}

module.exports = VigenereCipheringMachine;
