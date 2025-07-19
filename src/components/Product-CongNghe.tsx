

export default function(props : any) {
    return (
        <div className="w-80">
            <div>
                <img src={props.AnhSanPham} alt="Ảnh sản phâm" />
            </div>
            <div className="text-center text-xl mt-5">
                <span>{props.TenSanPham}</span>
            </div>
        </div>
    )
}