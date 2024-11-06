import { chainLabels, apiUrls } from '@airswap/utils'

export const decimals: any = {
  '0x20aaebad8c7c6ffb6fdaa5a622c399561562beea': 6,
  '0xf450ef4f268eaf2d3d8f9ed0354852e255a5eaef': 6,
  '0xf56dc6695cf1f5c364edebc7dc7077ac9b586068': 6,
  '0x1990bc6dfe2ef605bfc08f5a23564db75642ad73': 6,
  '0xdac17f958d2ee523a2206206994597c13d831ec7': 6,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 6,
  '0x5B3b7A7bA083464a0e5638347B5384413304e860': 18, //Asset Token (Holesky)
  '0x3b46174C10E2331379445CD99256d81a37d94824': 18, //Asset Token 2 (Holeksy)
  '0x0fc271dc10564b93345bbe9151d66750d8c02492': 18, //Asset Token 3 (Holesky)
  '0x29b25d6180fc1d5a0b122a91511c6876fee59f02': 18, //Asset Token 4 (Holesky)
  '0x9Aa7028e2CBfAd70Cc1428487cE6453e0e711a2D': 18, //AssetToken (Sepolia)
  '0x1800b69f9D857d1e29CE4A92739FA0dfA07f975d': 18, //AssetToken2 (Sepolia)
  '0x3a769436c5338e9838e2b01b8071942257cCfF5B': 18, //AssetToken3 (Sepolia)
}

export function getNodeURL(chainId: number, INFURA_ID: string) {
  if (INFURA_ID)
    return chainLabels[chainId]
      ? `https://${chainLabels[
          chainId
        ].toLowerCase()}.infura.io/v3/${INFURA_ID}`
      : undefined
  return apiUrls[chainId]
}

export function result(id: string, result: any) {
  return JSON.stringify({
    jsonrpc: '2.0',
    id,
    result,
  })
}

export function error(id: string, code: any, message: any) {
  return JSON.stringify({
    jsonrpc: '2.0',
    id,
    error: { code, message },
  })
}
