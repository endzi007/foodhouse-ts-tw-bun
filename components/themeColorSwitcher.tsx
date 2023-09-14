export default function ThemeSwitcher(props: {
    switchTheme: ()=>void
    label: string
}){

    return <button onClick={props.switchTheme} className="fixed mt-[250px] left-0 z-40 bg-white">{props.label}</button>
}