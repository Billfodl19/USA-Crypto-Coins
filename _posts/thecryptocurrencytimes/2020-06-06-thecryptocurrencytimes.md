---
post_title: The Cryptocurrency Times
seotitle: The Cryptocurrency Times
description: The Cryptocurrency Times
layout: post
permalink: /thecryptocurrencytimes/
author: Colin Aulds
updated: 6th June 2020
tags:
pros_cons_table:
blog_image:
blog_image_alt:
author_image:
author_image_alt:
---

* TOC
{:toc}

## [ULTIMATE BITCOIN STRESS TEST’ CONDUCTED TO PROVE THAT BLOCKSIZE LIMIT IS AN IMMINENT THREAT TO BITCOIN, INSTEAD PROVES LARGER BLOCKS ARE UNNECESSARY](/ultimate-bitcoin-stress-test-conducted-to-prove-that-bitcoin-is-in-imminent-danger-due-to-blocksize-limit-instead-it-proves-larger-blocks-are-unnecessary/)

A very unusual [thread](https://bitcointalk.org/index.php?topic=1094865.0){:target="\_blank"} was posted on Bitcointalk Saturday, claiming that the ‘ultimate Bitcoin stress test’ was about to be conducted by an anonymous hacker. The goal of the test was to provide clear evidence that the 1 mb blocksize limit puts Bitcoin in imminent danger, since spamming the network would fill the blocks to their limit and lead to a massive pileup of unconfirmed transactions, essentially stopping people from sending and receiving Bitcoins for hours if not days. This was done to simulate what the hacker expects to happen when blocks reach the 1 mb limit naturally in the next 1-2 years. It is clear that the person conducting this test is not a scientist even though they claimed this was an experiment, since they showed extreme bias towards the result they wanted before the test even began.

The hacker used 10 Bitcoin servers to send 20 larger than usual transactions per second, generating 1 mb of transaction data every 5 minutes. Since the blocksize limit is 1 mb and there is on average 10 minutes between blocks, the hacker projected this would overwhelm the Bitcoin network and bring transactions to a standstill. Typically only 0.0001 Bitcoins (2.5 cents) per kb of data is required as a transaction fee to send your Bitcoins as fast as possible. The hacker set aside 20 Bitcoins ($5000) for this test, and calculated that 0.1 Bitcoins would be spent per 1 mb, and since 1 mb is the blocksize limit he expected 100 blocks to be filled with his spam. This projection assumes that transaction fees would only double to 0.0002 Bitcoins per kb. 100 blocks worth of spam transactions would cause all transactions to be extremely slow for 2-3 days according to the hacker, he envisioned a constantly growing pile up of unconfirmed transactions until he stopped spamming the network.

If the hacker’s calculations were right this would have been a disaster for Bitcoin’s economy. Bitcoin traders would lose profits since they’d barely be able to move their Bitcoins around, Bitcoin dealers would have no supply and lose customers (and those who did have supply would anger the customers since nothing would confirm for days), merchants who accept Bitcoin wouldn’t be able to receive payment, customers buying goods wouldn’t be able to send payment in a timely manner, and all Bitcoin ATMs and in-store technology that accepts Bitcoin wouldn’t work. It is appalling that this hacker wanted this scenario to happen all in the name of a ‘test’. If this did happen as he expected the Bitcoin community would have lost tens of millions of dollars at the least. Trust in Bitcoin’s integrity would be shattered and the value would destabilize.

It appears the test started at 4 am eastern time, with the size of block [362002](https://www.blocktrail.com/BTC/block/00000000000000000fba487f53572f98a52975b19eb525ab9b76490d5acb8e81){:target="\_blank"} jumping to near the 1 mb blocksize limit. After this point most blocks were near or at the limit, but there were several blocks of normal size, probably since they were mined faster than the spam could fill them up. Starting with block [362030](https://www.blocktrail.com/BTC/block/00000000000000000b520ea88a9d64afecc0af78af46c4461f4c5c1cd577fc4a){:target="\_blank"} at 8:21 am nearly every block was at its size limit, with unconfirmed transactions piling up and slowing down transaction speed worldwide. Transaction fees began to rapidly rise as seen in the below chart, exceeding 0.005 Bitcoins per transaction briefly which is 5000% higher than usual. This increase in transaction fees is a direct result of demand to send transactions exceeding the available transaction slots in a block, a beautiful example of the law of supply and demand at work.

The hacker only expected a 100% increase in transaction fees, so his projection that the blockchain would be overwhelmed for 24+ hours was completely invalid. It appears the hacker pulled the plug on the spam transactions once he realized how fast the 20 Bitcoins allotted for the test were evaporating, allowing the pile of unconfirmed transactions to be let through and a return to normal transaction fees in less than an hour. A 2nd round of spam transactions was then unleashed at 2:30 pm, culminating in transactions fees exceeding 0.005 Bitcoins briefly around 4:30 pm. After this point transaction fees once again rapidly dropped since spam transactions weren’t affordable and were turned off until things normalized. A few smaller spikes in transaction fees were then observed, with transaction fees leveling off at normal values after 10 pm, likely due to the 20 Bitcoins being completely spent. It is impressive that a mere $5000 could dominate transaction fee values over an 18 hour period, but the main goal of the test to cause massive transaction delays never materialized. The longest delays were 1-3 hours, and delays of such length are common for Bitcoin even without a hacker attacking the network.

By far the most interesting thing revealed by this test was Bitcoin’s natural ability to counteract transaction volume in excess of the blocksize limit. Once a significant pile up of unconfirmed transactions began due to lack of space, transaction fees increased making it prohibitively expensive to send spam and dust transactions. Fees will rise until the number of new transactions is small enough to allow the excess unconfirmed transactions into the newest blocks, which rapidly drops transaction fees back to normal levels.

This is direct proof that Bitcoin could keep the 1 mb blocksize limit indefinitely and be completely stable, which is the exact opposite of what the hacker was expecting. Running into the blocksize limit and causing a pile up of unconfirmed transactions simply increases the fees in order to lower new transaction volume and dissipate the pileup of older transactions. The majority of Bitcoin developers expected this result, which is why they are against changing the blocksize limit.

A major benefit is miners will  be paid higher transaction fees as Bitcoin use becomes more widespead, as long as the limit remains capped at 1 MB. This will help balance out the decreasing block reward over time, giving miners an incentive to keep mining even when block rewards become infinitesimally small. If blocksize limit were allowed to increase and transaction fees therefore never increased almost everyone would abandon mining, which would result in a vulnerable and unusable Bitcoin network, i.e. the death of Bitcoin. Thus, having a blocksize limit is crucial in order for Bitcoin to survive long term.

This stress test is a direct result of an ongoing debate in the Bitcoin community on whether to increase the blocksize limit, which has led to one of the Bitcoin developers going rogue and creating Bitcoin XT, which will increase blocksize limit with a fork. A fork has never intentionally been introduced into the blockchain in history since it is a risky maneuver. It is inevitable that some users will lose Bitcoins during a fork if they aren’t using the dominant blockchain. In a worst case scenario the Bitcoin XT fork could create unforeseen complications, requiring more forks to fix it. Any fork will destabilize Bitcoin’s value even if it is successful, if it ends up being a disaster Bitcoins could completely lose their value.

Clearly it isn’t prudent to risk forking the blockchain to increase blocksize, since Bitcoin naturally adjusts to higher transaction volume even if blocks are capped at 1 mb for the rest of history, and the smaller blocksize will increase transaction fees. Higher transaction fees aren’t essential in the near future, but will be essential as the block reward drops to zero in the long term. Only about 100 out of 6000 total Bitcoin nodes are running XT despite mass publicity over the past month, since the majority of Bitcoiners recognize that blocksize limit does not threaten Bitcoin’s functionality. The stress test conducted yesterday will only increase this consensus, since now real-life data exists about what happens when transaction volume exceeds the blocksize limit. Although the hacker didn’t get the result he wanted, he did produce valuable data with this test, and since no one got hurt by it I applaud his efforts.

## [HOW TO AVOID LOSING BITCOINS WHEN USING BITCOIN CORE](/how-to-avoid-losing-bitcoins-when-using-bitcoin-core/)

Bitcoin Core is by far the best Bitcoin wallet, and a necessity for anyone planning on using significant amounts of Bitcoin. Most Bitcoin wallets store your private keys on their server, so anyone with access to the server could take your Bitcoins at any time. This is akin to giving cash to a random anonymous person rather than putting it in a bank. There are hybrid wallets like Multibit and Electrum which don’t need to store your private keys on their server to work, but they still have access to your private keys and it only takes 1 bad employee or a hacker to steal your funds. Only Bitcoin Core gives you complete control of your private keys, with no one else able to touch them as long as your password is strong. Bitcoin Core is completely self-sufficient since it stores the data from every transaction in Bitcoin’s history; it only requires an internet connection so it can broadcast your transactions and receive the latest Bitcoin transaction data. Additionally running Bitcoin Core strengthens and secures the Bitcoin network by increasing data transfer speed and verifying all new Bitcoin transactions against Bitcoin’s rules, preventing invalid transactions.

In order to ensure full access to your Bitcoins if your computer breaks or its memory is corrupted you must store the private keys in an external storage device, which is easily done by clicking on File —> Backup wallet and downloading the wallet.dat file. After you fix or replace your computer you can import this wallet into Bitcoin Core to recover your Bitcoins.

Most Bitcoin users rarely backup their wallet, due to a common misconception that you can restore your wallet with a wallet.dat file from any point in time. This can result in losing all of your Bitcoins when you restore your wallet due to the way Bitcoin Core handles ‘change’ transactions. When sending Bitcoin to someone else protocol requires that any inputs used in the transaction must be completely spent. For example if you receive 2 Bitcoins and then send 0.5 Bitcoins to someone else, then 1.5 Bitcoins are sent as change. This is a similar concept to using a $20 bill to buy $5 of goods, you cannot rip off a piece of the $20 bill to pay, instead you send the full amount to the cashier and then they send back $15 of change. Bitcoin Core sends the change to a new address which it creates, and stores the private keys in your wallet.dat file so you control the new address. The available balance in your Bitcoin Core wallet is the sum of all the addresses you control, rather than the amount of Bitcoins actually sitting in your main wallet address. It would be difficult for an outside observer to determine that you own the newly generated change addresses, greatly increasing anonymity of transactions. It is possible to simply send all change to your normal wallet address to avoid creating new wallets, but Bitcoin Core creates new addresses for change by default and few people ever modify it.

If you restore Bitcoin Core with a wallet.dat file created prior to your most recent transactions it is probable that the wallet.dat won’t contain the private keys for newly generated change addresses, so you will see zero Bitcoins in your wallet even if you had Bitcoins prior to your computer crashing. This has confused and enraged many Bitcoin Core users. In order to restore your Bitcoins you must obtain the wallet.dat file from right before your computer broke and import it into Bitcoin Core, which is a relatively easy task as long as your hard drive isn’t broken. Your Bitcoins will sit idle in the change addresses, so even if you get the wallet.dat off your old computer weeks or months later you will recover the previously lost Bitcoins. It is important to have zero Bitcoins in your wallet before you attempt to restore an older wallet.dat, since you will lose access to any change addresses created after your computer crashed.

To summarize, the only way to completely ensure access to your funds in Bitcoin Core when using default settings is to download the wallet.dat file after each Bitcoin transaction you participate in. This would be quite a hassle for active Bitcoin users. It is much easier to direct all change to a specific address that you control, which is easily done in newer versions of Bitcoin Core as seen below. As long as your wallet.dat backup contains the private key for the fixed change address you won’t need to update it ever again, at least in theory. The downside is your transactions will be less anonymous.

## [RECORD 152,000+ BITCOIN TRANSACTIONS ON MAY 28 FOLLOWING CONSTANT GROWTH ALL YEAR](/record-number-of-daily-bitcoin-transactions-on-may-28-following-constant-growth-all-year/)

Over the past year Bitcoin transaction volume has been constantly increasing as can be seen in the below chart. Daily transaction volume has increased from around 60,000 to over 100,000, a stunning 70% increase. On May 28 there were 152,848 Bitcoin transactions, shattering the previous record.

This is an indicator that Bitcoin is becoming increasingly popular across the globe. People are realizing how powerful Bitcoin is, you can transfer money anywhere in the world instantly without the typical oversight, limitations, fees, and delays associated with using banks or money transfer services like Western Union. This has given Bitcoin users unparalleled freedom to conduct business, resulting in a gold rush esque boom of Bitcoin businesses. Every single day there are dozens of businesses popping up that use Bitcoin as their primary mechanism of monetary transfer, and many of these end up becoming quite profitable since users anywhere in the world can instantly buy goods and services, vastly expanding the potential customer base. This is in stark contrast to opening a shop that relies on local business, which often fail due to a lack of customers. I believe that Bitcoin is on track to become as popular as credit cards and will eventually have billions of users. Successful Bitcoin business owners of the present day will become incredibly wealthy and powerful over the next several decades, becoming the Rockefellers and Carnegies of a new era where people have absolute freedom to utilize their money.

## [VERICOIN ROLLS BACK BLOCK CHAIN AFTER ATTACK ON MINPTAL, COMMUNITY OUTRAGED BY THIS BLATANTLY CENTRALIZED ACTION](/vericoin-rolls-back-block-chain-after-attack-on-minptal-community-outraged-by-this-blatantly-centralized-action/)

<center>
  <img src="/images/thecryptocurrencytimes/vericoin-300x300.png" style="width:auto;">
</center>

On July 13 the cryptocurrency exchange MintPal was hacked, and $2 million of Vericoin was stolen, which is nearly 30% of all the Vericoin in existence. This is one of the biggest cryptocurrency crimes this year, and such a loss could cripple Mintpal, which is the most popular alternative cryptocurrency exchange. Also investors who had their Vericoin on Mintpal  stood to lose all their Vericoin, which would damage the community. The expected price crash from the hacker dumping 30% of all the Vericoin in existence would also cause major damage to everyone invested in Vericoin. As if this wasn’t bad enough already, Vericoin is a proof-of-stake (PoS) cryptocurrency, so having 30% of the total coins means controlling 30% of the network’s hashing power. The hacker could repeatedly attempt to double-spend, and they would succeed after only a few tries on average. If they managed to amass 51% of all the Vericoin in existence they would be able to succeed at double spending 100% of the time. In either case, having a hacker control such a large percentage of Vericoin is dangerous.

Vericoin’s developers responded to this by forking the blockchain, so that all transactions from the moment of the hacking onwards were reversed. This returned all the coins that were stolen , saving Mintpal from insolvency and preventing the possibility of a double spend attack by the hacker. This is controversial however, since it defeats the purpose of a decentralized cryptocurrency. The developers proved that they are in full control of Vericoin, capable of taking anyone’s Vericoin away for any reason. Some worry that rollbacks will become more common and the justifications will get weaker. One’s trust in Vericoin is now only as strong as his/her trust in the developers. This rollback is unlikely to set a precedent for cryptocurrency developers, since there has been strong community backlash after the Vericoin rollback.

At the same time, some see the rollback as an advantage that only cryptocurrency has. Never in history has a robbery been reversed by simply rolling back the ledger of transactions to the time before the robbery. If this was possible for fiat currency robberies and scams could be easily reversed, saving innocent victims millions of dollars. It gives a lot of power to whoever is in charge of the currency however, which can be quite dangerous. Imagine a government that has the ability to reverse money that was sent to your bank, or to reverse payments for services/products that they had already received. Clearly it is important that transactions can’t be reversed by a central authority, which is why the Vericoin rollback has drawn so much controversy.

—Thank you to Kefkius for contribuiting to this article

## [SCAMCOIN LAUNCHING TOMORROW, WILL BE THE 3RD CRYPTOCURRENCY NAMED SCAMCOIN](/scamcoin-launching-tomorrow-will-be-the-3rd-cryptocurrency-named-scamcoin/)

<center>
  <img src="/images/thecryptocurrencytimes/scamcoin-300x225.png" style="width:auto;">
</center>

There are numerous scams in the cryptocurrency world, and oftentimes entire cryptocurrencies end up being scams. Dafuq Coin ended up being malware, and anyone who installed it on their computer or exchange was at risk of losing their cryptocurrency. StackCoin, EdgeCoin, and NFD-coin were initial public offering (IPO) scams, where the developer disappeared and never released the coin despite receiving large amounts of Bitcoin from investors. White Coin, Asia Coin, and many others were pump and dump scams, where the developer dumps the entire premine, destroying the cryptocurrency’s price, and then they disappear.

These events have inspired a new cryptocurrency: ScamCoin. ScamCoin will be launching tomorrow, and it is not trying to hide the fact that it is a scam. It will be using the X13 algorithm and is Proof of Stake (PoS), and has a short mining period of 3.5 days. These attributes would usually make for a popular cryptocurrency, at least in the short term after launch. There is a 1% premine, so perhaps the developer is planning on doing the classic pump and dump scam. Even though ScamCoin seems like a terrible thing to mine, it is almost guaranteed that people will mine it. You can name a cryptocurrency anything and it will attract interest from the community. Read more about ScamCoin here: <https://bitcointalk.org/index.php?topic=665169.0>{:target="\_blank"}

ScamCoin is not the original ScamCoin however, there have been 2 more in recent history. The ScamCoin that was released in February 2014 utilized the classic IPO scam. Shockingly, someone actually did invest 0.025 Bitcoin. To the surprise of no one, the developer disappeared and this version of ScamCoin never launched: <https://bitcointalk.org/index.php?topic=475287.0>{:target="\_blank"}

The original ScamCoin came out in January 2014. The developer gave away lots of ScamCoin for free, but it appears the wallet may have had a virus, and it barely worked. <https://bitcointalk.org/index.php?topic=431205.0>{:target="\_blank"}

If you like getting scammed, get your miners ready for ScamCoin’s launch tomorrow. What could go wrong?

## [THE FIRST CRYPTOCURRENCY ENDORSED BY THE GLORIOUS LEADER OF NORTH KOREA ENDS UP BEING A SCAM](/the-first-cryptocurrency-endorsed-by-the-glorious-leader-of-north-korea-ends-up-being-a-scam/)

<center>
  <img src="/images/thecryptocurrencytimes/cryptowon.png" style="width:auto;">
</center>

The CryptoWon was scheduled to launch June 10. It was the first cryptocurrency endorsed by the dear glorious eternal leader of North Korea, and promised to obliterate all other cryptocurrencies. It was supposed to be the first cryptocurrency to use proof of labor (PoL) and proof of bureaucracy (PoB).

The developer had an initial public offering (IPO), where you could buy CryptoWon with Bitcoins. 0.339 Bitcoin was invested, worth $200 ( <https://blockchain.info/address/12ciZ7yHaKjAw57hB6odGr4UELMJ9t1t9s>{:target="\_blank"} ). The developer disappeared before the scheduled launch on June 10, and at this point it appears the CryptoWon was never created.

Thus, CryptoWon is a scam, joining the ranks of EdgeCoin, StackCoin, NFD-Coin, White Coin, and many others. It is rumored that the CryptoWon scam has doubled the national budget of North Korea for 2014.

## [UFO COIN TO BE REVAMPED ON JULY 2ND, WITH NEW HASHING ALGORITHM NEOSCRYPT AND SECURITY IMPROVEMENTS](/ufo-coin-the-first-interplanetary-cryptocurrency-to-be-revamped-on-july-2nd/)

<center>
  <img src="/images/thecryptocurrencytimes/ufocoin-300x300.png" style="width:auto;">
</center>

UFO Coin was originally launched in January 2014, but is going to be completely revamped on July 2nd (about 10 days from now).  UFO Coin’s algorithm will be changed from Scrypt to NeoScrypt, which is an improved version of Scrypt created by the Feathercoin development team. NeoScrypt will be 30% more energy efficient than Scrypt, and ASIC resistant. ASICs have recently taken over Scrypt mining, making it unprofitable for GPU/CPU miners to mine Scrypt. NeoScrypt will allow GPU/CPU miners to profitably mine UFO Coin again, which should make UFO Coin more popular. NeoScrypt is somewhat similar to X11, in the sense that X11 makes mining more profitable for GPU/CPU miners and is more energy efficient. X11 has become extremely popular this year following the release of Scrypt ASICs, since all the GPU/CPU miners are flocking to X11.

Additionally, UFO Coin will implement Nite’s Gravity Well, which allows for rapid response to hash rate changes. This will help prevent multipools from ruining mining profits. A multipool is a large collection of miners who mine the most profitable coin at any given time. With Nite’s Gravity Well the payouts for UFO Coin per MH/s will rapidly drop when a multipool starts mining UFO Coin, which will force the multipool to mine something else. Then payouts will rapidly increase when the multipool leaves, benefiting UFO Coin GPU/CPU miners.

The new release of UFO Coin will also make the chance of a time warp attack negligible. During a time warp attack the difficulty is reduced below where it should be, allowing the attacker to mine coins much faster than they should be able to. Also, UFO Coin will have automatic checkpointing set to a low depth, which will prevent transaction rollbacks via a 51% attack. Thus, UFO Coin will be much more resistant to 51% attacks and time warps, making it a safer cryptocurrency.

There will be 4 billion UFO Coins in total, with 5000 coins per block and a new block every 90 seconds. Every 400,000 blocks the block reward halves. Currently UFO Coin is near block 150,000, so no halvings have occurred yet. The update will occur at block 160,997 via a hard fork, and block 160,997 is expected to occur on July 2.

There are several pools where you can mine UFO Coin, and currently the network hash rate is 140 MH/s. This represents a significant amount of mining power, equivalent to 100 small ASICs. However, relative to other cryptocurrencies UFO Coin’s hash rate is small to medium. It is probable that UFO Coin’s hash rate will increase after improvements are implemented on July 2. UFO Coin is not actively being traded on any exchange, but that is expected to change soon after the update, since there is significant community interest in UFO Coin.

The developers of UFO Coin hope to setup up a fund for SETI (The Search for Extraterrestrial Intelligence) as well as other projects which are trying to find extraterrestrial life, making UFO Coin the first interplanetary cryptocurrency. Considering that UFO Coin has a strong development team and is scheduled to make some revolutionary changes to its code, I think it’s worth mining. The official statement from the developers regarding the UFO Coin update can be found here: <https://bitcointalk.org/index.php?topic=658117>{:target="\_blank"}


## [DARKCOIN MASTERNODES FAIL AGAIN, PRICE CRASHES](/darkcoin-masternodes-fail-again-price-crashes/)

<center>
  <img src="/images/thecryptocurrencytimes/darkcoin-300x145.png" style="width:auto;">
</center>

About a month ago DarkCoin attempted to implement masternodes. Masternodes are used to ‘mix’ DarkCoins, making transactions anonymous. If you own a masternode you get paid a portion of the block reward every time your masternode is selected, which would be quite lucrative over time. This generated a lot of interest from the community, and DarkCoin’s price soared to 0.028 BTC/DarkCoin. Unfortunately, the implementation of the masternodes failed and resulted in many forks, destabilizing the entire DarkCoin system. DarkCoin was briefly delisted from exchanges and its price crashed below 0.01 BTC/DarkCoin <http://www.usacryptocoins.com/thecryptocurrencytimes/uncategorized/darkcoin-blockchain-forks-resulting-in-price-crash-and-temporary-delisting-from-exchanges/>{:target="\_blank"}

The DarkCoin development team had been working on a fix for the masternodes, and tried launching masternodes again today. Speculation drove prices up to 0.021 BTC/DarkCoin before the masternode launch. The masternode launch was a failure once again. Forks developed in the DarkCoin blockchain, making it dangerous to send and receive DarkCoin. The developers of DarkCoin were forced to halt masternodes and go back to the original DarkCoin code. <https://darkcointalk.org/threads/reverting-rc3-masternode-payments-fork.1458/>{:target="\_blank"}

The price of DarkCoin crashed 30% after today’s failed masternode launch, ending up around 0.015 BTC/DarkCoin. I expect price to continue declining in the short term, since masternodes were the main reason DarkCoin’s price was rising. It’s hard to tell where the bottom will be, and investing in DarkCoin now is a risky decision. DarkCoin is still near the top of a price bubble, and bad news like this may be enough to finally pop the bubble.

## [BACON COIN: THE FIRST BACON INSPIRED CRYPTOCURRENCY](/bacon-coin-the-first-bacon-inspired-cryptocurrency/)

<center>
  <img src="/images/thecryptocurrencytimes/bacon-300x164.png" style="width:auto;">
</center>

Bacon Coin launched earlier today. It is the first cryptocurrency inspired by bacon, which is a delicious meat product prepared from a pig and then cured. There will be 21 million Bacon Coins in total, with 50 per block and a new block every minute. 20,000 Bacon Coins were premined.

Bacon Coin was created with Coingen, which is a service that makes your own cryptocurrency in exchange for a fee. This means that if Bacon Coin ever has a problem it likely won’t be repairable. That being said, even broken bacon is still delicious. The network hash rate for Bacon Coin is extremely low, so you can easily solo mine Bacon with your own computer. It is unlikely Bacon Coin will ever get listed on an exchange, but crazier things have happened.

This is another example of how there is a cryptocurrency for almost anything. I expect Egg Coin, Pancake Coin, Syrup Coin, and Butter Coin to be launched in the near future, and combined with Bacon Coin it’ll make for a hearty cryptocurrency breakfast.

## [WILD MONTH ON THE BITCOIN MARKET](/wild-month-on-the-bitcoin-market/)

Bitcoin experienced a rapid price increase during the latter half of May, going from $430 on May 12 to $683 by June 1. This corresponds to a 59% increase in price, and the total value of all the Bitcoins in the world (often called the market cap) rose from $5.6 billion to $8.5 billion. This is the biggest price increase Bitcoin has seen during 2014.

After the rally ended on June 1 the market was volatile, but the price of Bitcoin stabilized around $660 by June 6. Bitcoin’s price began to slowly decrease on June 9, and this trend accelerated into a full blown crash on June 12. Bitcoin dropped to $538 on June 14, corresponding to a 19% drop during the week. The market cap dropped from $8.5 billion to $6.95 billion during the same time.

<center>
  <img src="/images/thecryptocurrencytimes/wildbitcoin-300x178.png" style="width:auto;">
</center>

The price of Bitcoin then began to rise again, and is now at $590, a 10% increase in 36 hours. Most of this price increase has occurred over the last 9 hours, and it can probably be considered a small rally. The market cap of Bitcoin is now $7.6 billion.

Thus, the Bitcoin market is having a wild month. Price swings of 10% or more within a couple of days are the norm for now. It’s a day trader’s dream and worst nightmare at the same time. It looks like Bitcoin’s price will continue to rise overall, so if you have long term investments in Bitcoin its best to ignore the day to day volatility.
