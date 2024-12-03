

const BButton = ({bgColor, txtcolor, bradius, btnFunc, btnName, children}) => {
    const styles = {
        backgroundColor: bgColor || 'blue',
        color: txtcolor || 'white',
        padding: "10px",
        border: "none",
        borderRadius: bradius|| "5px",
        cursor: "pointer",
        margin: "5px"

    }
    return (
    <button onClick={btnFunc} style={styles} classname= 
    {btnName}>{children}</button>
    )
};

export default BButton