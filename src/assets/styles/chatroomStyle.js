
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
        // backgroundColor: "#545454",
        // textAlign: "center"
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