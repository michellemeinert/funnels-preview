import { ListItemProps, ListProps } from "@/app/types";
import Img from "./Img";

const ListItem = ({ src, title, description, id }: ListItemProps) => {
  return (
    <li id={id} className="flex py-2 px-4 border rounded-lg m-2">
      {src && (
        <Img
          src={src}
          alt={title}
          width={50}
          height={50}
          type="image"
        />
      )}
      <div className="ml-1">
        <h3 className="text-primary">{title}</h3>
        <p className="text-primary">{description}</p>
      </div>
    </li>
  );
}

const List = ({ id, items }: ListProps) => {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <ListItem key={`${id}-item-${i}`} {...item} />
      ))}
    </ul>
  );
}

export default List;