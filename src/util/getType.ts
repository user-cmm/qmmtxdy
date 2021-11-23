export default function getType(typeName:string) {
  switch (typeName){
    case "Drawing": return "安全的图片（包括动漫）";
    case "Hentai": return "hentai且色情图画";
    case "Neutral": return "安全的中性图片";
    case "Porn": return "色情图片、性行为";
    case "Sexy": return "色情图片，而非色情内容";
    default: throw Error("不存在的类型")
  }
}