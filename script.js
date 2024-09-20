function generateRandomString(length) {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function generateCards() {
    const bin = document.getElementById('bin').value;
    const quantity = document.getElementById('quantity').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    let cards = [];
    for (let i = 0; i < quantity; i++) {
        const cardNumber = bin + generateRandomString(10);
        const expirationDate = '12/' + (new Date().getFullYear() + 5).toString().slice(-2);
        const cvv = generateRandomString(3);
        const cardInfo = `${cardNumber}\n${expirationDate}\n${cvv}`;
        cards.push(cardInfo);
        results.innerHTML += `<div class="card">${cardInfo.replace(/\n/g, '<br>')}</div>`;
    }

    document.getElementById('copyButton').style.display = 'inline';
    document.getElementById('downloadButton').style.display = 'inline';

    window.generatedCards = cards.join('\n\n');
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.generatedCards).then(() => {
        alert('Cartões copiados para a área de transferência!');
    });
}

function downloadCards() {
    const blob = new Blob([window.generatedCards], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cartoes.txt';
    a.click();
    URL.revokeObjectURL(url);
}
