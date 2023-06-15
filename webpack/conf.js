// 图片大小限制
const imageInlineSizeLimit = 4 * 1024;
// 图片压缩类型
const imageBase64Path = 'assets/base64_images';
// 判断文件末尾是否为base64
const shouldBase64FromFileEnd = true;

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9000;

// 分割线
const divider = '-------------------------------------';
module.exports = {
  imageInlineSizeLimit,
  SERVER_HOST,
  SERVER_PORT,
  imageBase64Path,
  divider,
  shouldBase64FromFileEnd,
};
