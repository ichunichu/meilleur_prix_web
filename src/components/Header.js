import "./Header.css"
export function Header(){
    return <header>
        <h1>Meilleur Prix</h1>
        <div>
            <div id={"searchBox"}>
                <input type={"search"}/><span>Search</span>
            </div>

            <button>account</button>
        </div>
    </header>
}