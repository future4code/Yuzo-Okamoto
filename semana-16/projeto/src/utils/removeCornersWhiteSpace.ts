function removeCornersWhiteSpace(data: any): string {
  if (!data || typeof data !== 'string') {
    return '';
  }

  const result = data.toString().replace(/^\s+|\s+$/g, '');

  return result;
}

export default removeCornersWhiteSpace;
