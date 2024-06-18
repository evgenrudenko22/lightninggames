const Button = ({ text, onClick }) => (
    <button style={{
        backgroundColor: '#006add',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '1em',
        marginTop: '10px',
        transition: 'background-color 0.3s ease',
    }} onClick={onClick}>{text}</button>
);

export default Button;