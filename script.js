function calculateFootprint() {
    // Emission factors (kg CO2 per kWh)
    const coalFactor = 0.9;  // Example value
    const gasFactor = 0.4;
    const renewablesFactor = 0.05;
  
    // Baseline Scenario Inputs
    const baselineCoal = parseFloat(document.getElementById("baseline-coal").value) || 0;
    const baselineGas = parseFloat(document.getElementById("baseline-gas").value) || 0;
    const baselineRenewables = parseFloat(document.getElementById("baseline-renewables").value) || 0;
  
    // Suggested Scenario Inputs
    const suggestedCoal = parseFloat(document.getElementById("suggested-coal").value) || 0;
    const suggestedGas = parseFloat(document.getElementById("suggested-gas").value) || 0;
    const suggestedRenewables = parseFloat(document.getElementById("suggested-renewables").value) || 0;
  
    // Calculate Emissions
    const baselineEmissions = (baselineCoal * coalFactor) + (baselineGas * gasFactor) + (baselineRenewables * renewablesFactor);
    const suggestedEmissions = (suggestedCoal * coalFactor) + (suggestedGas * gasFactor) + (suggestedRenewables * renewablesFactor);
  
    // Display Results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>Results:</h2>
      <p><strong>Baseline Emissions:</strong> ${baselineEmissions.toFixed(2)} kg CO2</p>
      <p><strong>Suggested Emissions:</strong> ${suggestedEmissions.toFixed(2)} kg CO2</p>
      <p><strong>Reduction:</strong> ${(baselineEmissions - suggestedEmissions).toFixed(2)} kg CO2</p>
    `;
  }
  