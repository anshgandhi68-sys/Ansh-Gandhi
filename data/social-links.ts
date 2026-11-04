export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
  category: 'social' | 'venture' | 'code';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ansh-a-gandhi-76257b420/',
    handle: 'ansh-a-gandhi-76257b420',
    icon: 'solar:user-id-bold-duotone',
    category: 'social'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/anshhgandhii_/',
    handle: '@anshhgandhii_',
    icon: 'solar:camera-bold-duotone',
    category: 'social'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/anshgandhi68-sys',
    handle: 'github.com/anshgandhi68-sys',
    icon: 'solar:code-file-bold-duotone',
    category: 'code'
  },
  {
    name: 'Workivo',
    url: 'https://workivo.in',
    handle: 'workivo.in',
    icon: 'solar:shop-bold-duotone',
    category: 'venture'
  }
];

export const contactDetails = {
  // Verified placeholder until custom domain email is connected
  email: 'connect@workivo.in',
  location: 'India',
  timezone: 'IST (UTC +5:30)',
  availability: 'Open for venture discussions, research inquiries, & technical collaboration'
};
