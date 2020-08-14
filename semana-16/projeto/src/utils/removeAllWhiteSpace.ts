function removeAllWhiteSpace(data: any): string {
  if (!data || typeof data !== 'string') {
    return '';
  }

  const result = data.toString().replace(/ /g, '');

  return result;
}

export default removeAllWhiteSpace;
