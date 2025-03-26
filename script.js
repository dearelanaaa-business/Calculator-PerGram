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
    
        let profit30g = Math.round((price30g - cost30g) * 100) / 100;
        let profit40g = Math.round((price40g - cost40g) * 100) / 100;
        let profit50g = Math.round((price50g - cost50g) * 100) / 100;
        
        document.getElementById('taxedPrice').value = `MYR ${taxedPrice.toFixed(2)}`;
        document.getElementById('cost30g').value = `MYR ${cost30g.toFixed(2)}`;
        document.getElementById('cost40g').value = `MYR ${cost40g.toFixed(2)}`;
        document.getElementById('cost50g').value = `MYR ${cost50g.toFixed(2)}`;
        document.getElementById('retailPrice30g').value = `MYR ${price30g.toFixed(2)}`;
        document.getElementById('retailPrice40g').value = `MYR ${price40g.toFixed(2)}`;
        document.getElementById('retailPrice50g').value = `MYR ${price50g.toFixed(2)}`;
        document.getElementById('profit30g').value = `MYR ${profit30g.toFixed(2)}`;
        document.getElementById('profit40g').value = `MYR ${profit40g.toFixed(2)}`;
        document.getElementById('profit50g').value = `MYR ${profit50g.toFixed(2)}`;
    }
    
    document.getElementById('costPrice').addEventListener('input', calculateGramPrices);
    document.getElementById('quantity').addEventListener('input', calculateGramPrices);
    
    // Adjust spacing and font to match Notion
    document.querySelectorAll('.input-group').forEach(group => {
        group.style.marginBottom = "20px"; // Increase spacing
    });
    document.body.style.fontFamily = "Inter, sans-serif"; // Match Notion font
    document.body.style.lineHeight = "1.6"; // Improve readability

    // Remove up and down arrows for number inputs
    document.querySelectorAll('input[type=number]').forEach(input => {
        input.style.webkitAppearance = "none";
        input.style.mozAppearance = "textfield";
    });
    
    // Set greyish placeholder for output fields
    document.querySelectorAll('input[readonly]').forEach(output => {
        output.style.backgroundColor = "#f0f0f0";
        output.style.color = "#333";
    });
});
