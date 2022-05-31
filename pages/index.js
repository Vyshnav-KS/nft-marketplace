/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import EthIcon from "../assets/eth.png";
import Image from "next/image";
import MarketPlace from "../components/MarketPlace";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

export default function Home() {
	const [loadingState, setLoadingState] = useState("not-loaded");

	if (loadingState === "loaded" && !nfts.length)
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginLeft: "378px",
					marginRight: "378px",
				}}
			>
				<div
					style={{
						fontSize: "33px",
						fontWeight: 700,
						marginTop: 50,
					}}
				>
					Marketplace
				</div>
				<div
					style={{
						width: "1165px",
						height: "2px",
						background: "#686868",
						marginBottom: "50px",
					}}
				></div>
				<p>No items in marketplace</p>
			</div>
		);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				marginLeft: "378px",
				marginRight: "378px",
			}}
		>
			<div
				style={{
					fontSize: "33px",
					fontWeight: 700,
					marginTop: 50,
				}}
			>
				Marketplace
			</div>
			<div
				style={{
					width: "1165px",
					height: "2px",
					background: "#686868",
					marginBottom: "50px",
				}}
			></div>

			<MarketPlace />
		</div>
	);
}
