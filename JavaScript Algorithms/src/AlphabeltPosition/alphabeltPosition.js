function alphabetPosition(text) {
  let result = "";

  for (let i = 0; i < text.length; i++)
    if (text.charAt(i).match(/[a-z]/i))
      result += `${text.charAt(i).toLowerCase().charCodeAt() - 96} `;

  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
