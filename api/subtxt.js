export default async function handler(req, res) {
  try {
    const upstream = await fetch('https://nanzhao.win/sub.txt', {
      headers: { 'User-Agent': req.headers['user-agent'] || 'Shadowrocket' }
    });
    const text = await upstream.text();
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).send('Upstream error: ' + err.message);
  }
}