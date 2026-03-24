export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
```

Press **Command + S** to save.

Now open your `index.html` file and find this line:
```
const response = await fetch('https://api.anthropic.com/v1/messages', {
```

Replace it with:
```
const response = await fetch('/api/analyse', {
```

And delete these three lines just below it (we no longer need them as the server handles this):
```
'x-api-key': 'ANTHROPIC_API_KEY',
'anthropic-version': '2023-06-01'