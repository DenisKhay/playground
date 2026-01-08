function merge(intervals: number[][]): number[][] {
  const sorted = intervals.sort(([a], [b]) => a - b);

  let [currStart, currEnd] = sorted[0];
  let j = 0;
  for(let i = 1; i < sorted.length; i++) {
    const [nextStart, nextEnd] = sorted[i];
    if(currEnd >= nextStart) {
        currEnd = Math.max(currEnd, nextEnd);
    } else {
        sorted[j++] = [currStart, currEnd];
        [currStart, currEnd] = [nextStart, nextEnd];
    }
  }
  sorted[j++] = [currStart, currEnd]
  return sorted.slice(0, j);
};