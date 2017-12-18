/**
 * [makeQr 根据传入的值获取二维码]
 * @param  {Number} val [分钟数]
 * @return {[Number]}     [时间戳]
 */
export const makeQr = function (content, cellSize, margin) {
  const typeNumber = 4
  const errorCorrectionLevel = 'L'
  const qr = window.qrcode(typeNumber, errorCorrectionLevel)
  qr.addData(content)
  qr.make()
  return qr.createSvgTag(cellSize, margin)
}
