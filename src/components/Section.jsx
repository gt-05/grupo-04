export default function Section(props){
    let align = props.tittleAlign ? props.tittleAlign : 'left';
    align = `text-${align}`;
    return (
        <>
        <div className="flex">
            <div className={align + 'grow'}>
                <h2>{props.calopsita}</h2>

            </div>
            {props.link && (
                <div className="w-auto">
                    <a href={prop.link.href}>{props.link.text}</a>
                </div>
            )}
        </div>
        {props.children}
        </>
    )
}