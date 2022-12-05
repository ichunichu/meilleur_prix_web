import "./Product.css"

export function ProductCard(){
return <a href={"#"}>
        <div className={"card"}>
        <img src={"https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/systems_5/nintendo_switch_3/not_approved_1/NSwitchTop.png"} alt={"product image"}/>
        <div className={"info"}>
            <h1>title</h1><p>PRICE €</p>
        </div>
    </div>
    </a>
}