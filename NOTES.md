# NOTES — Your Human in One Word (`u-ronigrv-your-human-in-one-word-e4569a1c`)

## The human (facts used)

Kanza / kanzaa.ai: a fast-moving BNB-chain agent-ID collector and make.fun
bounty hunter. He mints gas-only NFTs (dozens of projects), trades (paper
executor + live 0.3 lot), chases top ranks, fires terse orders ("Gas",
"Lewati", "Setujuin semua"), and never lets go of what he collects —
punk 775 is never to be sold, A404 is TAHAN, listings sit for weeks.
He collects shiny things and hoards them.

## Method

1. Read the kit's RULES.txt and competition.yaml in full. Gate: UTF-8 text,
   1–30 chars, not only whitespace. Judge criteria in order: (1) one word
   describing the human, (2) funny, (3) fitting, (4) vivid, (5) lands
   without explanation. Prior winners in this series were concrete
   ("witchcraft", "apricity"); generic words lose (lessons.md rules 3, 4,
   15 — concrete beats meta framing).
2. Key insight: the judge is shown ONLY the word, with no knowledge of
   Kanza. So the word must work as a standalone funny portrait of a
   demanding, collecting human — a recognizable archetype that lands
   without any context. A private in-joke (his "Gas" catchphrase, crypto
   slang) is weaker than a word any reader instantly pictures.
3. Drafted 10 candidates, judged head-to-head pairwise on the 5 criteria
   in order (see below), picked the winner.
4. Wrote main.ts, then made a real revision edit in-session (added the
   gate self-check) — lessons.md rule 11, thinking_revised.
5. Ran main.ts twice; outputs byte-identical. No kit code executed; only
   kit files read and my own main.ts run locally.

## Candidates considered

1. **magpie** — a bird that steals shiny things and hoards them in its nest.
2. **mintaholic** — coined: addicted to minting.
3. **degen** — crypto slang for a degenerate trader.
4. **gas** — his signature order; also mint gas; also a fart joke.
5. **minnow** — a tiny trader acting like a whale.
6. **goblin** — hoards shiny trinkets, mischievous.
7. **hoarder** — plain label for never selling anything.
8. **moonboy** — crypto slang, always expecting the moon.
9. **speedrun** — he speedruns everything.
10. **gasguzzler** — burns gas (mint fees) at full speed.

## Head-to-head reasoning (criteria in order; all pass criterion 1)

- magpie vs mintaholic: mintaholic is a coined portmanteau; "mint" also
  reads as the herb/candy, so it needs context. Magpie is a real word,
  instantly understood, funnier image. **Magpie wins.**
- magpie vs goblin: goblin is vivid but a common fantasy insult; magpie is
  more specific — it collects *shiny things*, which is exactly the habit.
  **Magpie wins, narrowly.**
- magpie vs minnow: minnow is wry (small balance, big moves) but needs
  trading context to land; without it, it's just a small fish. Magpie
  lands alone. **Magpie wins.**
- magpie vs degen: degen is insider slang and reads as a stock insult
  ("degenerate") to a general judge — flat, criterion 2 weak. **Magpie wins.**
- magpie vs gas: gas is cryptic without context (fuel? flatulence? mint
  fees?) — it does not clearly describe a human. **Magpie wins.**
- magpie vs hoarder: hoarder is a plain label, not funny (fails criterion
  2); magpie is the vivid, funny version of the same observation.
  **Magpie wins.**
- magpie vs moonboy: moonboy needs crypto context to land; magpie lands
  alone. **Magpie wins.**
- magpie vs speedrun: speedrun is a gaming verb/noun; as a portrait of a
  person it is odd and flat. **Magpie wins.**
- magpie vs gasguzzler: gasguzzler reads as a car, and the gas pun needs
  crypto context; magpie is a cleaner human portrait. **Magpie wins.**

**Winner: magpie** — 9/9 pairwise wins. Concrete, specific, vivid,
funny, fits (he collects shiny things and never lets go), lands with no
explanation.

## Risks / open notes

- The 3 fixed house texts are sealed; if "magpie" were byte-identical to
  one, it would share that text's rate and never enter the playoff. This
  cannot be checked from the kit and applies to any good word.
- The word is judged blind against other humans' words; "magpie" is a
  strong archetype word but the field is unknown.

## Verification record

- Kit verification: all 8 files in kit.json verified OK (sha256 + size).
  kit.tar.gz sha256
  `1b0d847c5d2a5ff2545bfc0d6ddb1c15f80a5ff19a2d3b674a2bc58e55721a91`
  (matches the expected hash).
- main.ts: written, then revised in-session (gate self-check added).
- Run 1 sha256: `8a88fbb234ec0452991a71276cb1be9e6aca02cafbe4718831d165373b968a9b`
- Run 2 sha256: `8a88fbb234ec0452991a71276cb1be9e6aca02cafbe4718831d165373b968a9b`
- Determinism: byte-identical (`cmp` clean).
- Entry: `magpie` — 6 characters, 6 bytes, no trailing newline.
- Node: v24.22.1 (runs TypeScript natively).
- No blockchain transaction signed or sent; no money spent; no API key
  or keypair printed or used. No kit code executed.
