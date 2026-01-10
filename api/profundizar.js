// API endpoint - v9: No body access test

export default async function handler(req, res) {
  // Don't access req.body at all
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Just return success without touching body
  return res.status(200).json({ 
    respuesta: 'API funciona sin acceder a body',
    lectura: 'Test exitoso'
  });
}
