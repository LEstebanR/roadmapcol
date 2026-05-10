export function imgUrl(url: string): string {
  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}

export function videoPoster(url: string): string {
  return url
    .replace('/video/upload/', '/video/upload/so_0/')
    .replace(/\.(mov|mp4|webm)$/i, '.jpg')
}

const blurSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="3"><rect fill="#e2e8f0" width="4" height="3"/></svg>'
export const blurDataUrl = `data:image/svg+xml;base64,${btoa(blurSvg)}`
