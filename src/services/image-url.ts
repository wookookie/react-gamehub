/**
 * 크기를 줄인 이미지를 요청하는 URL을 반환합니다.
 * @param url
 * @returns
 */
export function getCroppedImageUrl(url: string) {
  // 기존: https://media.rawg.io/media/games/...
  // 반환: https://media.rawg.io/media/crop/600/400/games/...
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
