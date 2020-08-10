
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
        height: "15%",
        // backgroundColor: "#545454",
        textAlign: "center"
    },
    input: {
        width: "100%",
        bottom: "0",
        position: "absolute"
    },
    log: {
        height: "70%",
        // maxHeight: "100%",
        // minHeight: "500px",
        flexDirection: "column-reverse",
        overflowY: "scroll",
        // overflow: "auto"
    }

}

export default chatRoomStyle;