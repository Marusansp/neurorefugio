const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function runSimulation(payload: { city: string; energyBill: number; roofArea: number }) {
  const response = await fetch(`${API_URL}/api/simulator`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to run simulation');
  }

  return response.json();
}
