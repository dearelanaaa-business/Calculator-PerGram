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
    
    document.body.style.fontFamily = "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"; // Match Notion font
    document.body.style.lineHeight = "1.6"; // Improve readability
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.backgroundColor = "#ffffff"; // White background
    
    // Remove up and down arrows for number inputs
    document.querySelectorAll('input[type=number]').forEach(input => {
        input.style.webkitAppearance = "none";
        input.style.mozAppearance = "textfield";
    });
    
    // Set greyish placeholder for output fields
    document.querySelectorAll('input[readonly]').forEach(output => {
        output.style.backgroundColor = "#f0f0f0";
        output.style.color = "#333";
        output.style.fontWeight = "bold";
    });
});
