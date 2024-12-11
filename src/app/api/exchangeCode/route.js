import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({ error: 'Code is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const clientId = '9052833171443795';
  const clientSecret = 'e8a88313f4abcb7c41ce9aa020e280af';
  
  const redirectUri = 'https://pq6wqffh-3000.euw.devtunnels.ms';

  try {
        const response = await axios.post('https://api.instagram.com/oauth/access_token', 
            new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
            code: code,
            }),
            {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
      );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error exchanging code for token:', error.response ? error.response.data : error.message);
    return new Response(JSON.stringify({ error: error.response ? error.response.data : error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 