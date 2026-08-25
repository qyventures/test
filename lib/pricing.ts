export type Benchmark = { country: string; competitorDaily: number };

export const LAUNCH_DISCOUNT = 0.03;

export function qyRoamDailyPrice(competitorDaily: number) {
  // Guarantee at least 3% cheaper by flooring to the nearest cent.
  return Math.floor(competitorDaily * (1 - LAUNCH_DISCOUNT) * 100) / 100;
}

export const benchmarkSeed: Benchmark[] = [
  { country: 'Thailand', competitorDaily: 2.5 },
  { country: 'Japan', competitorDaily: 3.25 },
  { country: 'Malaysia', competitorDaily: 3.25 },
  { country: 'South Korea', competitorDaily: 3.25 },
  { country: 'Taiwan', competitorDaily: 3.77 },
  { country: 'Indonesia', competitorDaily: 3.77 },
  { country: 'Hong Kong', competitorDaily: 3.77 },
  { country: 'China', competitorDaily: 4.9 },
  { country: 'Australia', competitorDaily: 6.37 },
  { country: 'Europe', competitorDaily: 6.37 }
];
