const Input = ({ placeholder, value, onChange }) => (
    <input style={{
        padding: '10px',
        border: '2px solid #007BFF',
        borderRadius: '20px',
        fontSize: '1em',
        marginTop: '10px',
        width: '80%',
        maxWidth: '400px',
        boxSizing: 'border-box',
    }} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input