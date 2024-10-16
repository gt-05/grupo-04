export default function Section(props) {
    let align = props.titleAlign ? props.titleAlign: 'left';
    align = `text-${align}`

    return (
        <>
        <div className="flex">
            <div className={align + 'grow'}>
                <h2>{props.title}</h2>
            </div>
            {props.link && (
                <div className="w-auto">
                    <a href={props.link.href}>{props.link.text}</a>
                </div>
            )}
        </div>
        {props.children}
        </>
    )}