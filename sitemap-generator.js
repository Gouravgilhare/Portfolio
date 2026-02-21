import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://gouravgilhare.online' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe stream
sitemap.pipe(writeStream);

// Add your pages
sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/projects', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

sitemap.end();

// Wait for stream to finish
streamToPromise(sitemap)
  .then(() => console.log('Sitemap generated!'))
  .catch((err) => console.error(err));
