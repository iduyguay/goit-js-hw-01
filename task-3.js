function getElementWidth(content, padding, border) {
  const parsedContent = Number.parseFloat(content);
  const parsedPadding = Number.parseFloat(padding);
  const parsedBorder = Number.parseFloat(border);
  return parsedContent + parsedPadding * 2 + parsedBorder * 2;
}
