export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>国内极速订阅镜像中心 (Vercel Anycast)</title>
  <style>
    body { background: #030712; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .card { background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 32px; max-width: 500px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h2 { color: #38bdf8; margin-top: 0; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; }
    .link-box { background: #1e293b; padding: 12px 16px; border-radius: 8px; margin: 12px 0; display: flex; justify-content: space-between; align-items: center; }
    .link-box a { color: #00f2fe; text-decoration: none; font-family: monospace; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>⚡ 国内极速订阅镜像中心</h2>
    <p>专为国内/江苏运营商环境优化的 Anycast 免翻高可用中转线路，支持 Clash / Mihomo / 小火箭 订阅直接秒拉。</p>
    <div class="link-box"><span>Clash 订阅</span><a href="/clash.yaml">/clash.yaml</a></div>
    <div class="link-box"><span>自适应全能</span><a href="/sub">/sub</a></div>
    <div class="link-box"><span>小火箭 Base64</span><a href="/sub.txt">/sub.txt</a></div>
  </div>
</body>
</html>
  `);
}