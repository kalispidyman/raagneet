export default async function handler(req, res) {
  // Support CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Extract subpath from rewrite path query or fallback to original req.url
  let subpath = '';
  if (req.query.path) {
    subpath = '/' + req.query.path;
  } else {
    const url = new URL(req.url, 'https://' + (req.headers.host || 'localhost'));
    subpath = url.pathname.replace(/^\/api\/telegram/, '');
  }

  // Handle raw query params
  const urlObj = new URL(req.url, 'https://' + (req.headers.host || 'localhost'));
  const searchParams = urlObj.searchParams;
  searchParams.delete('path'); // remove the proxy route helper param if present
  const searchStr = searchParams.toString();
  
  const targetUrl = 'https://api.telegram.org' + subpath + (searchStr ? '?' + searchStr : '');

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json',
      }
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      fetchOptions.body = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
    }

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      const text = await response.text();
      res.status(response.status).send(text);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}