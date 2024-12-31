interface BulletedListProps {
    items: string[],
}

export default function BulletedList(props: BulletedListProps) {

    const listItemProps = `
        relative flex items-center pl-4
        before:content-['•'] before:absolute
        before:left-0 before:font-bold
    `;

    return (
        <ul className="list-disc ml-4">
            {props.items.map((item, index) => (
                <li key={index} className={listItemProps}>
                    {item}
                </li>
            ))}
        </ul>
    );
};
