
function verifyTree(htmlDocs) {
  const openTags = ["<div>", "<p>", "<i>", "<em>", "<b>"];
  const closeTags = ["</div>", "</p>", "</i>", "</em>", "</b>"];
  const strArr = new Array();

  let tags = htmlDocs.match(/(<\/*\w+>)/g);

  for (let i = 0; i < tags.length; i++) {
    if (openTags.includes(tags[i])) strArr.push(tags[i]);
    else {
      if (strArr.length === 0) return tags[i];
      let lastSym = strArr[strArr.length - 1];
      if (
        (tags[i] === closeTags[0] && lastSym === openTags[0]) ||
        (tags[i] === closeTags[1] && lastSym === openTags[1]) ||
        (tags[i] === closeTags[2] && lastSym === openTags[2]) ||
        (tags[i] === closeTags[3] && lastSym === openTags[3]) ||
        (tags[i] === closeTags[4] && lastSym === openTags[4])
      ) {
        strArr.pop();
      } else {
        break;
      }
    }
  }

  return strArr.length
    ? strArr[strArr.length - 1].replace(/>|</gi, "")
    : "true";
}

console.log(verifyTree("<div><div><b></b></div></p>")); //should return div
console.log(verifyTree("<div>abc</div><p><em><i>test test test</b></em></p>")); //should return i
console.log(verifyTree("<div><b><p>helo</p></b></div>")); //should return true

console.log(verifyTree("<div><div><b><b/></div></p>"));
console.log(verifyTree("<p><div></p></div>"));
console.log(verifyTree("<div><div>abc</div><p>hola</p></div>"));
console.log(verifyTree("<div></div><b></b>"));
