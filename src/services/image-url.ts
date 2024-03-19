/**
 * 크기를 줄인 이미지를 요청하는 URL을 반환합니다.
 * @param url
 * @returns
 */
export function getCroppedImageUrl(url: string) {
  // 이미지가 없는 게임일 경우 비어있는 문자열 반환
  if (!url) return "";

  // 기존: https://media.rawg.io/media/games/...
  // 반환: https://media.rawg.io/media/crop/600/400/games/...
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
