
const chatRoomStyle = {
    root: {
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
    },
    container: {
        width: "90%",
        maxWidth: "600px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        height: "70%"
    },
    header: {
        height: "13%",
    },
    headerContent: {
        position: "absolute",
        top: "3%",
        marginLeft: "15px"
        // transform: "translateY(-50%)"
    },
    input: {
        width: "100%",
        bottom: "0",
        position: "absolute"
    },
    log: {
        height: "75%",
        display: "flex",
        flexDirection: "column-reverse",
        overflowY: "auto",
    }

}

export default chatRoomStyle;