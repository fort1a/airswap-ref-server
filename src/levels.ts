export const Levels = {
  '1': [
    {
      baseToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      quoteToken: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      minimum: '0.00005',
      bid: [['1000', '0.0005']],
      ask: [['1000', '0.0005']],
    },
    {
      baseToken: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      quoteToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      minimum: '0.1',
      bid: [['1000', '0.0005']],
      ask: [['1000', '0.0005']],
    },
    {
      baseToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      quoteToken: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      minimum: '0.00005',
      bid: [['1000', '1']],
      ask: [['1000', '1']],
    },
    {
      baseToken: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      quoteToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      minimum: '0.1',
      bid: [['1000', '1']],
      ask: [['1000', '1']],
    },
  ],
  '17000': [
    {
      baseToken: '0x94373a4919B3240D86eA41593D5eBa789FEF3848', //WETH contract with AT
      quoteToken: '0x5B3b7A7bA083464a0e5638347B5384413304e860',
      minimum: '0.00005',
      bid: [['1000', '10000']],
      ask: [['1000', '10000']],
    },
    {
      baseToken: '0x5B3b7A7bA083464a0e5638347B5384413304e860',
      quoteToken: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
      minimum: '0.00005',
      bid: [['10000', '0.001']],
      ask: [['10000', '0.001']],
    },
    {
      baseToken: '0x5B3b7A7bA083464a0e5638347B5384413304e860', //AssetToken 1 and 2 pairs / one for one trade / maximum limit 1000
      quoteToken: '0x3b46174C10E2331379445CD99256d81a37d94824',
      minimum: '1',
      bid: [['1000', '1']],
      ask: [['1000', '1']],
    },
    {
      baseToken: '0x3b46174C10E2331379445CD99256d81a37d94824', //AssetToken 1 and 2 pairs / one for one trade / maximum limit 1000
      quoteToken: '0x5B3b7A7bA083464a0e5638347B5384413304e860',
      minimum: '1',
      bid: [['1000', '1']],
      ask: [['1000', '1']],
    },
    {
      baseToken: '0x0FC271dc10564B93345BBE9151d66750D8c02492', //AssetToken 3 and 4 pairs / pricing levels / maximum limit 10000
      quoteToken: '0x29b25d6180Fc1d5A0B122A91511c6876FeE59f02',
      minimum: '1',
      bid: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
      ask: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
    },
    {
      baseToken: '0x29b25d6180Fc1d5A0B122A91511c6876FeE59f02', //AssetToken 3 and 4 pairs / pricing levels / maximum limit 10000
      quoteToken: '0x0FC271dc10564B93345BBE9151d66750D8c02492',
      minimum: '1',
      bid: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
      ask: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
    },
    {
      baseToken: '0xE8fB351151692cFdC831Bd1D33D868A1663F81C0', //AssetToken 5 and 6 pairs / pricing through levels
      quoteToken: '0x5b5A88D72E68f8484D76C63Fad8d116C49dDb30C',
      minimum: '0.005',
      bid: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
      ask: [
        ['100', '1.1'],
        ['1000', '1'],
        ['10000', '0.9'],
    ],
    },
    {
      baseToken: '0x5b5A88D72E68f8484D76C63Fad8d116C49dDb30C', //AssetToken 5 and 6 pairs / pricing through levels
      quoteToken: '0xE8fB351151692cFdC831Bd1D33D868A1663F81C0',
      minimum: '0.005',
      bid: [
        ['1000', '2'],
        ['10000', '1.5'],
        ['100000', '1'],
    ],
      ask: [
        ['1000', '2.1'],
        ['10000', '1.6'],
        ['100000', '1.1'],
    ],
    },
  ],
  '43113': [
    {
      baseToken: '0xd9d01a9f7c810ec035c0e42cb9e80ef44d7f8692',
      quoteToken: '0x48c427e7cEf42399e9e8300fC47875772309e995',
      minimum: '0.005',
      bid: [['1000', '1']],
      ask: [['1000', '1']],
    },
    {
      baseToken: '0x48c427e7cEf42399e9e8300fC47875772309e995',
      quoteToken: '0xd9d01a9f7c810ec035c0e42cb9e80ef44d7f8692',
      minimum: '0.005',
      bid: [['1000', '1']],
      ask: [['1000', '1.1']],
    },
  ],
  '59140': [
    {
      baseToken: '0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068',
      quoteToken: '0x1990BC6dfe2ef605Bfc08f5A23564dB75642Ad73',
      minimum: '1',
      bid: [['100', '1']],
      ask: [['100', '1']],
    },
    {
      baseToken: '0x1990BC6dfe2ef605Bfc08f5A23564dB75642Ad73',
      quoteToken: '0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068',
      minimum: '1',
      bid: [['100', '1']],
      ask: [['100', '1']],
    },
  ],
  '11155111': [
    {
      baseToken: '0x20aaebad8c7c6ffb6fdaa5a622c399561562beea',
      quoteToken: '0xf450ef4f268eaf2d3d8f9ed0354852e255a5eaef',
      minimum: '1',
      bid: [['100', '1']],
      ask: [['100', '1']],
    },
    {
      baseToken: '0xf450ef4f268eaf2d3d8f9ed0354852e255a5eaef',
      quoteToken: '0x20aaebad8c7c6ffb6fdaa5a622c399561562beea',
      minimum: '1',
      bid: [['100', '1']],
      ask: [['100', '1']],
    },
    {
      baseToken: '0x1800b69f9D857d1e29CE4A92739FA0dfA07f975d',
      quoteToken: '0x3a769436c5338e9838e2b01b8071942257cCfF5B',
      minimum: '100',
      bid: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
      ask: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
    },
    {
      baseToken: '0x3a769436c5338e9838e2b01b8071942257cCfF5B',
      quoteToken: '0x1800b69f9D857d1e29CE4A92739FA0dfA07f975d',
      minimum: '100',
      bid: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
      ask: [
        ['100', '1'],
        ['1000', '0.90'],
        ['10000', '0.80'],
    ],
    },
  ],
}
