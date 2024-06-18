const Modal = ({active, setActive, children}) => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: active ? 1 : 0,
            pointerEvents: active ? "all" : "none",
            transition: "0.5s",
            zIndex: 5
        }} onClick={() => setActive(false)}>
            <div style={{
                padding: 20,
                borderRadius: 12,
                backgroundColor: "#007BFF",
                transform: active ? "scale(1)" : "scale(0.5)",
                transition: "0.4s all",
                width: "50vw",
                fontSize: 20,
                color: "#636363"
            }} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;