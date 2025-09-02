"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-8 w-full max-w-[350px]">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Mint NFT
          </h1>
          <p className="text-muted-foreground">
            Mint NFT on Celo for 1 CELO each
          </p>
        </div>

        <NFTMintFlow 
          contractAddress="0xf94e98916c78C3CfFb22dF6E68654a1ddAe320dC"
          tokenId="1"
          network="celo"
          buttonText="Mint for 1 CELO"
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
