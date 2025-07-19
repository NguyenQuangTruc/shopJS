

export default function (props: any) {
    return (
        <a href="">
            <div className={`${props.style}`}>
                {props.text}
            </div>
        </a>
    )
}