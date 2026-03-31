export default defineAppConfig({
  title: 'AVS Links',
  github: '',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Secure Link Shortener',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
