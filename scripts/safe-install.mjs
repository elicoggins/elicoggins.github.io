#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const installArgs = process.argv.slice(2);
const recencyDays = Number.parseFloat(process.env.NPM_RECENCY_DAYS ?? '3');

if (!installArgs.length) {
  console.error('Usage: npm run install:safe -- [npm install flags] <package...>');
  console.error('Example: npm run install:safe -- --save-dev vite');
  process.exit(1);
}

if (!Number.isFinite(recencyDays) || recencyDays < 0) {
  console.error('NPM_RECENCY_DAYS must be a non-negative number.');
  process.exit(1);
}

const cutoff = new Date(Date.now() - recencyDays * 24 * 60 * 60 * 1000).toISOString();
const npmArgs = ['install', `--before=${cutoff}`, ...installArgs];

console.log(`Installing with npm package publish cutoff: ${cutoff}`);
console.log(`Command: npm ${npmArgs.join(' ')}`);

const result = spawnSync('npm', npmArgs, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);