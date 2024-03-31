// Decimal sayıyı binary sayıya çevirme
convertoDecimaltoBinary(11);

function convertoDecimaltoBinary(number) {
  let binary = "";
  while (true) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2);
    if (number == 1) {
      binary += 1;
      break;
    }
  }
  let result = reverse(binary);
  console.log("Sonuc:" + result);
}

function reserve(binary) {
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }
  return reverseBinary;
}
