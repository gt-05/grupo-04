export default function Section(props) {
    let align = props.titleAlign ? props.titleAlign : 'left';
    align = `text-${align}`

    return (
        <>
            <div className="flex justify-between mx-[10%]">
                <div className={align + 'grow'}>
                    <h2>{props.title}</h2>
                </div>
                {props.link && (
                    <div className="w-auto flex items-center gap-2">
                        <a href={props.link.href}>{props.link.text}</a>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                )}
            </div>
            {props.children}
        </>
    )
}