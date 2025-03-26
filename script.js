document.addEventListener("DOMContentLoaded", function() {
    function calculateGramPrices() {
        let costPrice = parseFloat(document.getElementById('costPrice').value) || 0;
        let quantity = parseFloat(document.getElementById('quantity').value) || 1;
        
        let taxedPrice = Math.round(costPrice * 1.1 * 100) / 100; // Adding 10% tax
        let costPerGram = taxedPrice / quantity;
        let retailPricePerGram = costPerGram * 2.27272727272725; // 127.2727% markup
        
        let cost30g = Math.round((costPerGram * 30) * 100) / 100;
        let cost40g = Math.round((costPerGram * 40) * 100) / 100;
        let cost50g = Math.round((costPerGram * 50) * 100) / 100;
        
        let price30g = Math.round((retailPricePerGram * 30) * 100) / 100;
        let price40g = Math.round((retailPricePerGram * 40) * 100) / 100;
        let price50g = Math.round((retailPricePerGram * 50) * 100) / 100;
    
        document.getElementById('taxedPrice').value = `MYR ${taxedPrice.toFixed(2)}`;
        document.getElementById('cost30g').value = `MYR ${cost30g.toFixed(2)}`;
        document.getElementById('cost40g').value = `MYR ${cost40g.toFixed(2)}`;
        document.getElementById('cost50g').value = `MYR ${cost50g.toFixed(2)}`;
        document.getElementById('retailPrice30g').value = `MYR ${price30g.toFixed(2)}`;
        document.getElementById('retailPrice40g').value = `MYR ${price40g.toFixed(2)}`;
        document.getElementById('retailPrice50g').value = `MYR ${price50g.toFixed(2)}`;
    }
    
    document.getElementById('costPrice').addEventListener('input', calculateGramPrices);
    document.getElementById('quantity').addEventListener('input', calculateGramPrices);
});

