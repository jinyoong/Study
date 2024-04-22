const N = 3
const test_map = [
  [1, 1, 10],
  [1, 5, 1],
  [2, 2, -1],
]
const dr = [1, 0];
const dc = [0, 1];
let answer = 0;
let idx = 0;
let queueLength = 1;
let visited = [];
const queue = [[0, 0]];

while (idx < queueLength) {
  const r = queue[idx][0];
  const c = queue[idx][1];
  const step = queue[idx][2];
  console.log(r, c, step);
  idx += 1;

  if (r == N - 1 && c == N - 1) {
    
  }

  for (let i = 0; i < 2; i++) {
    const nr = r + dr[i] * step, nc = c + dc[i] * step;
    
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) {
      continue
    }

    if (visited.includes([nr, nc])) {
      continue
    }

    visited.push([nr, nc])
    queue = [...queue, [nr, nc]]
    queueLength += 1
  }

}