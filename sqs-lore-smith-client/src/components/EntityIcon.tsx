interface Props {
    iconID: number
}

export default function EntityIcon({iconID}: Props) {
    const iconMap = [
        "/icons/bestial-fangs.png",
        "/icons/dinosaur-rex.png",
        "/icons/toad-teeth.png",
    ]
    console.log("iconID:"+iconID + " iconMap.length:"+iconMap.length+ " iconID % iconMap.length:"+ (iconID % iconMap.length));
    return <img src={iconMap[iconID % iconMap.length]} width="40" height="40"/>
}