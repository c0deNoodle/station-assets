module.exports = {
  chainID: 'pisco-1',
  lcd: 'https://pisco-lcd.terra.dev',
  gasAdjustment: 2,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  alliance: true,
  explorer: {
    address: 'https://terrasco.pe/testnet/address/{}',
    tx: 'https://terrasco.pe/testnet/tx/{}',
    validator: 'https://terrasco.pe/testnet/validator/{}',
    block: 'https://terrasco.pe/testnet/block/{}',
  },
  channels: {
    'ares-1': 'channel-189',
    'atlantic-2': 'channel-100',
    'indigo-1': 'channel-506',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Test Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
    {
      token: 'factory/terra1zdpgj8am5nqqvht927k3etljyl6a52kwqup0je/stDeck',
      symbol: 'aDeck',
      name: 'Alliance Deck',
      icon: process.env.CF_PAGES_URL + '/img/coins/AllianceDeck.png',
      decimals: 6,
    },
    {
      token: 'factory/terra1zdpgj8am5nqqvht927k3etljyl6a52kwqup0je/stOracle',
      symbol: 'aOracle',
      name: 'Alliance Oracle',
      icon: process.env.CF_PAGES_URL + '/img/coins/AllianceOracle.png',
      decimals: 6,
    },
  ],
}
