import Img from "./Img";

type ListItemProps = {
  id: string;
  title: string;
  description?: string;
  src?: string;
};

type ListProps = {
  id: string;
  items: ListItemProps[];
};

const ListItem = ({ src, title, description, id }: ListItemProps) => {
  return (
    <li id={id} className="flex flex-col py-2 px-4 border rounded-lg m-2">
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
      {src && (
        <Img
          src={src}
          alt={title}
          width={50}/>
      )}
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