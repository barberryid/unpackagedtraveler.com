export const SITE = {
  name: 'The Unpackaged Traveler',
  url: 'https://unpackagedtraveler.com',
  description:
    'Independent 2 to 3 week trip plans for US retirees who want adventure without tours.',
  tagline: 'Stay longer, travel bolder, spend less. Tours not required.',
  author: 'Gary Wilson',
};

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.url).toString();
}
