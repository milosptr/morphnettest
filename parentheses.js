function checkBrackets(str) {
    var depth = 0;
    for (var i in str) {
      if (str[i] == "(") {
        depth++;
      } else if (str[i] == ")") {
        depth--;
      }
      if (depth < 0) return false;
    }
    if (depth > 0) return false;
    return true;
  }
  console.log(checkBrackets("(Welcome (to(Morph)))")); 
  console.log(checkBrackets("Welcome (to(the(Morph)"));
  console.log(checkBrackets("Lorem ((ipsum)(dolor)sit)"))