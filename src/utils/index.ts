import Group2 from '../assets/Group2.png';
import Group1 from '../assets/Group1.png';

export const HeaderLinks = [
  {
    name: 'Trade',
    url: 'https://app.goldenfinance.xyz/',
  },
  {
    name: 'GLP Pool',
    url: 'https://app.goldenfinance.xyz/buy_glp',
  },
  // {
  //   name: 'Staking Rewards',
  //   url: 'https://landing-page-paop.vercel.app/',
  // },
  {
    name: 'Stats',
    url: 'https://stats.goldenfinance.xyz',
  },
];

export const FooterLinks = [
  {
    name: 'Terms and Conditions',
    url: 'https://golden-finances-organization.gitbook.io/golden-finance-docs/miscellaneous/terms-and-conditions',
  },
  // {
  //   name: 'Referral Terms',
  //   url: 'https://docs.golden.finance/incentive-programs/referral-and-affliate-programmes',
  // },
  {
    name: 'Docs',
    url: 'https://golden-finances-organization.gitbook.io/golden-finance-docs',
  },
];

export const goto = (url: string) => {
  window.open(url, '_blank');
};

export const telegram_url = 'https://t.me/+nDXkiNenRyNlZTE9';
export const medium_url = '#';
export const X_twitter_url = 'https://x.com/0xGoldenFinance';
export const discord_url = 'https://discord.gg/sR4smstcd3';
export const trade_url = 'https://app.goldenfinance.xyz/';

export const CardContents = [
  {
    title: 'Trading Perpetual Contracts',
    content:
      'Trade without any slippage and counterparty risk with up to 100x leverage completely on-chain.',
    remain: 'Unlock the power of leverage with Golden Finance now!',
    Logo: Group1,
    url: trade_url,
    id: 'card_content_1',
  },
  {
    title: 'Earn Real Yield With GLP',
    content:
      'Liquidity Providers (LPs) act as a counterparty to traders on Golden Finance',
    remain: 'Earn 70% of the trading fees paid on the platform.',
    Logo: Group2,
    url: trade_url,
    id: 'card_content_2',
  },
];
