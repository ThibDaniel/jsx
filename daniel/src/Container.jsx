import { useState } from "react"

export function Container({children, title}){
const [collapsed, setCollapsed] = useState(false)
function handleToggle() {
    setCollapsed((t) => !t)

}
return(
    <div className="welcome">
        <div>
    {title}<button onClick={handleToggle}>Toggle</button>
    </div>
   {collapsed && <div>{children}</div>}
    </div>
)
}