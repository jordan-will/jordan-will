export const openUrl = (url:string) => {
  if(!url) return
  window.open(url, '_blank', 'noopener')
}

