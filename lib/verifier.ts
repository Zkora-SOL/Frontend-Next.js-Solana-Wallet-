export async function requestAttestation(payload: {
proof: unknown;
publicInputs: unknown;
message: Uint8Array;
}) {
const res = await fetch('http://localhost:3000/attest', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload),
});


if (!res.ok) throw new Error('Attestation failed');
return res.json();
}
