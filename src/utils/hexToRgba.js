/**
 * This function take a hexadecimal color and a alpha value and transform in a rgba value
 * @param  {string} hex the Hexadecimal color to be transformed to RGBA
 * @param  {number} alpha=1 Alpha value between o and 1 to be applyed to the hex Color
 * @return {string} rgba value
 */
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
