interface PropsType {
    style?: Object;
}

const Svg = (props: PropsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="22"
        viewBox="0 0 5 22"
        style={props.style}
    >
        <rect
            id="Rectangle_100"
            data-name="Rectangle 100"
            width="5"
            height="22"
            fill="#fff"
        />
    </svg>
);

const PauseSvg = () => (
    <>
        <Svg style={{ marginRight: "5px" }} />
        <Svg />
    </>
);

export default PauseSvg;
