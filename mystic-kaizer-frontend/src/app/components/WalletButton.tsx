"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletButton() {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <div className="px-4 py-0 cursor-pointer text-xl w-[160px] hover:bg-white group transition-colors duration-300 rounded-full flex items-center justify-center">
        <WalletMultiButton
          style={{
            backgroundColor: "transparent",
            borderRadius: "0",
            border: "0",
            margin: "0",
            padding: "0",
            fontSize: "1.25rem",
            fontFamily: "var(--font-chillax)",
            height: "2.5rem",
          }}
        >
          <span className="group-hover:text-black transition-colors duration-300 rounded-full flex items-center justify-center">
            Connect
          </span>
        </WalletMultiButton>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        console.log("clicked");
      }}
      className="pointer-events-auto cursor-pointer px-4 py-2 z-[100] text-xl w-[160px]"
    >
      {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-5)}
    </div>
  );
} 
