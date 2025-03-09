
export function baseRouteUrlOnly(paramUrl: string): string {
  const splitUrl = paramUrl.split("?");
  if(splitUrl.length != 0) {
    return splitUrl[0];
  }
  return paramUrl;
}
