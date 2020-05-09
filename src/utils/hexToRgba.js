export const hexToRgba = (hex, alpha = 1) => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    const hexList = hex.substring(1).split('');
    const fullHexadecimal =
      hexList.length === 3
        ? [
            hexList[0],
            hexList[0],
            hexList[1],
            hexList[1],
            hexList[2],
            hexList[2],
          ]
        : hexList;

    const hexColor = `0x${fullHexadecimal.join('')}`;
    const red = (hexColor >> 16) & 255;
    const green = (hexColor >> 8) & 255;
    const blue = hexColor & 255;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return hex;
};
