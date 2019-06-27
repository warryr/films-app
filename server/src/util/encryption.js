import SHA256 from 'crypto-js/sha256';

const secret = '5D7C6CD34FC3587A38F13CDC7E715';

export const encryptData = async data => {
  const cipher = await SHA256(data, secret);
  return cipher.toString();
};
