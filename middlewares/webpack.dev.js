import convert from 'koa-convert';
import proxy from 'koa-proxy';

export default convert(proxy({
  host: 'http://127.0.0.1:8081/build',
  match: /^\/build/,
}));
