# @hodl-dance/skill

> AI Agent Skill for trading memecoins on [HODL.DANCE](https://hodl.dance) — a bonding curve launchpad on BSC.
> Use it from any AI agent, trading bot, or custom script.

---

## Installation

```bash
npm install -g @hodl-dance/skill
```

Or run without installing:

```bash
npx @hodl-dance/skill <command>
```

---

## Read Commands

No wallet required.

```bash
# List tokens — sort by volume, market cap, progress or newest
hodl-skill get-tokens --sort=volume --limit=10
hodl-skill get-tokens --sort=market_cap --verified=true

# Token details + 20 recent trades
hodl-skill get-token 0x1a2b3c...

# Trade history for a token
hodl-skill get-trades 0x1a2b3c... --type=buy --limit=20

# Simulate trade output (no transaction sent)
hodl-skill quote 0xbc1234... buy 0.1
hodl-skill quote 0xbc1234... sell 500000
```

---

## Write Commands

Require `HODL_PRIVATE_KEY` env variable.

```bash
export HODL_PRIVATE_KEY=0xyour_private_key

# Create a new token (deploys token + bonding curve)
hodl-skill create-token --name="Moon Cat" --symbol=MCAT --logo=./logo.png
hodl-skill create-token \
  --name="Moon Cat" \
  --symbol=MCAT \
  --logo=./logo.png \
  --category=meme \
  --description="The cat that dances on the moon" \
  --twitter="https://x.com/mooncat" \
  --telegram="https://t.me/mooncat" \
  --website="https://mooncat.io" \
  --initial-buy=0.1

# Buy tokens with BNB
hodl-skill buy-token 0xbc1234... 0.1

# Buy for another address
hodl-skill buy-token 0xbc1234... 0.1 --recipient=0xfriend...

# Sell tokens — ERC20 approve handled automatically
hodl-skill sell-token 0xbc1234... 1000000
```

> `0xbc1234...` = `bonding_curve_address` field from `get-tokens`, `get-token` or `create-token` output.

---

## Response Format

All commands output JSON to stdout.

```json
{ "success": true,  "data":  { ... } }
{ "success": false, "error": { "code": "MISSING_ARG", "message": "..." } }
```

Exit code `0` on success, `1` on error.

---

## Links

- **Platform:** [https://hodl.dance](https://hodl.dance)
- **API Docs:** [https://docs.hodl.dance](https://docs.hodl.dance)
- **GitHub:** [https://github.com/hodldance/agent-skill](https://github.com/hodldance/agent-skill)
- **Skill reference:** [SKILL.md](./SKILL.md)
- **Network:** BSC Mainnet (Chain ID 56)

---

## License

MIT