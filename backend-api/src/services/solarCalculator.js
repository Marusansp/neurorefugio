/**
 * Simplified MVP solar simulation logic.
 * Can be replaced by geospatial irradiance model in future iterations.
 */
export function simulateSolarSystem({ city, energyBill, roofArea }) {
  const monthlyKwhConsumption = energyBill / 0.85; // avg tariff (BRL/kWh)
  const kwhPerKwpPerMonth = 125; // generic Brazilian average
  const recommendedSizeKwp = Math.min(monthlyKwhConsumption / kwhPerKwpPerMonth, roofArea * 0.2);
  const roundedSize = Number(recommendedSizeKwp.toFixed(2));

  const estimatedCost = Number((roundedSize * 4200).toFixed(2));
  const annualGeneration = Number((roundedSize * 1500).toFixed(2));
  const monthlySavings = Number((Math.min(monthlyKwhConsumption, roundedSize * kwhPerKwpPerMonth) * 0.85).toFixed(2));
  const paybackYears = Number((estimatedCost / (monthlySavings * 12 || 1)).toFixed(1));

  return {
    city,
    input: { energyBill, roofArea },
    results: {
      systemSizeKwp: roundedSize,
      estimatedCost,
      annualGeneration,
      monthlySavings,
      paybackYears
    }
  };
}
