

export default function(props : any) {
    return (
        <div className="w-80">
            <div>
                <img src={props.logo} alt="Logo" />
            </div>
            <div className="text-center text-xl mt-5">
                <span>{props.Text}</span>
            </div>
        </div>
    )
}