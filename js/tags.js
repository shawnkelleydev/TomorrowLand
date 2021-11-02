//assigns tag for sorting
function getTag(input) {
  const text = input.toLowerCase();
  let tag = "other";
  if (
    text.includes("gift") ||
    text.includes("charity") ||
    text.includes("giv") ||
    text.includes("tithe")
  ) {
    tag = "give";
  } else if (
    text.includes("hous") ||
    text.includes("mortgage") ||
    text.includes("home")
  ) {
    tag = "debt";
  } else if (
    text.includes("xcel") ||
    text.includes("utilit") ||
    text.includes("xfinity") ||
    text.includes("mobile") ||
    text.includes("water") ||
    text.includes("electricity") ||
    text.includes("phone") ||
    text.includes("tv") ||
    text.includes("cable") ||
    text.includes("net")
  ) {
    tag = "utility";
  } else if (
    text.includes("food") ||
    text.includes("grocer") ||
    text.includes("gas") ||
    text.includes("trans")
  ) {
    tag = "wall";
  } else if (
    text.includes("adobe") ||
    text.includes("sibelius") ||
    text.includes("prime") ||
    text.includes("cloud") ||
    text.includes("sub") ||
    text.includes("spotify") ||
    text.includes("cloud") ||
    text.includes("music") ||
    text.includes("flix")
  ) {
    tag = "sub";
  }
  return tag;
}
