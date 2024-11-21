
export default function FilterGroup(props) {

    let align = props.titleAlign ? props.titleAlign : 'left';
    align = `text-${align}`;

    return (
        <>
            <div className="my-[5%]" >
                <h2 className="font-semibold">{props.title}</h2>
            </div>
            <div className="flex" >
                <input type={props.type} className="mr-[3%]"/>
                <p>{props.options}</p>
            </div>

            {props.children}

        </>
    )
}