// Helper function to preload images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Helper function to generate responsive image URLs
export function getResponsiveImageUrl(url: string, width: number): string {
  if (url.includes('creatorspace.imgix.net')) {
    return `${url}?w=${width}&auto=compress,format`;
  }
  return url;
}

// Helper function to get video thumbnail
export function getVideoThumbnail(url: string): string {
  if (url.includes('storage.googleapis.com')) {
    return `${url}?w=480&frame=1`;
  }
  return url;
}