export const appendParamsSearchParams = (currentParams: string, params: { [key: string]: string | null }) => {
  const searchParams = new URLSearchParams(currentParams)
  for (let param in params) {
    const paramValue = params[param]
    if (searchParams.get(param)) {
      if (paramValue) {
        searchParams.set(param, paramValue)
      } else {
        searchParams.delete(param)
      }
    } else if (paramValue) {
      searchParams.append(param, paramValue)
    }
  }
  return searchParams.toString()
}