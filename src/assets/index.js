const files = import.meta.glob('./*.webp', { eager: true, import: 'default' });

// IMG.me, IMG.n1 ... built from the files in this folder (file name = key)
export const IMG = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace('.webp', ''), url])
);
