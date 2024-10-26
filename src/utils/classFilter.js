export default function classFilter(...className) {
  return className.filter(Boolean).join("");
}
