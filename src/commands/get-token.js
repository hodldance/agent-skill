#!/usr/bin/env node
const { apiFetch } = require('../lib/api');
const { ok, err }  = require('../lib/output');

const address = process.argv[2];
if (!address) err('Usage: get-token <tokenAddress>', 'MISSING_ARG');

(async () => {
  const data = await apiFetch(`/tokens/${address.toLowerCase()}`);
  const { _id, ...token } = data.token;
  ok({ token, recent_trades: data.recent_trades });
})().catch(e => err(e.message));