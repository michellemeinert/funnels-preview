import Button from "./Button";
import Img from "./Img";
import List from "./List";
import Text from "./Text";

const Block = ({ block }: any) => {
    switch (block.type) {
        case "image":
            return <Img {...block} />;
        case "button":
            return <Button {...block} />;
        case "list":
            return <List {...block} />;
        default:
            return <Text {...block} />;
    }
}
const Preview = ({ file }: any) => {
    return (
        <div>
            {file.pages[0].blocks.map((block: any) => <Block block={block} />)}
        </div>
    )
}

export default Preview;