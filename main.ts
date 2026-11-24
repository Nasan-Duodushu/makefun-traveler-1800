// One Sentence for a Traveler from 1800: explains the modern internet in one
// sentence using only words a person from 1800 would know.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Picture every letter ever penned, every book and portrait and market cry, borne not by horses but by messengers swifter than lightning, so any soul may read or answer them in a breath.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
