#!/usr/bin/env node
const { apiFetch } = require('../lib/api');
const { ok, err }  = require('../lib/output');

const args = process.argv.slice(2);
const address = args[0];
if (!address || address.startsWith('--')) {
  err('Usage: get-trades <tokenAddress> [--type=buy|sell|all] [--limit=50] [--offset=0]', 'MISSING_ARG');
}
const flags = Object.fromEntries(
  args.slice(1).filter(a => a.startsWith('--'))
    .map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? 'true']; })
);

(async () => {
  const data = await apiFetch(`/trades/${address.toLowerCase()}`, {
    type:   flags.type   || 'all',
    limit:  flags.limit  || '50',
    offset: flags.offset || '0',
  });
  ok(data);
})().catch(e => err(e.message));
