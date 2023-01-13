export default function phoneFormat() {
    return value.replace(/^(.{3})(.*)(.{4})/, "$1 $2 $3");
}